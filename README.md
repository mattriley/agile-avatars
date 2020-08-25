# Agile Avatars


WORK IN PROGRESS.

Source code for [agileavatars.com](https://agileavatars.com). An experiment in frameworkless/vanilla JavaScript.

![Build](https://github.com/mattriley/agileavatars/workflows/Build/badge.svg)
[![codecov](https://codecov.io/gh/mattriley/agileavatars/branch/master/graph/badge.svg)](https://codecov.io/gh/mattriley/agileavatars)
![Status](https://img.shields.io/uptimerobot/status/m783034155-295e5fbc9fd4a0e3a54363a5)
![30 days](https://img.shields.io/uptimerobot/ratio/m783034155-295e5fbc9fd4a0e3a54363a5)

> Agile Avatars makes it quick and easy to know who's working on what with great looking avatars for your agile board. No more fiddling with Word or Google Docs making sure everything aligns just right. Simply drag and drop your images, make some adjustments, print, and laminate!

This is a hobby project I decided to double as an experiment in writing a web application in JavaScript without the aid of a framework like React or Angular. Such an approach is often referred to as frameworkless, or vanilla JavaScript.

DISCLAIMER: Some of the approaches used may be unconventional. Any attempt to emulate these approaches should be done with the unique needs and circumstances of your project taken into consideration.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

- [Architecture](#architecture)
  - [Architectural components](#architectural-components)
    - [Components](#components)
    - [Elements](#elements)
    - [Services](#services)
    - [Core](#core)
    - [IO](#io)
    - [Subscriptions](#subscriptions)
    - [Stores](#stores)
    - [Lib](#lib)
    - [Config](#config)
- [State management](#state-management)
- [Constraints](#constraints)
  - [System quality attributes](#system-quality-attributes)
    - [Learnability](#learnability)
    - [Maintainability](#maintainability)
  - [Technical constraints](#technical-constraints)
    - [No frameworks](#no-frameworks)
    - [No view libraries](#no-view-libraries)
    - [No state management libraries](#no-state-management-libraries)
    - [No globals](#no-globals)
    - [No classes](#no-classes)
    - [non-index.js files must only be loaded from index.js files](#non-indexjs-files-must-only-be-loaded-from-indexjs-files)
    - [Minimise test doubles and avoid mocking libraries](#minimise-test-doubles-and-avoid-mocking-libraries)
- [Dependencies](#dependencies)
  - [Production dependencies](#production-dependencies)
    - [@sentry/browser](#sentrybrowser)
    - [blueimp-md5](#blueimp-md5)
    - [lodash](#lodash)
    - [module-composer](#module-composer)
    - [vanilla-picker](#vanilla-picker)
  - [Development dependencies](#development-dependencies)
    - [ejs](#ejs)
    - [eslint](#eslint)
    - [jsdom](#jsdom)
    - [module-indexgen](#module-indexgen)
    - [nyc](#nyc)
    - [parcel-bundler](#parcel-bundler)
    - [tap-summary](#tap-summary)
    - [tape](#tape)
- [Conventions](#conventions)
    - [Prefix $ to variables storing HTML element and $$ for collections of HTML elements](#prefix--to-variables-storing-html-element-and--for-collections-of-html-elements)
    - [Clarifying comments as footnotes](#clarifying-comments-as-footnotes)
    - [Functional programming](#functional-programming)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Architecture

![Architecture](docs/architecture.svg)

Omitted for brievity:
- __Lib__: All depend on Lib except Config and IO.
- __Config__: All depend on Config except Elements and Lib.

## Architectural components

### Components

A plain object graph containing only _component builder functions_.

A __component builder function__ returns an object deriving [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) using closures to react to both user interaction and state changes (via subscriptions), may self-mutate, and interact with services.

Example:

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

__Why not decouple components from services using pub/sub?__

TODO: Elaborate.

### Elements

A plain object graph containing only _element builder functions_.

An __element builder function__ returns an object deriving [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) using closures to react to user interaction, and may self-mutate.

Elements are 'fundamental' components. Unlike components, they cannot react to state changes or interact with services. For this reason, elements tend to be lower level, generic, and reusable.

Example:

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

Example:

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

Example:

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
const Sentry = require('@sentry/browser');

module.exports = ({ window, config }) => {

    Sentry.init(config.sentry);

    return {
        sentry: Sentry,        
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

<details >
<summary>src/lib/storage/state-store.js</summary>

```js
const EventEmitter = require('events');

module.exports = localState => {
    let nextId = 1;
    const funcIndex = {};
    const collectionEmitter = new EventEmitter();

    const manage = id => funcIndex[id] ?? { getState: () => null };
    const getArray = () => Object.values(localState);
    const getState = id => manage(id).getState();
    const setState = (id, changes) => manage(id).setState(changes);

    const onChange = (id, key, listener) => manage(id).subscriptions.onChange(key, listener);
    const onChangeAny = (key, listener) => collectionEmitter.on(key, listener);
    const onInsert = listener => collectionEmitter.on('insert', listener);
    const onFirstInsert = listener => collectionEmitter.once('firstInsert', listener);
    const onBeforeRemove = listener => collectionEmitter.on('beforeRemove', listener);
    const subscriptions = { onChange, onChangeAny, onInsert, onFirstInsert, onBeforeRemove };

    const insert = (data, callback) => {
        const id = nextId++;
        const state = { id, ...data };
        const itemEmitter = new EventEmitter();

        const getState = () => ({ ...state });

        const setState = changes => {
            Object.entries(changes).forEach(([key, val]) => {
                state[key] = val;
                const emit = emitter => emitter.emit(key, state[key], state);
                [itemEmitter, collectionEmitter].forEach(emit);
            });
        };

        const onChange = (key, listener) => {
            itemEmitter.on(key, listener);
            const invoke = () => listener(state[key], state);
            invoke();
        };

        const subscriptions = { onChange };
        localState[id] = state;  
        funcIndex[id] = { getState, setState, subscriptions };

        if (callback) callback(id);
        collectionEmitter.emit('firstInsert', id);
        collectionEmitter.emit('insert', id);
        return id;
    };

    const remove = id => {
        collectionEmitter.emit('beforeRemove', id);
        delete funcIndex[id];
        delete localState[id];
    };

    return { manage, insert, remove, getArray, getState, setState, subscriptions };

};
```
</details>

# Constraints

## System quality attributes

### Learnability

- Prioritise for beginner-friendliness, or [Shoshin](https://en.wikipedia.org/wiki/Shoshin), meaning "beginner's mind".
- Minimise the need for prerequisite knowledge.
- Minimise the number of elements to learn beyond native JavaScript and basic design patterns.
- Minimise the use of obscure language features.
- When multiple options exist, use the simplest tool for the job.

### Maintainability

- Minimise dependencies to reduce security concerns and upgrade cycles.
- Clean code. [Here's a good summary](https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29).
- Adopt functional programming techniques with a low learninig curve, supported by native JavaScript.

## Technical constraints

### No frameworks

### No view libraries 

### No state management libraries

### No globals

### No classes

### non-index.js files must only be loaded from index.js files

Constraints:
- `index.js` files must load and export sibling files and directories.
- Non-`index.js` files must only load directories (i.e. `index.js` files).

Implications:
- Files are loaded only once each.
- Results are shared by "passing down" using function arguments.
- Non-`index.js` files have very few import/require statements.
- `index.js` files have a single responsibility.
- `index.js` files don't contain logic.
- `index.js` files could be generated.
- Increases likelihood that any logic is placed in appropriately named file, which improves searchability.
- Increase the likelihood that dependencies will be structured in a logical and predictable manner.

Avoids:
- Source files starting with potentially large blocks of import/require statements.
- Loading the same file multiple times with a slighly different relative path.
- Coupling to file paths in general.

### Minimise test doubles and avoid mocking libraries

Eric Elliott's [Mocking is a code smell](https://medium.com/javascript-scene/mocking-is-a-code-smell-944a70c90a6a) says it all:

> Mocking is required when our decomposition strategy has failed.

Encourages:
- Loose coupling.
- Test doubles without the aid of a library.



# Dependencies

## Production dependencies

### @sentry/browser

The JavaScript SDK for Sentry, a cloud-based application monitoring service.

### blueimp-md5

A JavaScript implementation of the md5 hashing algorithm.

Notes:
- Used to hash email addresses sent to Gravatar.

__Why not use crypto from Node.js and avoid the extra dependency?__

As far as I can tell, it's not possible to extract individual algorithms from crypto. The consequence is a minified bundle size of 431.78 KB compared with blueimp's 4.86 KB. The difference is significant and justifies the extra dependency.

### lodash

A JavaScript utility library.

Notes:
- Used by exception where there's no concise native JavaScript alternative.
- Functions are required individually to minimise bundle size, e.g. `require('lodash/merge')`

### module-composer

Enables dependency injection using currying.

Notes:
- I am the author of this library.

### vanilla-picker

A vanilla JavaScript color picker. 

Notes:
- It was suprisingly hard to find a good looking, easy to use color picker writting in vanilla JavaScript. Many color pickers are implemented as jQuery plugins.
- I am using a fork which I have customised to accept a window object in order to avoid globals.

## Development dependencies

### ejs

A simple templating language that lets you generate HTML markup with plain JavaScript.

Used for:
- Generating `README.md` from a template to reduce duplication and improve maintainability.

### eslint

A static code analysis tool for identifying problematic patterns found in JavaScript code.

Notes:
- Also used for automatic code formatting.
- I had originally used prettier for code formatting but was regularly dissatisfied with the results.

### jsdom

Emulates a web browser for testing web applications with Node.js.

Notes:
- I had originally used in conjunction with jsdom-global until I decided to strictly limit use of globals.

### module-indexgen

Generates index.js files with Node.js.

Notes:
- I am also the author of this library.

### nyc

A JavaScript test coverage tool.

### parcel-bundler

A zero-configuration web application bundler.

Notes:
- I have found Parcel to be much simpler to use than webpack.

### tap-summary

A TAP (Test Anything Protocol) reporter.

Notes:
- A benefit of TAP is the variety of reporters available.
- tap-summary output is minimal and includes duration of each test which is useful for keeping the tests fast.

### tape

A very lightweight TAP producing test harness.

# Conventions

### Prefix $ to variables storing HTML element and $$ for collections of HTML elements

I generally prefer to avoid variable prefixes but I've found these prefixes help in a couple of ways:

1. Improves visual scanning of code making it faster to interpret.
2. Avoids naming conflicts, e.g. `$tagName.textContext = tagName;`

### Clarifying comments as footnotes

Such comments are secondary to the code and so follow the code rather than preceed it.

Example: 

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

### Functional programming

- Prefer `const` over `let`, and avoid `var`.
- Prefer higher-order functions such as `filter`, `map`, `reduce`, over imperative looping statements.
- Prefer currying dependencies over constructors (classes), e.g. `({ dep1, dep2 }) => ({ arg1, arg2 }) => { ... }`
