# Agile Avatars


WORK IN PROGRESS.

Source code for [agileavatars.com](https://agileavatars.com). An experiment in frameworkless/vanilla JavaScript.

![Build](https://github.com/mattriley/agileavatars/workflows/Build/badge.svg)
[![codecov](https://codecov.io/gh/mattriley/agileavatars/branch/master/graph/badge.svg)](https://codecov.io/gh/mattriley/agileavatars)
![Status](https://img.shields.io/uptimerobot/status/m783034155-295e5fbc9fd4a0e3a54363a5)
![30 days](https://img.shields.io/uptimerobot/ratio/m783034155-295e5fbc9fd4a0e3a54363a5)

> Agile Avatars makes it quick and easy to know who's working on what with great looking avatars for your agile board. No more fiddling with Word or Google Docs making sure everything aligns just right. Simply drag and drop your images, make some adjustments, print, and laminate!

This is a hobby project I decided to double as an experiment in writing a web application in JavaScript without the aid of a framework like React or Angular. Such an approach is often referred to as frameworkless, or vanilla JavaScript.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Architecture

![Architecture](docs/architecture.svg)

Omitted for brievity:
- __Lib__: All depend on Lib except Config and IO.
- __Config__: All depend on Config except Elements and Lib.

## Architectural components

### Components

A plain object graph containing only _component builder functions_.

A __component builder function__ returns an object deriving [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) and may use closures to react to both user interaction and state changes (via subscriptions), and may self-mutate, and interact with services.

Example:

<%- renderJsFile(examples.component) %>

__Why not decouple components from services using pub/sub?__

TODO: Elaborate.

### Elements

A plain object graph containing only _element builder functions_.

An __element builder function__ returns an object deriving [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) and may use closures to react to user interaction, and may self-mutate.

Elements are 'fundamental' components. Unlike components, they cannot react to state changes or interact with services. For this reason, elements tend to be lower level, generic, and reusable.

Example:

<%- renderJsFile(examples.element) %>

### Services

A plain object graph containing only _service functions_.

A __service function__ orchestrates domain logic and IO including state changes.

Inspired by [Functional Core, Imperative Shell](https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell), __services__ comprise the 'imperative shell'.

Example:

<%- renderJsFile(examples.service) %>

### Core

A plain object graph containing only _pure functions_.

From [Wikipedia](https://en.wikipedia.org/wiki/Pure_function):
> In computer programming, a __pure function__ is a function that has the following properties:
> 1. Its return value is the same for the same arguments (no variation with local static variables, non-local variables, mutable reference arguments or input streams from I/O devices).
> 2. Its evaluation has no side effects (no mutation of local static variables, non-local variables, mutable reference arguments or I/O streams).

Inspired by [Functional Core, Imperative Shell](https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell), __core__ comprises the 'functional core'.

Example:

<%- renderJsFile(examples.core) %>

### IO

A plain object graph containing only functions that that depend on or act on the environment. 

<%- renderJsFile(examples.io) %>

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

### No globals

TODO: Elaborate.

### No classes

TODO: Elaborate.

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

<%- renderJsFile(examples.footnote, { includeFootnotes: true }) %>

### Functional programming

- Prefer `const` over `let`, and avoid `var`.
- Prefer higher-order functions such as `filter`, `map`, `reduce`, over imperative looping statements.
- Prefer currying dependencies over constructors (classes), e.g. `({ dep1, dep2 }) => ({ arg1, arg2 }) => { ... }`
