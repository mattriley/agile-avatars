# Agile Avatars

Source code for [agileavatars.com](https://agileavatars.com), an experiment in frameworkless/vanilla JavaScript.

![Build](https://github.com/mattriley/agileavatars/workflows/Build/badge.svg)
[![codecov](https://codecov.io/gh/mattriley/agileavatars/branch/master/graph/badge.svg)](https://codecov.io/gh/mattriley/agileavatars)
![Status](https://img.shields.io/uptimerobot/status/m783034155-295e5fbc9fd4a0e3a54363a5)
![30 days](https://img.shields.io/uptimerobot/ratio/m783034155-295e5fbc9fd4a0e3a54363a5)

> Agile Avatars makes it quick and easy to know who's working on what with great looking avatars for your agile board. No more fiddling with Word or Google Docs making sure everything aligns just right. Simply drag and drop your images, make some adjustments, print, and laminate!

This is a hobby project I decided to double as an experiment in writing a web application in JavaScript without the aid of a framework like React or Angular. Such an approach is often referred to as frameworkless, or vanilla JavaScript.

# Requirements

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

# Architecture

![Architecture](docs/architecture.svg)

## Architecture Components

### Components

A __component__ function returns a [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) which may mutate or invoke services in reaction to user interaction and state changes.

Example:

```js
<%- `// ${exampleComponentPath}` %>

<%- include(exampleComponentPath).split('/*')[0] -%>
```

### Elements

An __element__ function returns a [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) which may mutate in reaction to user interaction.

Elements are more fundamental than components. Unlike components, they cannot react to state changes or invoke services. For this reason, elements tend to be lower level, more generic and more reusable.

Example:

```js
<%- `// ${exampleElementPath}` %>

<%- include(exampleElementPath).split('/*')[0] -%>
```

### Services

A __service__ function that orchestrates domain logic and IO including issuing state changes to state stores.

Inspired by [Functional Core, Imperative Shell](https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell), service functions may be characterised as imperative shells.

Example:

```js
<%- `// ${exampleServicePath}` %>

<%- include(exampleServicePath).split('/*')[0] -%>
```

### Core

A __core__ function is a pure function. 

Inspired by [Functional Core, Imperative Shell](https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell), core functions comprise the functional core.

Example:

```js
<%- `// ${exampleCorePath}` %>

<%- include(exampleCorePath).split('/*')[0] -%>
```

### IO

The __io__ object contains objects and functions that depend on the environment. 

```js
<%- `// ${exampleIOPath}` %>

<%- include(exampleIOPath).split('/*')[0] -%>
```

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

# Conventions

__Prefix $ to variables storing HTML element and $$ for collections of HTML elements__

I generally prefer to avoid variable prefixes but I've found these prefixes help in a couple of ways:

1. Improves visual scanning of code making it faster to interpret.
2. Avoids naming conflicts, e.g. `$tagName.textContext = tagName;`

__Clarifying comments as footnotes__

Such comments are secondary to the code and so follow the code rather than preceed it.

Example: 

```js
<%- `// ${exampleFootnotePath}` %>

<%- include(exampleFootnotePath) -%>
```