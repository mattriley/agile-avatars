# Agile Avatars


WORK IN PROGRESS.

Source code for [agileavatars.com](https://agileavatars.com). An experiment in frameworkless/vanilla JavaScript.

![Build](https://github.com/mattriley/agileavatars/workflows/Build/badge.svg)
[![codecov](https://codecov.io/gh/mattriley/agileavatars/branch/master/graph/badge.svg)](https://codecov.io/gh/mattriley/agileavatars)
![Status](https://img.shields.io/uptimerobot/status/m783034155-295e5fbc9fd4a0e3a54363a5)
![30 days](https://img.shields.io/uptimerobot/ratio/m783034155-295e5fbc9fd4a0e3a54363a5)

> Agile Avatars makes it quick and easy to know who's working on what with great looking avatars for your agile board. No more fiddling with Word or Google Docs making sure everything aligns just right. Simply drag and drop your images, make some adjustments, print, and laminate!

This is a hobby project I decided to double as an experiment in developing a web application in JavaScript without the aid of a framework like React or Angular. Such an approach is often referred to as frameworkless, or vanilla JavaScript.

DISCLAIMER: Some of the approaches used may be unconventional. Any attempt to emulate these approaches should be done with the unique needs and circumstances of your endeavour taken into consideration.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

- [Getting started](#getting-started)
- [Summary of technical constraints](#summary-of-technical-constraints)
- [Architecture](#architecture)
  - [Architectural components](#architectural-components)
- [State management](#state-management)
  - [Stores](#stores)
  - [Subscriptions](#subscriptions)
- [Testing](#testing)
  - [Position](#position)
  - [Constraints](#constraints)
  - [Approach](#approach)
- [Dependencies](#dependencies)
  - [Position](#position-1)
  - [Constraints](#constraints-1)
  - [Production dependencies](#production-dependencies)
  - [Development dependencies](#development-dependencies)
- [Conventions](#conventions)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Getting started

__Prerequisites__
- Install Node 14.4.0 or install [nvm](https://github.com/nvm-sh/nvm) and run `nvm install`
- Install dependencies: `npm install`

__Tasks__
- Run the tests: `./task test`
- Start local dev server: `./task start`
- See all available dev tasks: `ls ./tasks`

__iTerm2 automated window arrangement (macOS only)__
- Install iTermocil: `./task itermocil-install`
- Launch window arrangement: `./task itermocil`

# Summary of technical constraints

- No languages that compile to JavaScript; No TypeScript. 
  - [You Might Not Need TypeScript (or Static Types) - Eric Elliott](https://medium.com/javascript-scene/you-might-not-need-typescript-or-static-types-aa7cb670a77b)
  - [The Shocking Secret About Static Types - Eric Elliott](https://medium.com/javascript-scene/the-shocking-secret-about-static-types-514d39bf30a3)
- No frameworks, view libraries, state management libraries; No Angular, React, Redux.
- No globals. Access to `window` strictly controlled.
- No classes. Prefer partial application.
  - [Curry and Function Composition - Eric Elliott](https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983)
- No `..` in require paths in `src` and `tests`. Minimise `..` in paths in general.
- Layered architecture for separation of concerns.
  - [PresentationDomainDataLayering - Martin Fowler](https://martinfowler.com/bliki/PresentationDomainDataLayering.html)
- Service functions are imperative shells.
  - [Functional Core, Imperative Shell - Gary Bernhardt](https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell)
- Module composition confined to a composition root.
  - [Composition Root - Mark Seemann](https://blog.ploeh.dk/2011/07/28/CompositionRoot/)
- Autogenerated `index.js` to aggregate siblings into an object graph. 

# Architecture

![Architecture](docs/architecture.svg)

Omitted for brievity:
- __Lib__: All depend on Lib except Config and IO.
- __Config__: All depend on Config except Elements and Lib.

A familiar presentation/domain/data __layered architecture__ has been used to manage __separation of concerns__. This is a common approach to modularise backend applications and therefore I hypothesise this design will be more approachable for backend developers.

## Architectural components

### Components

A plain object graph containing only _component builder functions_.

A __component builder function__ returns an object deriving [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) using closures to react to both user interaction and state changes (via subscriptions), may self-mutate, and interact with services.

<details open>
<summary>src/components/tag-list/tag/components/tag-name.js</summary>

```js
module.exports = ({ elements, services, subscriptions }) => tagInstanceId => {

    const $tagName = elements.editableSpan('tag-name')
        .addEventListener('change', () => {
            services.tags.changeTagInstanceName(tagInstanceId, $tagName.textContent);
        });

    subscriptions.tagInstances.onChange(tagInstanceId, 'tagName', tagName => {
        $tagName.textContent = tagName;
    });

    return $tagName;

};
```
</details>

Because component builder functions simply return native HTML elements, they can easily be appended to create component hierarchies.

<details open>
<summary>src/components/header/header.js</summary>

```js
module.exports = ({ el, header }) => () => {

    return el('header').append(
        header.titleBar(), 
        header.navBar()
    );
    
};
```
</details>

### Elements

A plain object graph containing only _element builder functions_.

An __element builder function__ returns an object deriving [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) using closures to react to user interaction, and may self-mutate.

Elements are 'fundamental' components. Unlike components, they cannot react to state changes or interact with services. For this reason, elements tend to be lower level, generic, and reusable.

<details open>
<summary>src/elements/editable-span.js</summary>

```js
module.exports = ({ window, elements }) => className => {

    const dispatchChange = () => $span.dispatchEvent(new window.Event('change'));

    const $span = elements.el('span', className)
        .addEventListener('blur', () => {
            dispatchChange();
        })
        .addEventListener('keydown', e => {            
            if (e.code === 'Enter') {
                e.preventDefault();
                dispatchChange();
            }
        });
    
    $span.setAttribute('contenteditable', true);

    return $span;
};
```
</details>

### Services

A plain object graph containing only _service functions_.

A __service function__ orchestrates domain logic and IO including state changes.

Inspired by [Functional Core, Imperative Shell](https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell), __services__ comprise the 'imperative shell'.

<details open>
<summary>src/services/tags/change-tag-instance-name.js</summary>

```js
module.exports = ({ core, services, stores }) => (tagInstanceId, expression) => {

    const { tagId } = services.tags.getTagInstance(tagInstanceId);
    const { tagName, roleName } = core.tags.parseTagExpression(expression);

    stores.tags.setState(tagId, { tagName });

    if (roleName) {
        const roleId = services.roles.findOrInsertRoleWithName(roleName);
        stores.tags.setState(tagId, { roleId });
    }
    
};
```
</details>

### Core

A plain object graph containing only _pure functions_.

From [Wikipedia](https://en.wikipedia.org/wiki/Pure_function):
> In computer programming, a __pure function__ is a function that has the following properties:
> 1. Its return value is the same for the same arguments (no variation with local static variables, non-local variables, mutable reference arguments or input streams from I/O devices).
> 2. Its evaluation has no side effects (no mutation of local static variables, non-local variables, mutable reference arguments or I/O streams).

Inspired by [Functional Core, Imperative Shell](https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell), __core__ comprises the 'functional core'.

<details open>
<summary>src/core/tags/parse-tag-expression.js</summary>

```js
module.exports = () => expression => {

    const [tagName, roleName] = expression.split('+').map(s => s.trim());        
    return { tagName, roleName };

};
```
</details>

### IO

A plain object graph containing only functions that that depend on or act on the environment. 

<details open>
<summary>src/io/io.js</summary>

```js
module.exports = ({ window }) => {

    return {
        random: window.Math.random,
        fetch: window.fetch.bind(window),
        date: () => new window.Date(),
        createFileReader: () => new window.FileReader()
    };

};
```
</details>

### Subscriptions

A plain object graph containing only _subscription functions_.

A __subscription function__ enables a listener to be notified of state changes.

### Stores

A plain object graph containing only instances of _state stores_.

A __state store__ encapsulates state mutations and notifications.

### Lib

A plain object graph containing only utility functions without collaborators.

### Config

A plain object graph containing only primitive data types.

# State management

Avoiding state management libraries forces the need for a bespoke state management solution.
No attempt is made to generify the state management solution for reuse by other applications; rather it is designed to evolve with the specific needs of this application.

## Stores

State is managed by a series of _state stores_. 

A **state store** is collection of data items keyed by a unique identifier and managed using typical CRUD operations such as `insert`, `remove`, `getState` and `setState`.

<details >
<summary>src/lib/storage/state-store.js</summary>

```js
const EventEmitter = require('events');

module.exports = (state, defaults = {}) => {
    let nextId = 1;
    const operations = {};
    const collectionEmitter = new EventEmitter();

    const manage = id => operations[id] ?? { getState: () => null };
    const getArray = () => Object.values(state);
    const getState = id => manage(id).getState();
    const setState = (id, changes) => manage(id).setState(changes);

    const onChange = (id, field, listener) => manage(id).subscriptions.onChange(field, listener);
    const onChangeAny = (field, listener) => collectionEmitter.on(`change:${field}`, listener);
    const onInsert = listener => collectionEmitter.on('insert', listener);
    const onFirstInsert = listener => collectionEmitter.once('firstInsert', listener);
    const onBeforeRemove = listener => collectionEmitter.on('beforeRemove', listener);
    const subscriptions = { onChange, onChangeAny, onInsert, onFirstInsert, onBeforeRemove };

    const insert = (data, callback) => {
        const id = data.id ?? nextId++;
        const item = { id, ...data };
        const itemEmitter = new EventEmitter();

        const getState = () => ({ ...item });

        const setState = changes => {
            Object.entries(changes).forEach(([field, val]) => {
                if (item[field] === val) return;
                item[field] = val;
                const emit = emitter => emitter.emit(`change:${field}`, item[field], item);
                [itemEmitter, collectionEmitter].forEach(emit);
            });
        };

        const onChange = (field, listener) => {
            itemEmitter.on(`change:${field}`, listener);
            listener(item[field], item);
        };

        const subscriptions = { onChange };
        operations[id] = { getState, setState, subscriptions };
        state[id] = item;  

        if (callback) callback(id);
        collectionEmitter.emit('firstInsert', id);
        collectionEmitter.emit('insert', id);
        return id;
    };

    const remove = id => {
        collectionEmitter.emit('beforeRemove', id);
        delete operations[id];
        delete state[id];
    };
    
    Object.entries(defaults).map(([id, entry]) => ({ id, ...entry })).forEach(entry => insert(entry));

    return { manage, insert, remove, getArray, getState, setState, subscriptions };

};
```
</details>

__Example: Inserting a role using `insert`__

<details open>
<summary>src/services/roles/insert-role.js</summary>

```js
module.exports = ({ stores, services, subscriptions }) => roleData => {

    const role = services.roles.buildRole(roleData);

    return stores.roles.insert(role, roleId => {
        subscriptions.roles.onChange(roleId, 'roleName', services.roles.setupRolePropagation(roleId));
    });

};
```
</details>

__Example: Changing a role name using `getState` and `setState`__

<details open>
<summary>src/services/roles/change-role-name.js</summary>

```js
module.exports = ({ services, stores }) => (roleId, roleName) => {

    const oldState = stores.roles.getState(roleId);
    const newState = services.roles.buildRole({ ...oldState, roleName });
    stores.roles.setState(roleId, newState);
    
};
```
</details>

## Subscriptions

State stores use the [observer pattern](https://en.wikipedia.org/wiki/Observer_pattern) to enable consumers to react to state changes by associating _listener_ functions to events such as `onInsert` and `onChange`.

The observer pattern is easily implemented with Node's [EventEmitter](https://nodejs.org/api/events.html) which can be bundled directly into the application.

During startup, subscription functions are extracted from the stores into a standalone _subscriptions_ object. This decouples subscribers (namely _services_ and _components_) from the stores making them agnostic of the data source. Although not a design goal for this application, this should allow the data source to change without impacting the subscribers provided the interface of the subscription functions do not change.

__Example: Reacting to a new role using `onInsert` and `onFirstInsert`__

<details open>
<summary>src/components/role-list/role-list.js</summary>

```js
module.exports = ({ el, roleList, subscriptions, lib }) => () => {

    const $roleList = el('div', 'role-list visible-false');

    subscriptions.roles.onInsert(roleId => {
        const $role = roleList.roleCustomiser(roleId);
        $roleList.append($role);
    });

    subscriptions.roles.onFirstInsert(() => {
        lib.ui.toggleBoolClass($roleList, 'visible', true);
    });

    return $roleList;
    
};
```
</details>

__Example: Reacting to the change of a role name using `onChange`__

<details open>
<summary>src/components/role-list/role-customiser/master-role-name.js</summary>

```js
module.exports = ({ elements, services, subscriptions }) => roleId => {

    const $roleName = elements.editableSpan(`role-name role${roleId}`)
        .addEventListener('change', () => {
            services.roles.changeRoleName(roleId, $roleName.textContent);
        });
    
    subscriptions.roles.onChange(roleId, 'roleName', roleName => {
        $roleName.textContent = roleName;
    });

    return $roleName;

};
```
</details>


# Testing 

## Position

The position taken in this application is that tests should enable __Merciless Refactoring__. The constraints below are designed to enable the application to change significantly and rapidly.

Further reading:
- [Refactoring - Martin Fowler](https://martinfowler.com/tags/refactoring.html)
- [Refactor Mercilessly - Ward Cunningham](https://wiki.c2.com/?RefactorMercilessly)
- [Refactor Mercilessly - Don Wells](http://www.extremeprogramming.org/rules/refactor.html)

## Constraints

- Unit test suite optimised for speed. Max 10 seconds.
  - [TDD test suites should run in 10 seconds or less - Mark Seemann](https://blog.ploeh.dk/2012/05/24/TDDtestsuitesshouldrunin10secondsorless/)
- No BDD style assertion libraries, e.g. expect. Used assert instead.
  - [I strongly recommend that you skip all BDD style assertion libraries - Eric Elliott](https://medium.com/@_ericelliott/i-strongly-recommend-that-you-skip-all-bdd-style-assertion-libraries-including-code-acae26344d4)
- No mocking libraries.
  - [Mocking is a code smell - Eric Elliott](https://medium.com/javascript-scene/mocking-is-a-code-smell-944a70c90a6a)
- No hooks, i.e. beforeEach, afterEach.
- No globals.

## Approach

The application is tested from the outside-in, starting with the components. A component's behaviour is tested by the effect it has on other components, treating the low level details as a black box. These are "sociable" as opposed to "solitary" unit tests.

__Example: Tips modal triggered by link in nav bar__

This test creates a 'nav bar' and a 'tips modal'; clicks the 'tips link' in the nav bar; then asserts the tips modal has a class indicating it should be visible. The mechanics behind this interaction are a black box, making it resilient to implementation changes which enables merciless refactoring.

<details open>
<summary>tests/components/tips.test.js</summary>

```js
module.exports = ({ test, boot, helpers }) => {

    test('tips modal triggered by link in nav bar', t => {
        const { components } = boot();
        const $tipsLink = components.header.navBar().querySelector('.tips');
        const $tipsModal = components.modals.tips('tips');
        helpers.dispatchEvent('click', $tipsLink);
        helpers.assertBoolClass(t, $tipsModal, 'visible', true);        
    });
    
};
```
</details>

Not every component is tested directly. Many low level components can be treated as a black box when exercised by a higher level component. 

Components are not designed and tested as though they'll be soon extracted as a reusable component library. This means components can be tested under the conditions they're used by this application, rather than how they might hypothetically be used by unknown consumers. This reduces the testing burden by allowing us to make reasonable assumptions about interactions between components, validity of parameters/data used, etc.

The intent with black box testing is to minimise the chances of tests breaking due to implmentation changes and thereby support merciless refactoring. 

Exceptions are made to the black box approach under certain conditions:

1. System boundary
2. Narrow feedback



### 2. System boundary

Where the execution path will reach a system boundary, stub just short of the integration to avoid coupling the test to the low level implementation details of the integration.

__Example: Gravatar service functions stubbed__

This test creates a 'gravatar modal' and a 'tag list'. Clicking the 'import button' will render a tag in the tag list using data fetched from Gravatar. The `fetchProfileAsync` and `fetchImageAsync` functions are stubbed to prevent the integration from occurring and to avoid coupling the test to the implementation details of the integration. 

<details open>
<summary>tests/components/gravatar/import-success.test.js</summary>

```js
module.exports = ({ test, setup }) => {

    test('import success', async t => {
        const { boot, helpers, window } = setup();

        const { components } = boot({
            services: {
                gravatar: {
                    fetchProfileAsync: () => ({ displayName: 'foo' }),
                    fetchImageAsync: () => new window.Blob(['BYTES'], { type: 'image/jpg' })
                }
            }
        });

        window.document.body.append(components.styles.tagImage()); 

        const $gravatarModal = components.modals.gravatar();
        const $freetextField = $gravatarModal.querySelector('.freetext');
        const $importButton = $gravatarModal.querySelector('.import');
        const $tagList = components.tagList();
        
        $freetextField.value = 'foo@bar.com';
        helpers.dispatchEvent('input', $freetextField);

        await helpers.onTagListMutation(
            $tagList,
            () => {
                helpers.dispatchEvent('click', $importButton);
            },
            async tag1 => {
                t.equal(tag1.getTagName(), 'Foo');
                t.equal(await tag1.getImage(), 'url(data:image/jpg;base64,QllURVM=)');
                helpers.assertBoolClass(t, $gravatarModal, 'visible', false); 
            }
        );  
    });

};
```
</details>

### 3. Narrow feedback

When it's helpful to narrow down failure feedback when execution path is too coarse. e.g. state-store evolved with the application rather than being built up-front. The state-store could be covered by the component tests but it's sufficiently complicated to justify it's own tests.

This testing approach supports classic TDD more so than mockist TDD.
- [Mocks Aren't Stubs - Martin Fowler](https://martinfowler.com/articles/mocksArentStubs.html)
  - [Classical and Mockist Testing](https://martinfowler.com/articles/mocksArentStubs.html#ClassicalAndMockistTesting)
- [Classical vs Mockist testing - Jonathan Rasmusson](https://agilewarrior.wordpress.com/2015/04/18/classical-vs-mockist-testing/)
- [Mockists Are Dead. Long Live Classicists - Fabio Pereria, ThoughtWorks](https://www.thoughtworks.com/insights/blog/mockists-are-dead-long-live-classicists)

Links
- [UnitTest - Martin Fowler](https://martinfowler.com/bliki/UnitTest.html)
  - [Solitary or Sociable?](https://martinfowler.com/bliki/UnitTest.html#SolitaryOrSociable)


# Dependencies

## Position

The position taken in this application is to view depenendencies as liabilities.
That's not to say dependencies should be avoided at all costs.
The constraints below are designed to minimise dependencies and encourage due diligence in cases where dependencies might be appropriate.

Further reading:
- [Unix philosophy - Wikipedia](https://en.wikipedia.org/wiki/Unix_philosophy)
- [Dependency Management Guidelines For Rails Teams - Brandon Dees](https://blog.engineyard.com/dependency-management-guidelines-for-rails-teams)
- [3 pitfalls of relying on third-party code libraries - Andy Henson](https://www.foxsoft.co.uk/3-pitfalls-of-relying-on-third-party-code-libraries/)

## Constraints

- Not driven by hype or popularity
- No alternative built into JavaScript exists
- Non-trivial to implement with vanilla JavaScript
- No alternative built into Node.js exists
- No alternative that more closely matches the need exists
- No alternative with fewer dependencies exists
- Low learning curve
- Low maintenance
- Low likelihood of changing in a material way
- Low impact of material change

The following sections lists all dependencies, including:

- Description and Homepage taken from package.json.
- Number of production dependencies followed by:
  - :boom: = 0 dependencies, :white_check_mark: = 1-9 dependencies, :warning: = 10+ dependencies
  - NB: There's no science behind these numbers. This is simply a guide to help keep the number of dependencies low.
  - NB: It would be even better to list the total number of dependencies in the entire dependency tree.
- Description of what the dependency is used for.
- Clarifying comments against the constraints listed above.
  
## Production dependencies

### ❖ @sentry/browser

> Official Sentry SDK for browsers

- Homepage: https://github.com/getsentry/sentry-javascript/tree/master/packages/browser
- __4__ dependencies :white_check_mark:

#### Used for

Integration with [Sentry](https://sentry.io/) for monitoring and alerting.




### ❖ blueimp-md5

> JavaScript MD5 implementation. Compatible with server-side environments like Node.js, module loaders like RequireJS, Browserify or webpack and all web browsers.

- Homepage: https://github.com/blueimp/JavaScript-MD5
- __0__ dependencies :boom:

#### Used for

Hashing of email addresses for use with the Gravatar service.

#### Comments

- __No alternative built into JavaScript exists__\
JavaScript does not feature a built-in MD5 implementation.

- __No alternative built into Node.js exists__\
The crypto module supports MD5. It does not seem possible to extract individual algorithms from crypto. The consequence is a minified bundle size of 431.78 KB compared with 4.86 KB for blueimp-md5 which is a significant difference.

- __No alternative that more closely matches the need exists__\
According to [this issue](https://github.com/blueimp/JavaScript-MD5/issues/26), the original use case was to hash email addresses for Gravatar.



### ❖ module-composer

> Composes 'modules' enabling coarse-grained module-level depenency injection

- Homepage: https://github.com/mattriley/node-module-composer
- __1__ dependency :white_check_mark:

#### Used for

Module composition / dependency injection.

#### Comments

- __No alternative that more closely matches the need exists__\
This library was extracted from Agile Avatars.



### ❖ vanilla-picker

> A simple, easy to use vanilla JS color picker with alpha selection.

- Homepage: https://vanilla-picker.js.org
- __1__ dependency :white_check_mark:

#### Used for

Presenting a color picker to change the color of a role.





## Development dependencies

### ❖ c8

> output coverage reports using Node.js' built in coverage

- Homepage: https://github.com/bcoe/c8#readme
- __13__ dependencies :warning:

#### Used for

Code coverage



#### Alternatives considered

- __nyc__\
nyc was originally used for code coverage and was fine however c8 was chosen for leveraging [native coverage](https://nodejs.org/dist/latest-v10.x/docs/api/cli.html#cli_node_v8_coverage_dir) in recent versions of Node and V8

### ❖ chokidar-cli

> Ultra-fast cross-platform command line utility to watch file system changes.

- Homepage: https://github.com/kimmobrunfeldt/chokidar-cli
- __4__ dependencies :white_check_mark:

#### Used for

Running tests automatically on file change.




### ❖ doctoc

> Generates TOC for markdown files of local git repo.

- Homepage: https://github.com/thlorenz/doctoc#readme
- __6__ dependencies :white_check_mark:

#### Used for

Generating README table of contents.




### ❖ ejs

> Embedded JavaScript templates

- Homepage: https://github.com/mde/ejs
- __1__ dependency :white_check_mark:

#### Used for

Generating README from a template.




### ❖ eslint

> An AST-based pattern checker for JavaScript.

- Homepage: https://eslint.org
- __37__ dependencies :warning:

#### Used for

Linting and code formatting.



#### Alternatives considered

- __prettier__\
Prettier was originally used for code formatting but was dropped due to limited configurability.

### ❖ husky

> Prevents bad commit or push (git hooks, pre-commit/precommit, pre-push/prepush, post-merge/postmerge and all that stuff...)

- Homepage: https://github.com/typicode/husky#readme
- __10__ dependencies :warning:

#### Used for

Running pre-commit validation scripts.




### ❖ jsdom

> A JavaScript implementation of many web standards

- Homepage: https://github.com/jsdom/jsdom#readme
- __26__ dependencies :warning:

#### Used for

Emulating a web browser so tests can be run with Node.js for speed.

#### Comments

- __Low impact of material change__\
There does not seem to be any viable replacement for JSDOM. The fallback would be to run the tests in a browser. The cost is estimated to be low.



### ❖ module-indexgen

> Generates index.js files

- Homepage: https://github.com/mattriley/node-module-indexgen
- __5__ dependencies :white_check_mark:

#### Used for

Generating index.js files.

#### Comments

- __No alternative that more closely matches the need exists__\
This library was extracted from Agile Avatars.



### ❖ parcel-bundler

> Blazing fast, zero configuration web application bundler

- Homepage: https://github.com/parcel-bundler/parcel#readme
- __59__ dependencies :warning:

#### Used for

Bundling the application.

#### Comments

- __No alternative with fewer dependencies exists__\
Parcel has many dependencies. An exception is made for ease of use.

- __Low learning curve__\
Designed to be easier to use than webpack.



### ❖ tap-mocha-reporter

> Format a TAP stream using Mocha's set of reporters

- Homepage: https://github.com/isaacs/tap-mocha-reporter
- __8__ dependencies :white_check_mark:

#### Used for

Formatting test output. Supports indented TAP output.




### ❖ zora

> tap test harness for nodejs and browsers

- Homepage: https://github.com/lorenzofox3/zora#readme
- __0__ dependencies :boom:

#### Used for

Lightweight test harness optimised for speed and simplicity.



#### Alternatives considered

- __tape__\
tape was originally used however zora is newer and has some advantages over tape.


# Conventions

### Prefix $ to variables storing HTML element and $$ for collections of HTML elements

I generally prefer to avoid variable prefixes but I've found these prefixes help in a couple of ways:

1. Improves visual scanning of code making it faster to interpret.
2. Avoids naming conflicts, e.g. `$tagName.textContext = tagName;`

### Clarifying comments as footnotes

Such comments are secondary to the code and so follow the code rather than preceed it.

<details open>
<summary>src/components/tag-list/tag/components/tag-image.js</summary>

```js
module.exports = ({ el }) => () => {

    return el('div', 'tag-image');

};

/* FOOTNOTES

Actual image is rendered using CSS background-image as a performance optimisation.

*/
```
</details>

### Async functions end with the word Async

This just makes it easier to know when to use `await`.

### Functional programming

- Prefer `const` over `let`, and avoid `var`.
- Prefer higher-order functions such as `filter`, `map`, `reduce`, over imperative looping statements.
