# Agile Avatars

Source code for [agileavatars.com](https://agileavatars.com), an experiment in frameworkless/vanilla JavaScript.

![Build](https://github.com/mattriley/agileavatars/workflows/Build/badge.svg)
[![codecov](https://codecov.io/gh/mattriley/agileavatars/branch/master/graph/badge.svg)](https://codecov.io/gh/mattriley/agileavatars)
![Status](https://img.shields.io/uptimerobot/status/m783034155-295e5fbc9fd4a0e3a54363a5)
![30 days](https://img.shields.io/uptimerobot/ratio/m783034155-295e5fbc9fd4a0e3a54363a5)

> Agile Avatars makes it quick and easy to know who's working on what with great looking avatars for your agile board. No more fiddling with Word or Google Docs making sure everything aligns just right. Simply drag and drop your images, make some adjustments, print, and laminate!

This is a hobby project I decided to double as an experiment in writing a web application in JavaScript without the aid of a framework like React or Angular. Such an approach is often referred to as frameworkless, or vanilla JavaScript.

# Architecture

![Architecture](docs/architecture.svg)

## Architecture Components

### Components

A __component__ function returns a [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) which may mutate or invoke services in reaction to user interaction and state changes.

Example:

```js
// src/lib/components/tag-list/tag/components/tag-name.js

module.exports = ({ elements, services, subscriptions }) => tagInstanceId => {

    const $tagName = elements.editableSpan({ className: 'tag-name' })
        .addEventListener('blur', () => {
            services.tags.changeTagInstanceName(tagInstanceId, $tagName.textContent);
        });

    subscriptions.tagInstances.onChange(tagInstanceId, 'tagName', tagName => {
        $tagName.textContent = tagName;
    }).invoke();

    return $tagName;

};
```

### Elements

An __element__ function returns a [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) which may mutate in reaction to user interaction.

Elements are more fundamental than components. Unlike components, they cannot react to state changes or invoke services. For this reason, elements tend to be lower level, more generic and more reusable.

Example:

```js
// src/lib/elements/editable-span.js

module.exports = ({ window, elements }) => (props = {}) => {

    const $span = elements.el('span', props)
        .addEventListener('keydown', e => {            
            if (e.code === 'Enter') {
                e.preventDefault();
                $span.dispatchEvent(new window.Event('blur'));
            }
        });
    
    $span.setAttribute('contenteditable', true);
   
    return $span;
};

```

### Services

A __service__ function that orchestrates domain logic and IO including issuing state changes to state stores.

Inspired by [Functional Core, Imperative Shell](https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell), service functions may be characterised as imperative shells.

Example:

```js
// src/lib/services/tags/change-tag-instance-name.js

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

### Core

A __core__ function is a pure function. 

Inspired by [Functional Core, Imperative Shell](https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell), core functions comprise the functional core.

Example:

```js
// src/lib/core/tags/parse-tag-expression.js

module.exports = () => expression => {

    const [tagName, roleName] = expression.split('+').map(s => s.trim());        
    return { tagName, roleName };

};

```

### IO

The __io__ object contains objects and functions that depend on the environment. 

### Subscriptions

A __subscription__ function enables a listener to be notified of state changes.

### Stores

A __store__ object encapsulates state mutations and notifications.

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
