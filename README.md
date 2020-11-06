# Agile Avatars

![Build](https://github.com/mattriley/agileavatars/workflows/Build/badge.svg)
[![codecov](https://codecov.io/gh/mattriley/agileavatars/branch/master/graph/badge.svg)](https://codecov.io/gh/mattriley/agileavatars)
![Status](https://img.shields.io/uptimerobot/status/m783034155-295e5fbc9fd4a0e3a54363a5)
![30 days](https://img.shields.io/uptimerobot/ratio/m783034155-295e5fbc9fd4a0e3a54363a5)


Source code for [agileavatars.com](https://agileavatars.com). An experiment in frameworkless/vanilla JavaScript.

> Agile Avatars makes it quick and easy to know who's working on what with great looking avatars for your agile board. No more fiddling with Word or Google Docs making sure everything aligns just right. Simply drag and drop your images, make some adjustments, print, and laminate!

<br>
<p align="center">
  <img src="readme-docs/demo.gif?raw=true" />
  <br>
  <em>Agile Avatars in action</em>
</p>
<br>

Agile Avatars is also an experiment in developing a web application under an extreme set of constraints designed to preclude mainstream solutions. Bare in mind that Agile Avatars is small and doesn't necessarily cover every concern found in a typical web application. It does however do enough to present some interesting design challenges, especially around code organisation, dependency management, state management and view rendering. 

The solutions are designed around the needs of this application at this point in time. The design is intended to be evolvable through refactoring as the needs of the application change over time. The intent is to see what kind of design emerges as a result of an extreme set of constraints.

NOTE: WORK IN PROGRESS!

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

- [Getting Started](#getting-started)
- [Design Goals](#design-goals)
- [Technical Constraints](#technical-constraints)
- [Architecture](#architecture)
- [Launching](#launching)
- [Booting](#booting)
- [Modules](#modules)
  - [List of modules](#list-of-modules)
- [State Management](#state-management)
  - [Stores](#stores)
  - [Subscriptions](#subscriptions)
- [View Rendering](#view-rendering)
  - [DOM API - document.createElement](#dom-api---documentcreateelement)
  - [HTML strings - element.innerHTML](#html-strings---elementinnerhtml)
- [Testing](#testing)
  - [Approach](#approach)
- [Dependencies](#dependencies)
  - [Position](#position)
  - [Constraints](#constraints)
  - [List of production dependencies](#list-of-production-dependencies)
  - [List of development dependencies](#list-of-development-dependencies)
- [Functional Programming](#functional-programming)
- [Conventions](#conventions)
  - [Code](#code)
  - [Documentation](#documentation)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Getting Started

### Prerequisites

- Install Node 14.4.0 or install [nvm](https://github.com/nvm-sh/nvm) and run `nvm install`
- Install dependencies: `npm install`

### Tasks

- Run the tests: `./task test`
- Start dev server: `./task serve`
- List all tasks: `ls ./tasks`

### iTerm2 pre-configured layout (macOS only)

[iTermocil](https://github.com/TomAnthony/itermocil) allows you to setup pre-configured layouts of windows and panes in [iTerm2](https://www.iterm2.com/).

- Install iTermocil and launch the pre-configured layout: `./task itermocil`

<br>
<p align="center">
  <img src="readme-docs/itermocil.png?raw=true" />
  <br>
  <em>iTerm2 pre-configured layout</em>
</p>
<br>


# Design Goals

- Beginner friendly. Minimise prerequisite knowledge.
- Approachable to developers of varying backgrounds and experience.
- Reduce cognitive load. Simplicity. Minimalism. Organisation. Ability to maintain a mental model.
- Minimise "infrastructure code". Not attempting duplicate mainstream design patterns or build a resuable framework.
- Low maintenance. Avoid dependencies that could impact the application in a material way.
- Flexibility. Avoid dependencies that take over the control flow of the application.
- Easy to change. Tests run fast. Tests are behavioural.
- Functional leaning. Avoid strict functional programming.
- Enables merciless refactoring.
- Embrace JavaScript as a dynamically typed language.

Further reading:

- [Refactoring - Martin Fowler](https://martinfowler.com/tags/refactoring.html)
- [Refactor Mercilessly - Ward Cunningham](https://wiki.c2.com/?RefactorMercilessly)


# Technical Constraints

### General

- No languages that compile to JavaScript, e.g. TypeScript.  
- No frameworks, e.g. Angular, Vue.  
- No view rendering libraries, e.g. React.  
- No CSS-in-JS libraries, e.g. Styled Components.  
- No CSS pre-processors, e.g. SASS, SCSS.  
- No state management libraries, e.g. Flux, Redux.  
- No functional programming libraries, e.g. Rambda, Immutable.  
- No general purpose utility libraries, e.g. Lodash, Underscore.  
- No task runners, e.g. Grunt, Gulp.  
- No globals. Access to _window_ strictly controlled.  
- No classes/prototypes.  

Further reading:

- [List of languages that compile to JS](https://github.com/jashkenas/coffeescript/wiki/List-of-languages-that-compile-to-JS)
- [The Brutal Lifecycle of JavaScript Frameworks - Ian Allen](https://stackoverflow.blog/2018/01/11/brutal-lifecycle-javascript-frameworks/)
- [You Might Not Need TypeScript (or Static Types) - Eric Elliott](https://medium.com/javascript-scene/you-might-not-need-typescript-or-static-types-aa7cb670a77b)
- [The Shocking Secret About Static Types - Eric Elliott](https://medium.com/javascript-scene/the-shocking-secret-about-static-types-514d39bf30a3)
- [The TypeScript Tax - Eric Elliot](https://medium.com/javascript-scene/the-typescript-tax-132ff4cb175b)

### Testing

- Optimised for speed/fast feedback. Single digit seconds for entire suite.
- No compilation/pre-processing required to run tests.
- No globals. e.g. Mocha, Jest.
- No hooks. e.g. _beforeEach_, _afterEach_.
- No BDD-style assertion libraries, e.g. _should_ or _expect_ found in Mocha, Jest.
- No mocking libraries, e.g. Sinon, Jest.    
- No circumvention of the module loading system, e.g. Rewire, Proxyquire, Jest.

Further reading:

- [Mocks Aren't Stubs - Martin Fowler](https://martinfowler.com/articles/mocksArentStubs.html)
- [Classical and Mockist Testing](https://martinfowler.com/articles/mocksArentStubs.html#ClassicalAndMockistTesting)
- [Mockists Are Dead. Long Live Classicists - Fabio Pereria, ThoughtWorks](https://www.thoughtworks.com/insights/blog/mockists-are-dead-long-live-classicists)
- [TDD test suites should run in 10 seconds or less - Mark Seemann](https://blog.ploeh.dk/2012/05/24/TDDtestsuitesshouldrunin10secondsorless/)
- [I strongly recommend that you skip all BDD style assertion libraries - Eric Elliott](https://medium.com/@_ericelliott/i-strongly-recommend-that-you-skip-all-bdd-style-assertion-libraries-including-code-acae26344d4)
- [Mocking is a code smell - Eric Elliott](https://medium.com/javascript-scene/mocking-is-a-code-smell-944a70c90a6a)


# Architecture

With the plethora of frontend architectural styles in use today, this application takes a "back to basics" approach with a classic layered architecture. The thought being that the simplicity and familiarity of this architectural style would be approachable for a wide audience including backend developers with limited exposure to frontend development.

<br>
<p align="center">
  <img src="readme-docs/architecture.svg?raw=true" />
  <br>
  <em>Presentation-Domain-Data layered architecture</em>
</p>
<br>

Further reading:
- [PresentationDomainDataLayering - Martin Fowler](https://martinfowler.com/bliki/PresentationDomainDataLayering.html)


# Launching

The application is built with a module bundler called [Parcel](https://parceljs.org/). Given a HTML file, Parcel follows dependencies to produce a bundle. Parcel extends module loading to allow glob patterns and file types not normally recognised by JavaScript such as CSS files.

While convenient, this creates a strong coupling to Parcel, as in, the code cannot be interpreted without it. Pre-processing JavaScript, whether it be Parcel or any other tool, increases the time it takes to reflect changes. This is problematic in scenarios where speed matters, such as running unit tests.

The application is split into 2 top-level directories: public and src.

- __public__ contains the entry HTML file, static assets such as images and CSS, and the minimum amount of code needed to launch 'the application'.
- __src__ contains all the code comprising 'the application'. 

In order to isolate Parcel, only public may use Parcel loaders. This allows unit tests to cover src without having to build the application which helps keep the tests fast.

The following code is referenced by index.html and launches the application:


<details open>
<summary>public/app.js</summary>

```js
require('./css/*.css');
const boot = require('../boot');
const config = require('./config');
const { startup } = window.agileavatars = boot({ window, config });
startup(app => document.body.append(app));
```
</details>

Launch sequence:

1. At build time, Parcel interprets `require('./css/*.css');`, combines each CSS file into a single file which is then referenced by a link tag that Parcel injects into the document head.
2. At run time, the boot function is invoked with the global window object and config, returning the initialised application modules.
3. The modules are assigned to `window.agileavatars` for demonstration and debugging purposes.
4. The startup function is invoked with a callback receiving an instance of the root component, app, which is then appended to the document body.

<br>
<p align="center">
  <img src="readme-docs/console-modules.png?raw=true" />
  <br>
  <em>Application modules logged to the console</em>
</p>
<br>

<br>
<p align="center">
  <img src="readme-docs/console-state.png?raw=true" />
  <br>
  <em>Application state logged to the console</em>
</p>
<br>


# Booting

Booting is the process of making the application 'ready to launch' and involves loading configuration, composing modules, and returning the composed modules.

The boot function composes the application from modules in the src directory.


<details open>
<summary>boot.js</summary>

```js
const composer = require('module-composer');
const src = require('./src');
const { storage, util } = src;

module.exports = ({ window, ...overrides }) => {

    const compose = composer(src, { overrides });
    const config = compose('config');
    
    // Data
    const stores = compose('stores', { storage, config });
    const subscriptions = compose('subscriptions', { stores, util });

    // Domain
    const core = compose('core', { util, config });
    const io = compose('io', { window });
    const services = compose('services', { subscriptions, stores, core, io, util, config });
    const vendorServices = compose('vendorServices', { io, config, window });
        
    // Presentation
    const { el, ...ui } = compose('ui', { window });        
    const elements = compose('elements', { el, ui, util });
    const vendorComponents = compose('vendorComponents', { el, ui, config, window });
    compose('components', { el, ui, elements, vendorComponents, vendorServices, services, subscriptions, util, config });
    compose('styles', { el, ui, subscriptions, config });

    // Startup    
    compose('diagnostics', { stores, util });
    compose('startup', compose.getModules());
    return compose.getModules();

};
```
</details>

This 'codified view' of the architecture has some interesting implications:

- Easier to understand how the application "hangs together".
- Easier to control and manage dependencies. Makes inappropriate dependencies more visible.
- Ability to test the integrated application without also launching it.
- Ability to programatically analyse and visualise dependencies.

<br>
<p align="center">
  <img src="readme-docs/modules.svg?raw=true" />
  <br>
  <em>Generated dependency diagram using <a href="https://mermaid-js.github.io/mermaid">Mermaid</a></em>
</p>
<br>


Modules | startup | components | services | styles | vendor<br>components | vendor<br>services | diagnostics | elements | ui | io | core | subscriptions | stores | window | config
--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---:
startup | n/a | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌
components | ✅ | n/a | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌
services | ✅ | ✅ | n/a | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌
styles | ✅ | ❌ | ❌ | n/a | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌
vendorComponents | ✅ | ✅ | ❌ | ❌ | n/a | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌
vendorServices | ✅ | ✅ | ❌ | ❌ | ❌ | n/a | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌
diagnostics | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | n/a | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌
elements | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | n/a | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌
ui | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ | ✅ | n/a | ❌ | ❌ | ❌ | ❌ | ❌ | ❌
io | ✅ | ❌ | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | n/a | ❌ | ❌ | ❌ | ❌ | ❌
core | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | n/a | ❌ | ❌ | ❌ | ❌
subscriptions | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | n/a | ❌ | ❌ | ❌
stores | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | n/a | ❌ | ❌
window | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | n/a | ❌
config | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | n/a
<p align="center"><em>Generated dependency mapping</em></p>

### Deglobalising window

window is a global [God object](https://en.wikipedia.org/wiki/God_object) that makes it too easy to misplace responsibilities. For example, manipulating the DOM or making HTTP requests from anywhere in the application.

The application has been designed to mitigate such misplaced responsibilities by avoiding the global window object altogether. The boot function expects a window object to be explicitly provided which is then passed to only the selected modules that are allowed to access it.

While this helps be intentional of how window is accessed, it still doesn't prevent use of the global window object. So, in order to _detect_ inappropriate access, window is not made globally available in the unit tests. This is possible because the unit tests run on Node.js instead of a browser environment. JSDOM is used to emulate a browser and create a non-global window object to provide to the boot function. This causes any code referencing the global window object to fail.

### module-composer

__module-composer__ is a small library that reduces the amount of boilerplate code needed to compose modules. It was extracted from Agile Avatars for reuse. For transparency, here is the source code:


<details >
<summary>node_modules/module-composer/src/module-composer.js</summary>

```js
const merge = require('lodash/merge');
const { isObject, isFunction, forEach, mapValues, pick } = require('./util');

module.exports = (parent, options = {}) => {
    const overrides = options.overrides || {};
    const modules = { ...parent };
    const dependencies = {};
    const compose = (key, arg = {}) => {
        arg = { ...arg };        
        delete arg[key];
        const obj = parent[key];
        const composed = composeRecursive(obj, arg, key);
        const collapsed = collapseRecursive({ [key]: composed })[key];
        const module = override({ [key]: collapsed }, overrides)[key];
        Object.assign(modules, { [key]: module });
        Object.assign(dependencies, { [key]: Object.keys(arg) });
        return module;
    };
    const getModules = () => ({ ...modules, __dependencies: { ...dependencies } });
    return Object.assign(compose, { getModules });
};

const composeRecursive = (obj, arg, parentKey) => {
    if (!isObject(obj)) return obj;
    const product = {}; 
    const newArg = { [parentKey]: product, ...arg };
    const newObj = mapValues(obj, (val, key) => (isFunction(val) ? val(newArg) : composeRecursive(val, newArg, key)));
    return Object.assign(product, newObj);
};

const collapseRecursive = (obj, parentObj, parentKey) => {
    if (isObject(obj)) {
        forEach(obj, (val, key) => {
            if (key === parentKey) {
                parentObj[key] = Object.assign(val, parentObj[key]);
                delete val[key];
            }
            collapseRecursive(val, obj, key);
        });    
    }
    return obj;
};

const override = (obj, overrides) => {
    return merge(obj, pick(overrides, Object.keys(obj)));
};
```
</details>

Related:
- [module-composer](#-module-composer) in the [Dependencies](#dependencies) section.

### Further reading

- [Composition Root - Mark Seemann](https://blog.ploeh.dk/2011/07/28/CompositionRoot/)


# Modules

The application is composed of architectural components called modules. Each module has a separate responsibility and may be composed with collaborating modules.

On the file system, a module is simply a directory of sources files that follow some simple rules:

- Each file and subdirectory (i.e. nested index.js) is loaded by index.js in the same directory.
- Each index.js exports an aggregate object of all files and directories loaded.
- Each file exports a function, so file names tend to be function names.
- Where a module is to be composed with collaborating modules, exported functions must be curried to first accept the collaborators.

__Example: Root index.js for components module__


<details open>
<summary>src/components/index.js</summary>

```js
module.exports = {
    gravatar: require('./gravatar'),
    header: require('./header'),
    imageUploadOptions: require('./image-upload-options'),
    modals: require('./modals'),
    optionsBar: require('./options-bar'),
    roleList: require('./role-list'),
    tagList: require('./tag-list'),
    tips: require('./tips'),
    app: require('./app'),
    dropzone: require('./dropzone'),
    modal: require('./modal')
};
```
</details>

__Example: Curried function accepting collaborators__


<details open>
<summary>src/components/tag-list/tag/components/tag-name.js</summary>

```js
module.exports = ({ elements, services, subscriptions }) => tagInstanceId => {

    const $tagName = elements.editableSpan('tag-name')
        .addEventListener('change', () => {
            services.tags.changeTagName(tagInstanceId, $tagName.textContent);
        });

    subscriptions.tagInstances.onChange(tagInstanceId, 'tagName', tagName => {
        $tagName.textContent = tagName;
    });

    return $tagName;

};
```
</details>

This design has some interesting implications:

- Any source file is only referenced and loaded once in the entire application making it easier to move files around.
- In general, index.js files don't have a clear responsibility, sometimes even containing important implementation details that can be hard to find given any Node.js project will have many of them. This design ensures index.js files have a clear responsibility of their own and don't contain important implementation details that would be better extracted and named appropriately.
- Remove the noise of many require/import statements at the top of any file.
- No backtracking paths, i.e. `..` helps reduce cognitive load (for me anyway!).
- The approach to index.js forms a pattern which can be automated with code generation. See [module-indexgen](https://github.com/mattriley/agileavatars#-module-indexgen) in the list of development dependencies.

### Detecting inappropriate coupling

Because all relative files are loaded by index.js files, a simple search can be done to identify any inappropriate file references. The following task is run during pre-commit and fails if any inappropriate file references are found:


<details open>
<summary>tasks/check-coupling</summary>

```sh
#!/bin/bash

! grep --exclude="index.js" -rnw "$SRC" -e "require('."
```
</details>

## List of modules

Following is a complete list of modules in Agile Avatars.

The diff-like block lists the collaborators in green and the non-collaborators in red.

### ❖ components


```diff
+ config elements services subscriptions ui vendorComponents vendorServices
- core diagnostics io startup stores styles window
```

Provides _component factory functions_. A component is simply a HTML element that relies on closures to react to user interaction and state changes by updating the element or invoking services for any non-presentation concerns.

__Example: tagName component__

tagName renders the tag name for a given _tag instance_. A _tag_ is composed of an image, a name, and a role. Multiple _instances_ of a tag may be rendered at a time depending on the numbers specified in the _active_ and _passive_ fields.

tagName accepts the ID of a tag instance and returns a [content editable](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content) span. tagName reacts to changes by invoking the changeTagName service function with the new tag name.

changeTagName updates the state of the underlying tag, which triggers a propagation of the new tag name to all other instances of the tag.

tagName subscribes to tag name change events and updates the editable span with the new tag name.


<details open>
<summary>src/components/tag-list/tag/components/tag-name.js</summary>

```js
module.exports = ({ elements, services, subscriptions }) => tagInstanceId => {

    const $tagName = elements.editableSpan('tag-name')
        .addEventListener('change', () => {
            services.tags.changeTagName(tagInstanceId, $tagName.textContent);
        });

    subscriptions.tagInstances.onChange(tagInstanceId, 'tagName', tagName => {
        $tagName.textContent = tagName;
    });

    return $tagName;

};
```
</details>

### ❖ config


```diff
+ 
- components core diagnostics elements io services startup stores styles subscriptions ui vendorComponents vendorServices window
```

Provides _static application config_ as a plain JavaScript object, including default state used to initialise the state stores. Config is loaded at [boot](#booting) time.

__Source: config module__


<details >
<summary>src/config/config.js</summary>

```js
const maxImageSize = 600;

module.exports = {
    gtag: {         
        trackingId: 'UA-34497639-2',
        enabled: false
    },
    sentry: {
        dsn: 'https://63594154fcf34c34966aec13b15e2821@o418187.ingest.sentry.io/5320412',
        enabled: false
    },
    app: {
        name: 'Agile Avatars',
        issues: 'https://github.com/mattriley/agileavatars/issues'
    },
    author: {
        name: 'Matt Riley',
        profile: 'https://www.linkedin.com/in/mattrileyau/'
    },
    gravatar: {
        domain: 'https://secure.gravatar.com',
        size: maxImageSize,
        fallbacks: ['robohash', 'monsterid', 'wavatar', 'retro', 'identicon', 'mp'],
        errorMessage: 'An error occurred. Please check your connection and try again.'
    },
    options: {
        layout: 'modes | shapes | size | spacing | sort | outline',
        modes: ['active', 'passive'],
        shapes: ['circle', 'square'],
        shapeRadius: { circle: 50, square: 0 },
        active: { min: 0, max: 999, step: 1 },
        passive: { min: 0, max: 999, step: 1 },
        size: { min: 100, max: maxImageSize, step: 10 },
        spacing: { min: 0, max: 10, step: 1 },
        sort: {
            orderAdded: 'Order added',
            roleThenName: 'Role, then name',
            name: 'Name'
        }
    },
    tags: {
        layout: 'tagImage | tagName roleName',
        imagePadding: 17
    },
    roles: {
        nilRole: { roleName: '', color: '#ffffff' },
        presetColors: {
            BA: '#6688c3',
            DEV: '#48a56a',
            PO: '#ce4a4a',
            QA: '#eaaf41',
            TL: '#000000',
            XD: '#b25da6'
        }
    },
    debounce: {
        adjustTagInstanceCounts: 100,
        sortTagList: 50
    },
    storage: {
        stores: ['settings', 'roles', 'tags', 'tagInstances'],
        defaults: {
            settings: {
                app: {
                    modal: 'welcome',
                    nilRoleId: null
                },
                options: {
                    sort: 'orderAdded',
                    shape: 'circle',
                    active: 1,
                    passive: 0,
                    size: 170,
                    spacing: 4,
                    outline: true
                },
                gravatar: {
                    fallback: 'robohash',
                    freetext: '',
                    status: 'ready',
                    errorMessage: ''
                }    
            }
        }
    }        
};
```
</details>

### ❖ core


```diff
+ config
- components diagnostics elements io services startup stores styles subscriptions ui vendorComponents vendorServices window
```

Provides _pure domain functions_. The name "core" comes from [Functional Core, Imperative Shell](https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell) providing a home for [pure functions](#pure-functions) which are accessed by services. Without core, services would be interlaced with pure and impure functions, making them harder to test and reason about.

The __Core__ module was introduced as a home for pure functions. Unlike Services, Core is disallowed access to Stores, IO, or any other module designed to perform side effects. With pure functions extracted, Services primarily orchestrate side effects while delegating to Core for pure application logic.

__Example: parseEmailExpression function__

parseEmailExpression is a pure function. Amongst other properties of pure functions, its return value is the same for the same arguments, and its evaluation has no side effects.


<details open>
<summary>src/core/tags/parse-email-expression.js</summary>

```js
module.exports = ({ util }) => expression => {

    const indexOfAt = expression.indexOf('@');
    const isEmail = indexOfAt > -1;
    const [username] = (isEmail ? expression.substr(0, indexOfAt) : expression).split('+');
    const lastIndexOfPlus = expression.lastIndexOf('+');
    const hasRole = lastIndexOfPlus > indexOfAt;        
    const [emailOrUsername, roleName] = hasRole ? util.splitAt(expression, lastIndexOfPlus, 1) : [expression];
    const email = isEmail ? emailOrUsername : '';
    return { email, username, emailOrUsername, roleName };

};
```
</details>

Further reading:
- [Pure function - Wikipedia](https://en.wikipedia.org/wiki/Pure_function)
- [Functional Core, Imperative Shell - Gary Bernhardt](https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell)
### ❖ diagnostics


```diff
+ stores
- components config core elements io services startup styles subscriptions ui vendorComponents vendorServices window
```

Provides _diagnostic functions_ such as the ability to dump state to the console.

### ❖ elements


```diff
+ ui
- components config core diagnostics io services startup stores styles subscriptions vendorComponents vendorServices window
```

Provides _element factory functions_. An element is simply a HTML element that relies on closures to react to user interaction by updating the element or raising events for components. Unlike components, they cannot react to state changes or invoke services. Elements are lower level and may be reused by multiple components.

__Example: editableSpan element__


<details open>
<summary>src/elements/editable-span.js</summary>

```js
module.exports = ({ el, ui }) => className => {

    const dispatchChange = () => $span.dispatchEvent(ui.event('change'));

    const $span = el('span', className)
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

### ❖ io


```diff
+ window
- components config core diagnostics elements services startup stores styles subscriptions ui vendorComponents vendorServices
```

Provides _IO functions_ while preventing direct access to window. IO functions are impure as they depend on the environment in addition to their arguments.

The __io__ module was introduced to wrap window and expose only the io operations required by this application. So in this case io exposes fetch. Now, we can reason about the application like this - does it make sense for components to access io? The answer is obviously no, because we want to avoid components making API requests. The module responsible to carrying out such requests is services - so services may have access to io. Components may then trigger API requests indirectly through services.

__Source: io module__


<details open>
<summary>src/io/io.js</summary>

```js
module.exports = ({ window }) => {

    return {
        date: () => new window.Date(),
        fetch: (...args) => window.fetch(...args),
        random: () => window.Math.random(),
        fileReader: () => new window.FileReader()
    };

};
```
</details>

See [Deglobalising window](#deglobalising-window) for more information.

### ❖ services


```diff
+ config core io stores subscriptions
- components diagnostics elements startup styles ui vendorComponents vendorServices window
```

Provides _service functions_. Service functions orchestrate the pure functions from _core_, the impure functions from _io_ (such as making HTTP requests), and push changes to the state stores.

In order for the __Services__ module to be useful, it must perform side effects, e.g. updating application state, reading files, sending HTTP requests. In functional programming, these kinds of operations are said to be 'impure' and should be separated from 'pure' functions, which have no such side effects. (In practice the distinction between pure and impure functions is more nuanced than this.)

__Example: changeTagName function__


<details open>
<summary>src/services/tags/change-tag-name.js</summary>

```js
module.exports = ({ core, services, stores }) => (tagInstanceId, expression) => {

    const { tagId } = services.tags.getTagInstance(tagInstanceId);
    const { tagName, roleName } = core.tags.parseTagExpression(expression);

    stores.tags.update(tagId, { tagName });

    if (roleName) {
        const roleId = services.roles.findOrInsertRoleWithName(roleName);
        stores.tags.update(tagId, { roleId });
    }
    
};
```
</details>

### ❖ startup


```diff
+ components config core diagnostics elements io services stores styles subscriptions ui vendorComponents vendorServices
- window
```

Provides _startup functions_ which are used at [launch](#launching) time.

__Example: startup function__


<details open>
<summary>src/startup/startup.js</summary>

```js
module.exports = ({ startup, components }) => render => {

    startup.insertNilRole();
    startup.createHandlers();
    startup.createStyleManager();
    return render && render(components.app());

};
```
</details>

### ❖ storage


```diff
+ 
- 
```

Provides the _state store implementation_. State stores manage state changes and raise change events.

__Source: stateStore implementation__


<details >
<summary>src/storage/state-store.js</summary>

```js
const EventEmitter = require('events');

module.exports = (defaults = {}) => {
    let nextId = 1;
    const state = new Map();
    const funcs = new Map();
    const collectionEmitter = new EventEmitter();
    
    const manage = id => funcs.get(id) ?? { get: () => null };
    const list = () => [...state.values()];
    const find = id => manage(id).get();
    const update = (id, changes) => manage(id).update(changes);

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

        const get = () => ({ ...item });

        const update = changes => {
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
        funcs.set(id, { get, update, subscriptions });
        state.set(id, item);

        if (callback) callback(id);
        collectionEmitter.emit('firstInsert', id);
        collectionEmitter.emit('insert', id);
        return id;
    };

    const remove = id => {
        collectionEmitter.emit('beforeRemove', id);
        funcs.delete(id);
        state.delete(id);
    };
    
    Object.entries(defaults).map(([id, entry]) => ({ id, ...entry })).forEach(entry => insert(entry));

    return { insert, remove, list, find, update, subscriptions };

};
```
</details>

See [State Management](#state-management) for more information.

### ❖ stores


```diff
+ config
- components core diagnostics elements io services startup styles subscriptions ui vendorComponents vendorServices window
```

Provides the _state stores_. State stores manage state changes and raise change events. State stores are created at [boot](#booting) time as defined in config.

See [State Management](#state-management) for more information.

### ❖ styles


```diff
+ config subscriptions ui
- components core diagnostics elements io services startup stores vendorComponents vendorServices window
```

Provides _style factory functions_. A style is simply a HTML style element that relies on closures to react to state changes by updating the CSS content of the element. This enables dynamic styling.

__Example: roleColor style__


<details open>
<summary>src/styles/role-color.js</summary>

```js
module.exports = ({ el, subscriptions }) => roleId => {

    const $style = el('style');

    subscriptions.roles.onChange(roleId, 'color', color => {
        $style.textContent = `
                .role${roleId} .tag-image { border-color: ${color}; }            
                .role${roleId} .role-name { background-color: ${color}; }
            `;
    });
    
    return $style;

};
```
</details>

Styles are injected into the document head by the _styleManager_.

__Source: styleManager implementation__


<details open>
<summary>src/startup/create-style-manager.js</summary>

```js
module.exports = ({ styles, subscriptions, ui, util }) => () => {

    const { tagImage, roleColor, ...otherStyles } = styles;
    const appendStyles = (...$$styles) => ui.appendToHead(...$$styles);
    appendStyles(...Object.values(otherStyles).map(style => style()));
    subscriptions.tags.onInsert(util.pipe(tagImage, appendStyles));
    subscriptions.roles.onInsert(util.pipe(roleColor, appendStyles));

};
```
</details>

### ❖ subscriptions


```diff
+ stores
- components config core diagnostics elements io services startup styles ui vendorComponents vendorServices window
```

Provides _subscription functions_. A subscription function enables a listener to be notified of state changes.

The subscription functions are actually implemented in the state store. This module exposes only the subscriptions from the stores to prevent direct read/write access to the the stores. 

__Stores__ enable retrieval and updating of state, and the ability to subscribe to state change events. In our layered architecture, the domain layer depends on the data layer, and so the __Services__ module may access Stores directly.

The presentation layer however depends on the domain layer, and so the __Components__ module may _not_ access Stores directly. That's to say, the presentation layer should not be retrieving and updating state directly.

The __Subscriptions__ module was introduced to allow Components to subscribe to state change events while preventing access to the underlying stores. The subscriptions module is generated from the Stores, only providing access to subscriptions.

__Source: subscriptions module__


<details open>
<summary>src/subscriptions/subscriptions.js</summary>

```js
module.exports = ({ stores, util }) => {

    return util.mapValues(stores, store => store.subscriptions);

};
```
</details>

### ❖ ui


```diff
+ window
- components config core diagnostics elements io services startup stores styles subscriptions vendorComponents vendorServices
```

Provides _low-level presentation functions_ while preventing direct access to window.

The __ui__ modules was introduced to wrap window and exposes only the low level presentation operations required by this application. The ui module wraps the window and exposes only the ui operations required by this application. Now, we can reason able the application like this - does it make sense for services to access ui?  The answer is obviously no. So we allow components to access ui, and we disallow access from services.

### ❖ util


```diff
+ 
- 
```

Provides _low-level utility functions_.
### ❖ vendor-components


```diff
+ config ui window
- components core diagnostics elements io services startup stores styles subscriptions vendorServices
```

Provides vendor (third party) components including gtag and vanilla-picker. These are separated from the components module because they have different collaborators. The components module avoids a direct dependency on window but some vendor components may require direct access to window which cannot be avoided.

### ❖ vendor-services


```diff
+ config io window
- components core diagnostics elements services startup stores styles subscriptions ui vendorComponents
```

Provides vendor (third party) services including gtag and sentry. These are separated from the services module because they have different collaborators. The services module avoids a direct dependency on window but some vendor services may require direct access to window which cannot be avoided.

__Example: gtag function__

gtag is short for Google Global Site Tag.

gtag depends on window for global variables to work correctly.


<details open>
<summary>src/vendor-services/gtag.js</summary>

```js
/* eslint-disable */

module.exports = ({ config, io, window }) => {

    const { trackingId, enabled } = config.gtag;

    const initalise = () => {
        window.dataLayer = [];
        window[`ga-disable-${trackingId}`] = !enabled;
        gtag('js', io.date());
        gtag('config', trackingId);        
    }

    function gtag () { 
        if (!window.dataLayer) initalise();
        window.dataLayer.push(arguments); 
    } 
    
    return gtag;
    
};
```
</details>



# State Management

State management in an interesting problem to solve in this application because it's non-trivial.

Here's some examples:

Inserting a file (dropping, choosing, or Gravatar):
- Parses the file name to extract a tag name and optional role name.
- Renders a new 'master role badge' in the 'roles list' if it doesn't already exist.
- Renders multiple tag instances with the same image, name and role based on the values of the active and passive fields.

Changing the name of a role in the role list:
- Updates the role name of all tag instances referencing that role.

Changing the colour of a role in the role list:
- Updates the colour of the master role badge being updated.
- Updates the colour of the role and border colour of the image of all tag instances referencing that role.

Changing the role name of a tag instance:
- Renders a new role in the role list if it doesn't already exist.
- Updates the role name of all tag instances referencing that role.
- Updates the colour of the role and border colour of the image of all tag instances referencing that role.

Changing the name of a tag instance:
- Updates the name of all other instances of that tag.

In addition to changing tag names, role names and colours, the control panel affects tag instances:
- Changing the number of active and passive instances
- Changing the shape between circle and square
- Changing the size
- Changing the spacing
- Changing the sort order



Avoiding state management libraries forces the need for a bespoke state management solution.
No attempt is made to generify the state management solution for reuse by other applications; rather it is designed to evolve with the specific needs of this application.

## Stores

State is managed by a series of _state stores_. 

A **state store** is collection of data items keyed by a unique identifier and managed using typical CRUD operations such as insert, find, update, remove.


<details >
<summary>src/storage/state-store.js</summary>

```js
const EventEmitter = require('events');

module.exports = (defaults = {}) => {
    let nextId = 1;
    const state = new Map();
    const funcs = new Map();
    const collectionEmitter = new EventEmitter();
    
    const manage = id => funcs.get(id) ?? { get: () => null };
    const list = () => [...state.values()];
    const find = id => manage(id).get();
    const update = (id, changes) => manage(id).update(changes);

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

        const get = () => ({ ...item });

        const update = changes => {
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
        funcs.set(id, { get, update, subscriptions });
        state.set(id, item);

        if (callback) callback(id);
        collectionEmitter.emit('firstInsert', id);
        collectionEmitter.emit('insert', id);
        return id;
    };

    const remove = id => {
        collectionEmitter.emit('beforeRemove', id);
        funcs.delete(id);
        state.delete(id);
    };
    
    Object.entries(defaults).map(([id, entry]) => ({ id, ...entry })).forEach(entry => insert(entry));

    return { insert, remove, list, find, update, subscriptions };

};
```
</details>

__Example: Inserting a role using insert__


<details open>
<summary>src/services/roles/insert-role.js</summary>

```js
module.exports = ({ core, services, subscriptions, stores, io }) => roleData => {

    const role = core.roles.buildRole(roleData, io.random());

    return stores.roles.insert(role, roleId => {
        subscriptions.roles.onChange(roleId, 'roleName', services.roles.setupRolePropagation(roleId));
    });

};
```
</details>

__Example: Changing a role name using find and update__


<details open>
<summary>src/services/roles/change-role-name.js</summary>

```js
module.exports = ({ core, stores }) => (roleId, roleName) => {

    const oldState = stores.roles.find(roleId);
    const newState = core.roles.buildRole({ ...oldState, roleName });
    stores.roles.update(roleId, newState);
    
};
```
</details>

## Subscriptions

State stores use the [observer pattern](https://en.wikipedia.org/wiki/Observer_pattern) to enable consumers to react to state changes by associating _listener_ functions to events such as onInsert and onChange.

The observer pattern is easily implemented with Node's [EventEmitter](https://nodejs.org/api/events.html) which can be bundled directly into the application.

During startup, subscription functions are extracted from the stores into a standalone _subscriptions_ object. This decouples subscribers (namely _services_ and _components_) from the stores making them agnostic of the data source. Although not a design goal for this application, this should allow the data source to change without impacting the subscribers provided the interface of the subscription functions do not change.

__Example: Reacting to a new role using onInsert and onFirstInsert__


<details open>
<summary>src/components/role-list/role-list.js</summary>

```js
module.exports = ({ el, roleList, subscriptions, ui }) => () => {

    const $roleList = el('div', 'role-list visible-false');

    subscriptions.roles.onInsert(roleId => {
        const $role = roleList.roleCustomiser(roleId);
        $roleList.append($role);
    });

    subscriptions.roles.onFirstInsert(() => {
        ui.toggleBoolClass($roleList, 'visible', true);
    });

    return $roleList;
    
};
```
</details>

__Example: Reacting to the change of a role name using onChange__


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


# View Rendering

View rendering is achieved primarily using the DOM API - `document.createElement`, and by exception using HTML strings - `element.innerHTML`.

## DOM API - document.createElement

Creating elements with the DOM API usually involves:

- Creating an element, `document.createElement('div')`
- Assigning a class name, `element.className = 'myclass'`
- Assigning properties, `element.prop1 = 'foo'`
- Appending child elements, `element.append(child1, child2)`
- Adding event listeners, `element.addEventListener('click', clickHandler)`

This approach is sometimes criticised as verbose. While I only considered the verbosity a minor concern, I did notice a pattern emerge which lead me to the creation of a helper function, `el`.

### Creating elements with el

`el` takes a tag name, an optional class name, and optional properties object. Because the native `append` and `addEventListener` functions return undefined, `el` overrides them to return the element instead to enable function chaining.

__Example: Usage of el__

```js
const $div = el('div', 'myclass', { prop1: 'foo', prop2: 'bar' })
    .append(child1, child2)
    .addEventListener('focus', focusHandler)
    .addEventListener('click', clickHandler);
```

The equivalent without `el`:

```js
const $div = document.createElement('div');
$div.className = 'myclass';
$div.prop1 = 'foo';
$div.prop2 = 'bar';
$div.append(child1, child2);
$div.addEventListener('focus', focusHandler);
$div.addEventListener('click', clickHandler);
```

__el implementation__


<details open>
<summary>src/ui/el.js</summary>

```js
module.exports = ({ window }) => (tagName, ...opts) => { 

    const el = window.document.createElement(tagName);
    const props = opts.map(opt => (typeof opt === 'string' ? { className: opt } : opt));
    const funcs = ['append', 'addEventListener'].map(name => {
        const orig = el[name].bind(el);
        const func = (...args) => { orig(...args); return el; };
        return { [name]: func };
    });
    return Object.assign(el, ...props, ...funcs);

};
```
</details>

### Observations

#### No id required on elements. No need to query for elements.

Because ultimately this approach uses `document.createElement` to create elements, and all interaction with elements are encapsulated within builder functions, we always have a direct reference to the element. This eliminates the need to assign an id, or lookup elements using `document.getElementById` or `document.querySelector` or some variation of these.

## HTML strings - element.innerHTML

`element.innerHTML` is used by exception, where HTML is used primarily for marking up blocks of content.

__Example: Usage of innerHTML for content__

This example uses `el` to create an element, but assigns a HTML string to `innerHTML` rather than appending child elements.


<details open>
<summary>src/components/tips/naming.js</summary>

```js
module.exports = ({ el }) => () => {
    
    return el('div', {
        title: 'Naming',
        innerHTML: `
            <p>
                Prefer <mark>short names</mark> and <mark>abbreviated roles</mark>. 
                Less is more. Use just enough detail to identify people at a glance.
                Avoid full names and position titles if possible.
            </p>`
    });

};
```
</details>


# Testing 

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
        const assertVisible = helpers.assertBoolClass(t, $tipsModal, 'visible');
        assertVisible(false);    
        helpers.dispatchEvent('click', $tipsLink);
        assertVisible(true);       
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



### System boundary

Where the execution path will reach a system boundary, stub just short of the integration to avoid coupling the test to the low level implementation details of the integration.

__Example: Gravatar service functions stubbed__

This test creates a 'gravatar modal' and a 'tag list'. Clicking the 'import button' will render a tag in the tag list using data fetched from Gravatar. The fetchProfileAsync and fetchImageAsync functions are stubbed to prevent the integration from occurring and to avoid coupling the test to the implementation details of the integration. 


<details open>
<summary>tests/components/gravatar/import-success.test.js</summary>

```js
module.exports = ({ test, setup }) => {

    test('import success', async t => {
        const { boot, helpers, window } = setup();

        const { components } = boot({
            services: {
                gravatar: {
                    fetchProfileAsync: () => Promise.resolve({ displayName: 'foo' }),
                    fetchImageAsync: () => Promise.resolve(new window.Blob(['BYTES'], { type: 'image/jpg' }))
                }
            }
        });

        const $gravatarModal = components.modals.gravatar();
        const $freetextField = $gravatarModal.querySelector('.freetext');
        const $importButton = $gravatarModal.querySelector('.import');
        const $tagList = components.tagList();

        const assertGravatarModalVisible = helpers.assertBoolClass(t, $gravatarModal, 'visible'); 
        
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
                assertGravatarModalVisible(false);
            }
        );  
    });

};
```
</details>

### Narrow feedback

When it's helpful to narrow down failure feedback when execution path is too coarse. e.g. state-store evolved with the application rather than being built up-front. The state-store could be covered by the component tests but it's sufficiently complicated to justify it's own tests.

This testing approach supports classic TDD more so than mockist TDD.
- [Mocks Aren't Stubs - Martin Fowler](https://martinfowler.com/articles/mocksArentStubs.html)
  - [Classical and Mockist Testing](https://martinfowler.com/articles/mocksArentStubs.html#ClassicalAndMockistTesting)
- [Classical vs Mockist testing - Jonathan Rasmusson](https://agilewarrior.wordpress.com/2015/04/18/classical-vs-mockist-testing/)
- [Mockists Are Dead. Long Live Classicists - Fabio Pereria, ThoughtWorks](https://www.thoughtworks.com/insights/blog/mockists-are-dead-long-live-classicists)

Links
- [UnitTest - Martin Fowler](https://martinfowler.com/bliki/UnitTest.html)
  - [Solitary or Sociable?](https://martinfowler.com/bliki/UnitTest.html#SolitaryOrSociable)



Rather than acting on individual files, tests act on the initialised application. 

__Example: A component test that depends on shared state__

This test initialises the application by invoking boot and uses the components module to create an 'options bar' which should initially be hidden. It then uses the services module to insert a tag which should cause the options bar to become visible. 


<details open>
<summary>tests/components/options-bar.test.js</summary>

```js
module.exports = ({ test, boot, helpers }) => {
    
    test('options bar not visible until first tag inserted', t => {
        const { components, services } = boot();
        const $optionsBar = components.optionsBar();
        const assertVisible = helpers.assertBoolClass(t, $optionsBar, 'visible');
        assertVisible(false);    
        services.tags.insertTag();
        assertVisible(true);
    });

};
```
</details>

NB: As mentioned previously, boot has 1 required argument - window. This version of boot is actually a wrapper that supplies an instance of window provided by [JSDOM](https://github.com/jsdom/jsdom) to the original boot function for testing purposes.

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

Production dependencies need to be carefully considered in order to keep the bundle size small. We can be more liberal with development dependencies as they don't impact the bundle size.

The following sections lists all dependencies, including:

- Description and Homepage taken from package.json.
- Number of production dependencies followed by:
  - :boom: = 0 dependencies, :white_check_mark: = 1-9 dependencies, :warning: = 10+ dependencies
  - NB: There's no science behind these numbers. This is simply a guide to help keep the number of dependencies low.
  - NB: It would be even better to list the total number of dependencies in the entire dependency tree.
- Description of what the dependency is used for.
- Clarifying comments against the constraints listed above.
  
## List of production dependencies

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

> Module composition using partial function application

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





## List of development dependencies

### ❖ agileavatars-docgen

> undefined

- Homepage: undefined
- __0__ dependencies :boom:






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



# Functional Programming

Although strict functional design is not a design goal, there are certain functional principles which are easily applied in vanilla JavaScript and should be within grasp of the average developer.

### Immutability

Care should be taken to avoid mutation but this is not strictly enforced. 

Mutation should be intentional and well controlled.

Avoid introducing libraries that enforce immutability. While it's tempting to introduce a library like [Immutable.js](https://github.com/immutable-js/immutable-js) to enforce immutability, adding a library also adds another level of complexity and cognative load to the developer experience. Sometimes such libraries are used as "guardrails" to enforce immutability in teams where there are concerns around code quality, but at the same time, this can limit the developer's ability to make mistakes and learn to truly understand and value immutability.

As a rule of thumb, prefer `const` over `let`, and avoid `var`.

While this will not guarantee immutability, it will challenge people to think about it. If `let` is seen as a smell, it may drive refactoring toward `const` which will likely result in a better design. An example would be recognising the `let` in a `for` loop as a smell, triggering a refactor toward a higher-order function.

### Higher-order functions

Prefer higher-order functions such as `filter`, `map`, `reduce`, over imperative looping statements.

__Example: Usage of reduce__

This function transforms a list of store names into an object of store name -> store. This could also be done with a `for` loop. Reduce hides the low level implementation details of iteration. It also removes the need for intermedite variables such as loop counters. 

The `acc` variable is intentionally mutated given the scope of the mutation is small and isolated within the reduce function. An immutable equivalent could be `{ ...acc, [name]: store }`.


<details open>
<summary>src/stores/stores.js</summary>

```js
module.exports = ({ storage, config }) => {

    return config.storage.stores.reduce((acc, name) => {
        const defaults = config.storage.defaults[name];
        const store = storage.stateStore(defaults);
        return Object.assign(acc, { [name]: store });
    }, {});

};
```
</details>

__Further reading__

- [Reduce (Composing Software) - Eric Elliot](https://medium.com/javascript-scene/reduce-composing-software-fe22f0c39a1d)
- [Array.prototype.reduce() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

### Pure functions

As much as possible, pure functions are separated from impure functions. To make the distinction clear, pure domain functions are kept in the `core` module. Pure functions can be reasoned about and tested in isolation without having to manage side effects.

From [Wikipedia](https://en.wikipedia.org/wiki/Pure_function):
> In computer programming, a __pure function__ is a function that has the following properties:
> 1. Its return value is the same for the same arguments (no variation with local static variables, non-local variables, mutable reference arguments or input streams from I/O devices).
> 2. Its evaluation has no side effects (no mutation of local static variables, non-local variables, mutable reference arguments or I/O streams).

__Example: Usage of a pure function__

This function orchestrates pure and impure functions making it impure. However because the implementation of `parseFileExpression` has been extracted as a pure function.


<details open>
<summary>src/services/tags/insert-file-async.js</summary>

```js
module.exports = ({ core, services, util }) => file => {

    return util.pipe(
        core.tags.parseFileExpression,
        services.tags.insertTag,
        services.tags.attachImageAsync(file)
    )(file.name);
    
};
```
</details>

__parseFileExpression__


<details open>
<summary>src/core/tags/parse-file-expression.js</summary>

```js
module.exports = () => expression => {

    const [tagName, roleName] = expression
        .split('/')
        .pop()
        .match(/^(\d+)?(.+)/)[2]
        .split('.')[0]
        .split('+')
        .map(s => s.trim());
        
    return { tagName, roleName };

};
```
</details>


### Pipe

Where possible, use `pipe` to avoid nesting function calls and intermediate variables.

__Example: Usage of pipe when inserting a file__


<details open>
<summary>src/services/tags/insert-file-async.js</summary>

```js
module.exports = ({ core, services, util }) => file => {

    return util.pipe(
        core.tags.parseFileExpression,
        services.tags.insertTag,
        services.tags.attachImageAsync(file)
    )(file.name);
    
};
```
</details>

__pipe implementation__


<details open>
<summary>src/util/pipe.js</summary>

```js
module.exports = (...funcs) => initial => funcs.reduce((v, f) => f(v), initial);
```
</details>

Once the [pipeline operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Pipeline_operator) is officially supported in JavaScript, we can remove the custom implementation.

### Curry and partial application

- [Curry and Function Composition - Eric Elliott](https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983)

### Functional core, imperative shell

- [Functional Core, Imperative Shell - Gary Bernhardt](https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell)


# Conventions

## Code

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


## Documentation

- Table of contents limited to headings 1 and 2.
- Headings for "lists" should begin with __List of__.
- Headings for "list items" should begin with ❖ and be level 3 or higher to avoid the table of contents.
- Wherever possible render actual source files for example code.


