# Agile Avatars

WORK IN PROGRESS.

Source code for [agileavatars.com](https://agileavatars.com). An experiment in frameworkless/vanilla JavaScript.

![Build](https://github.com/mattriley/agileavatars/workflows/Build/badge.svg)
[![codecov](https://codecov.io/gh/mattriley/agileavatars/branch/master/graph/badge.svg)](https://codecov.io/gh/mattriley/agileavatars)
![Status](https://img.shields.io/uptimerobot/status/m783034155-295e5fbc9fd4a0e3a54363a5)
![30 days](https://img.shields.io/uptimerobot/ratio/m783034155-295e5fbc9fd4a0e3a54363a5)


> Agile Avatars makes it quick and easy to know who's working on what with great looking avatars for your agile board. No more fiddling with Word or Google Docs making sure everything aligns just right. Simply drag and drop your images, make some adjustments, print, and laminate!

<br>
<figure>
  <img src="https://github.com/mattriley/agileavatars/raw/master/readme-docs/demo.gif" />
  <figcaption>Agile Avatars in action</figcaption>
</figure>
<br>

This is a hobby project I decided to double as an experiment in developing a web application in JavaScript without the aid of a framework like React or Angular. Such an approach is often referred to as frameworkless, or vanilla JavaScript.

DISCLAIMER: Some of the approaches used may be unconventional. Any attempt to emulate these approaches should be done with the unique needs and circumstances of your endeavour taken into consideration.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

- [Getting Started](#getting-started)
- [Design Goals](#design-goals)
- [Technical Constraints](#technical-constraints)
- [Architecture](#architecture)
- [Mounting](#mounting)
- [Modules](#modules)
  - [List of modules](#list-of-modules)
- [Dependency Management](#dependency-management)
  - [Deglobalising window](#deglobalising-window)
  - [Initialisation](#initialisation)
  - [Initialising the application with boot()](#initialising-the-application-with-boot)
  - [Understanding the architecture](#understanding-the-architecture)
  - [Detecting inappropriate coupling](#detecting-inappropriate-coupling)
- [State Management](#state-management)
  - [Stores](#stores)
  - [Subscriptions](#subscriptions)
- [View Rendering](#view-rendering)
  - [DOM API - document.createElement()](#dom-api---documentcreateelement)
  - [HTML strings - element.innerHTML](#html-strings---elementinnerhtml)
- [Testing](#testing)
  - [Position](#position)
  - [Constraints](#constraints)
  - [Approach](#approach)
- [Dependencies](#dependencies)
  - [Position](#position-1)
  - [Constraints](#constraints-1)
  - [List of production dependencies](#list-of-production-dependencies)
  - [List of development dependencies](#list-of-development-dependencies)
- [Functional Programming](#functional-programming)
  - [Immutability](#immutability)
  - [Higher-order functions](#higher-order-functions)
  - [Pure functions](#pure-functions)
  - [Pipe](#pipe)
  - [Curry and partial application](#curry-and-partial-application)
  - [Functional core, imperative shell](#functional-core-imperative-shell)
- [Conventions](#conventions)
  - [Code](#code)
  - [Documentation](#documentation)
- [References](#references)

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
<figure>
  <img src="https://github.com/mattriley/agileavatars/raw/master/readme-docs/itermocil.png" />
  <figcaption>iTerm2 pre-configured layout</figcaption>
</figure>
<br>


# Design Goals

- Beginner friendly. Minimise prerequisite knowledge.
- Approachable to developers of varying backgrounds and experience.
- Reduce cognitive load. Simplicity. Minimalism. Organisation. Ability to maintain a mental model.
- Low maintenance. Avoid dependencies that could impact the application in a material way.
- Flexibility. Avoid dependencies that take over the control flow of the application.
- Easy to change. Tests run fast. Tests are behavioural.
- Functional leaning. Avoid strict functional programming.


# Technical Constraints

- No languages that compile to JavaScript, e.g. TypeScript.  
- No frameworks, e.g. Angular, Vue.  
- No view rendering libraries, e.g. React.  
- No CSS-in-JS libraries, e.g. Styled Components.  
- No CSS pre-processors, e.g. SASS, SCSS.  
- No state management libraries, e.g. Flux, Redux.  
- No functional programming libraries, e.g. Rambda, Immutable.  
- No general purpose utility libraries, e.g. Lodash, Underscore.  
- No BDD-style assertion libraries, e.g. Chai's _should_ or _expect_ interfaces.  
- No mocking libraries, e.g. Sinon.  
- No task runners, e.g. Grunt, Gulp.  
- No globals. Access to _window_ strictly controlled.  
- No classes/prototypes.  


# Architecture

With the plethora of frontend architectural styles in use today, this application takes a "back to basics" approach with a classic layered architecture. My hypothesis is that the simplicity and familiarity of this architectural style would be approachable for a wide audience including backend developers with limited exposure to frontend development.

<br>
<figure>
  <img src="https://github.com/mattriley/agileavatars/raw/master/readme-docs/architecture.svg" />
  <figcaption>Presentation-Domain-Data layered architecture</figcaption>
</figure>
<br>

*Some modules have been omitted for brevity.

Further reading:
- [PresentationDomainDataLayering - Martin Fowler](https://martinfowler.com/bliki/PresentationDomainDataLayering.html)


# Mounting

This application is built using [Parcel](https://parceljs.org/). Given a HTML file, Parcel follows dependencies and packages them into a bundle. Parcel overrides the module loading system to allow assets not normally recognised by JavaScript, such as CSS files.

While convenient, this couples the code to Parcel, meaning the code cannot be executed without it. This is problematic because the vast majority of code doesn't require Parcel to execute at all. For example, having to build the application with Parcel to run the tests adds overhead and slows down the running of the tests.

In order to isolate Parcel, the project is split into `public` and `src` directories. `public` contains static assets and the minimum amount of JavaScript needed to launch the app with Parcel. `src` contains 'the application' which is executable without Parcel. This enables the unit tests to be run directly with Node without needing to 'build' the application.

The following steps outline the mount process:

- Parcel follows the `<script>` element in `./public/index.html` to `./public/app.js`.
- Parcel interprets `require('./css/*.css');` by combining all CSS files and injecting a stylesheet into the document.
- The application is 'booted' provided the global window object, and a config override object, and returns the application.
- The application is assigned to `window.agileavatars` for exploration/debugging purposes.
- The `mount` function is invoked which starts up the application and loads the root component into the document body.

<details open>
<summary>public/app.js</summary>

```js
require('./css/*.css');
const boot = require('../boot');
const config = require('./config');
const { mount } = window.agileavatars = boot({ window, config });
mount();
```
</details>

<br>
<figure>
  <img src="https://github.com/mattriley/agileavatars/raw/master/readme-docs/console-modules.png" />
  <figcaption>Modules displayed in the console</figcaption>
</figure>
<br>

<br>
<figure>
  <img src="https://github.com/mattriley/agileavatars/raw/master/readme-docs/console-state.png" />
  <figcaption>Current state displayed in the console</figcaption>
</figure>
<br>


# Modules

The application is composed of architectural components called modules. Each module has a separate responsibility and may be composed with collaborating modules.

On the file system, a module is simply a directory of sources files that follow some simple rules:

- Each file and subdirectory (i.e. nested `index.js`) is loaded by `index.js` in the same directory.
- Each `index.js` exports an aggregate object of all files and directories loaded.
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

Modules are composed (collaborators are resolved) during [initialisation](#initialisation). 

This design has some interesting implications:

- Any source file is only referenced and loaded once in the entire application making it easier to move files around.
- In general, `index.js` files don't have a clear responsibility, sometimes even containing important implementation details that can be hard to find given any Node.js project will have many of them. This design ensures `index.js` files have a clear responsibility of their own and don't contain important implementation details that would be better extracted and named appropriately.
- Remove the noise of many require/import statements at the top of any file.
- No backtracking paths, i.e. `..` helps reduce cognitive load (for me anyway!).
- The approach to `index.js` forms a pattern which can be automated with code generation. See [module-indexgen](https://github.com/mattriley/agileavatars#-module-indexgen) in the list of development dependencies.

## List of modules

### ❖ components

Provides _component builder functions_.

A __component builder function__ returns a native HTML element that may react to state changes and invoke services.

Components are only concerned with presentation and any effects are handed off to services. Stores are not directly accessible to prevent bypassing services. window is also not directly accessible, but is indirectly accessible via the dom module which exposes lower level presentation concerns. 

Technically, window is global in browser environments and is therefore difficult to prevent access to. In order to detect inappropriate access, the unit tests do not expose it globally, causing any code that references it in a global context to fail.

__Example: The tag name component__

The _tag name_ component renders the tag name for a given _tag instance_. A _tag_ is composed of an image, a name, and a role. Multiple _instances_ of a tag may be rendered at a time depending on the numbers specified in the _active_ and _passive_ fields.

The tag name component accepts the ID of a tag instance and returns a [content editable](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content) span allowing the user to edit the tag name. When changed, the `changeTagName` service function is invoked with the new tag name.

`changeTagName` updates the state of the underlying tag, which triggers a propagation of the new tag name to all other instances of the tag.

The tag name component subscribes to tag name change events and updates the span with the new tag name.

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

__Example: Component composition__

Because components return native HTML elements, they are easily appended to create composites.

The _header_ component is composed of a _title bar_ and a _nav bar_ component.

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

### ❖ config

Provides application configuration as a POJSO (plain old JavaScript object).

Config is loaded early during [initialisation](#initialisation). Most modules depend on config.

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

Provides _pure domain functions_.

The name "core" comes from [Functional Core, Imperative Shell](https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell) providing a home for [pure functions](#pure-functions) which are accessed by services. Without core, services would be interlaced with pure and impure functions, making them harder to test and reason about.

Modules that produce side effects are not accessible to core to help prevent accidental side effects. 

The util module provides lower level pure functions and is accessible to core as purity can be maintained.

Config is also accessible to core. Technically, config could be mutated, producing side effects putting the purity of core at risk. This could be prevented by making config immutable by deeply "freezing" the object. I'm drawing a line here and choosing not to force immutability, but to treat objects as immutable; to avoid mutation of objects as a convention.

__Example: A pure function__

`parseEmailExpression` is a pure function. Amongst other properties of pure functions, its return value is the same for the same arguments, and its evaluation has no side effects.

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

__Example: Accessing config__

`buildImageUrl` accesses config for the domain and image size to request from Gravatar. These values are known at initialisation time and remain constant, while email and defaultImage will change per request. 

<details open>
<summary>src/core/gravatar/build-image-url.js</summary>

```js
module.exports = ({ core, config }) => (email, defaultImage) => {

    const { domain, size } = config.gravatar;
    const emailHash = core.gravatar.hashEmail(email);
    return `${domain}/avatar/${emailHash}?r=g&s=${size}&d=${defaultImage}`;
    
};
```
</details>

### ❖ diagnostics

Provides diagnostic functions such as the ability to dump state to the console.

### ❖ elements

Provides _element builder functions_.

An __element builder function__ returns a native HTML element. Unlike components, they cannot react to state changes or invoke services. Elements are lower level and may be reused by multiple components.

__Example: An element builder function__

<details open>
<summary>src/elements/editable-span.js</summary>

```js
module.exports = ({ el, ui }) => className => {

    const dispatchChange = () => $span.dispatchEvent(ui.createEvent('change'));

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

Provides IO functions to service modules (services, vendorServices) while preventing direct access to `window`.

### ❖ services

Provides _service functions_.

A __service function__ orchestrates domain logic and IO including state changes.

__Example: A service function__

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

Provides startup functions which are required to initialise the application.

### ❖ storage

Provides the infrastructure code for the state stores.

### ❖ stores

Provides _instances of state stores_.

A __state store__ encapsulates state mutations and subscriptions for state changes.

### ❖ styles

Provides _style builder functions_.

A __style builder function__ returns a style element that can react to state changes.

__Example: A style builder function__

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

### ❖ subscriptions

Provides _subscription functions_.

A __subscription function__ enables a listener to be notified of state changes.

### ❖ ui

Provides low-level presentation functions to the view modules (elements, components, vendorComponents) while preventing direct access to `window`.

### ❖ util


### ❖ vendor-components


### ❖ vendor-services

Provides vendor (third party) services including `gtag` and `sentry`. These are separated from the services module because they have different dependencies. The services module avoids a direct dependency on `window` by design but some vendor services may require direct access to `window` which cannot be avoided.

__Example: gtag (Google's Global Site Tag)__

`gtag` depends on `window` for global variables.

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



# Dependency Management

In my experience, one of the biggest causes of cognitive load is _misplaced responsibilities_ which are essentially violations of the _single responsibility principle_ and _principle of least astonishment_. A good design is one that allows you to make reasonable assumptions about how the application hangs together without having to wade through code to validate it. This problem often manifests during estimation - you imagine the effort involved in implementing a new freature, but it never quite turns out how you imagined it.

Of all the fancy tools and frameworks available for state management, view rendering, etc. none of these really solve the basic problem of where to put things. As an example, it's still too easy to make an API request from a React component, even when your trying to use Redux Saga to separate those concerns. It's also kind of funny that we now need yet another library to help manage this. It's turtles all the way down.

Possibly the biggest reason for this is window. window is a global [God object](https://en.wikipedia.org/wiki/God_object) that makes it too easy to misplace responsibilities. For example, this makes the fetch API available globally, making to easy to make an API request from a React component.

## Deglobalising window

One way of increasing the chances of well placed responsibilities is to constrain the functionality available to any particular module to prevent the misplaced responsibility from occurring. 

### io

To achieve this, a new module is introduced to house the concern of IO. The io module wraps window and exposes only the io operations required by this application. So in this case io exposes fetch. Now, we can reason about the application like this - does it make sense for components to access io? The answer is obviously no, because we want to avoid components making API requests. The module responsible to carrying out such requests is services - so services may have access to io. Components may then trigger API requests indirectly through services.

### ui

Likewise, the reverse is also a concern. We don't want the services module accessing presentation concerns via the window object such as accessing the DOM and creating elements. To prevent this, a new module is introduce to hosue the low level presentation concerns. The ui module wraps the window and exposes only the ui operations required by this application. Now, we can reason able the application like this - does it make sense for services to access ui?  The answer is obviously no. So we allow components to access ui, and we disallow access from services.


While these modules help to separate responsibilities, it still doesn't stop the window object from being global and making easy to circumvent this structure. This is not a problem we can solve directly.

The solution here is to turn to detection rather than prevention. 

### Detecting inappropriate access to window

In order to detect inappropriate access, window is not made globally available in the unit tests. This is possible because the unit tests run on Node.js instead of a browser environment. JSDOM is used to emulate a browser and create a window object, but the window object is not automatically made global. This means any code referencing the global window object or properties of it will fail. I was initially using `jsdom-global` to make the window object global until I realised I was mistakenly accessing global variables. 

## Initialisation

Initialisation is the process of making the application ready to launch and involves: 

- Loading configuration.
- Composing modules.
- Returning the composed modules / the integrated application.

Launching the application involves invoking the _root_ component (which in turn invokes many other subcomponents) and appending it to the DOM. Separating the concern of initialising from launching provides:

- A means of understanding how the application "hangs together".
- A means of testing isolated behaviours in an integrated setting.

Further reading:
- [Composition Root - Mark Seemann](https://blog.ploeh.dk/2011/07/28/CompositionRoot/)

## Initialising the application with boot()

The application is initialised by invoking the function exported by `./boot.js`. `boot()` must be supplied a `window` object. The entire application depends on this supplied instance of `window` rather than depending on the global `window` object.

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
    const { mount } = compose('startup', compose.getModules());
    return { mount, ...compose.getModules() };

};
```
</details>

`module-composer` is a small, single-file library that enables module composition using partial function application. Originally part of Agile Avatars but extracted as a separate library because I've found it useful in other projects. See [module-composer](#-module-composer) in the [Dependencies](#dependencies) section.

__Source code for module-composer__

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


## Understanding the architecture

`boot.js` is also useful as a single place to go to control and understand how the application "hangs together", helping to reduce cognitive load.

An interesting side-effect of managing dependencies this way is that it became trivial to generate a dependency diagram.

<br>
<figure>
  <img src="https://github.com/mattriley/agileavatars/raw/master/readme-docs/modules.svg" />
  <figcaption>Module dependencies</figcaption>
</figure>
<br>

*Some modules have been omitted for brevity.  
*It's very difficult preventing arrows from overlapping!

<details>
    <summary>How is this diagram generated?</summary>
    

This is achived by invoking `boot()` and using a data structure provided by `module-composer` that describes the dependencies to generate a [mermaid.js](https://github.com/mermaid-js/mermaid) definition file, and using [mermaid-cli](https://github.com/mermaid-js/mermaid-cli) to generate an SVG. See [mermaid-cli](#-mermaid-jsmermaid-cli) in the [Dependencies](#dependencies) section.

</details>


Here's another view generated from the same data:

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

## Detecting inappropriate coupling

Another benefit of `boot.js` is that it becomes trivial to identify inappropriate coupling. For example passing `io` which is impure to `core` which is meant to be pure.

And because all relative files are loaded by `index.js` files, a simple search can be done to identify any inappropriate file references. The following task is run during pre-commit and fails if any inappropriate file references are found:

    <details open>
    <summary>tasks/check-coupling</summary>
    
    ```
    #!/bin/bash

! grep --exclude="index.js" -rnw "$SRC" -e "require('."
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

A **state store** is collection of data items keyed by a unique identifier and managed using typical CRUD operations such as `insert`, `find`, `update`, `remove`.

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

__Example: Inserting a role using insert()__

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

__Example: Changing a role name using find() and update()__

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

State stores use the [observer pattern](https://en.wikipedia.org/wiki/Observer_pattern) to enable consumers to react to state changes by associating _listener_ functions to events such as `onInsert` and `onChange`.

The observer pattern is easily implemented with Node's [EventEmitter](https://nodejs.org/api/events.html) which can be bundled directly into the application.

During startup, subscription functions are extracted from the stores into a standalone _subscriptions_ object. This decouples subscribers (namely _services_ and _components_) from the stores making them agnostic of the data source. Although not a design goal for this application, this should allow the data source to change without impacting the subscribers provided the interface of the subscription functions do not change.

__Example: Reacting to a new role using onInsert() and onFirstInsert()__

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

__Example: Reacting to the change of a role name using onChange()__

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

View rendering is achieved primarily using the DOM API - `document.createElement()`, and by exception using HTML strings - `element.innerHTML`.

## DOM API - document.createElement()

Creating elements with the DOM API usually involves:

- Creating an element, `document.createElement('div')`
- Assigning a class name, `element.className = 'myclass'`
- Assigning properties, `element.prop1 = 'foo'`
- Appending child elements, `element.append(child1, child2)`
- Adding event listeners, `element.addEventListener('click', clickHandler)`

This approach is sometimes criticised as verbose. While I only considered the verbosity a minor concern, I did notice a pattern emerge which lead me to the creation of a helper function, `el()`.

### Creating elements with el()

`el()` takes a tag name, an optional class name, and optional properties object. Because the native `append()` and `addEventListener()` functions return undefined, `el()` overrides them to return the element instead to enable function chaining.

__Example: Usage of el()__

```js
const $div = el('div', 'myclass', { prop1: 'foo', prop2: 'bar' })
    .append(child1, child2)
    .addEventListener('focus', focusHandler)
    .addEventListener('click', clickHandler);
```

The equivalent without `el()`:

```js
const $div = document.createElement('div');
$div.className = 'myclass';
$div.prop1 = 'foo';
$div.prop2 = 'bar';
$div.append(child1, child2);
$div.addEventListener('focus', focusHandler);
$div.addEventListener('click', clickHandler);
```

__el() implementation__

<details open>
<summary>src/ui/el.js</summary>

```js
module.exports = ({ ui }) => (tagName, ...opts) => { 

    const el = ui.getDocument().createElement(tagName);
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

This example uses `el()` to create an element, but assigns a HTML string to `innerHTML` rather than appending child elements.

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

## Position

The position taken in this application is that tests should enable __Merciless Refactoring__. The constraints below are designed to enable the application to change significantly and rapidly.

Further reading:
- [Refactoring - Martin Fowler](https://martinfowler.com/tags/refactoring.html)
- [Refactor Mercilessly - Ward Cunningham](https://wiki.c2.com/?RefactorMercilessly)
- [Refactor Mercilessly - Don Wells](http://www.extremeprogramming.org/rules/refactor.html)

## Constraints

- The application can be tested without bundling or transpiling.
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

This test initialises the application by invoking `boot()` and uses the `components` module to create an 'options bar' which should initially be hidden. It then uses the `services` module to insert a tag which should cause the options bar to become visible. 

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

NB: As mentioned previously, `boot()` has 1 required argument - `window`. This version of `boot()` is actually a wrapper that supplies an instance of `window` provided by [JSDOM](https://github.com/jsdom/jsdom) to the original `boot` function for testing purposes.

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

## Immutability

Care should be taken to avoid mutation but this is not strictly enforced. 

Mutation should be intentional and well controlled.

Avoid introducing libraries that enforce immutability. While it's tempting to introduce a library like [Immutable.js](https://github.com/immutable-js/immutable-js) to enforce immutability, adding a library also adds another level of complexity and cognative load to the developer experience. Sometimes such libraries are used as "guardrails" to enforce immutability in teams where there are concerns around code quality, but at the same time, this can limit the developer's ability to make mistakes and learn to truly understand and value immutability.

As a rule of thumb, prefer `const` over `let`, and avoid `var`.

While this will not guarantee immutability, it will challenge people to think about it. If `let` is seen as a smell, it may drive refactoring toward `const` which will likely result in a better design. An example would be recognising the `let` in a `for` loop as a smell, triggering a refactor toward a higher-order function.

## Higher-order functions

Prefer higher-order functions such as `filter`, `map`, `reduce`, over imperative looping statements.

__Example: Usage of reduce()__

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

## Pure functions

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

__Source code for parseFileExpression()__

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


## Pipe

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

__Source code for pipe()__

<details open>
<summary>src/util/pipe.js</summary>

```js
module.exports = (...funcs) => initial => funcs.reduce((v, f) => f(v), initial);
```
</details>

Once the [pipeline operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Pipeline_operator) is officially supported in JavaScript, we can remove the custom implementation.

## Curry and partial application

- [Curry and Function Composition - Eric Elliott](https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983)

## Functional core, imperative shell

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
- Append `()` to function names to make it obvious we are referring to a function, e.g. `func()`.
- Avoid using code style in headings, e.g. __About func()__, not __About `func()`__.
- Wherever possible render actual source files for example code.


# References

- [List of languages that compile to JS](https://github.com/jashkenas/coffeescript/wiki/List-of-languages-that-compile-to-JS)
- [You Might Not Need TypeScript (or Static Types) - Eric Elliott](https://medium.com/javascript-scene/you-might-not-need-typescript-or-static-types-aa7cb670a77b)
- [The Shocking Secret About Static Types - Eric Elliott](https://medium.com/javascript-scene/the-shocking-secret-about-static-types-514d39bf30a3)

