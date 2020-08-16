# Agile Avatars

![Build](https://github.com/mattriley/agileavatars/workflows/Build/badge.svg)
[![codecov](https://codecov.io/gh/mattriley/agileavatars/branch/master/graph/badge.svg)](https://codecov.io/gh/mattriley/agileavatars)
![Status](https://img.shields.io/uptimerobot/status/m783034155-295e5fbc9fd4a0e3a54363a5)
![30 days](https://img.shields.io/uptimerobot/ratio/m783034155-295e5fbc9fd4a0e3a54363a5)

## Architecture

![Architecture](docs/architecture.svg)

### Architecture Components

#### Components

A __component__ function returns a [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) which may mutate or invoke services in reaction to user interaction and state changes.

Components may be composed of other components, elements, or third party components.

#### Elements

An __element__ function returns a [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) which may mutate in reaction to user interaction.

Elements are more fundamental than components. Unlike components, they cannot react to state changes or invoke services. For this reason, elements tend to be lower level, more generic and more reusable.

Elements may be composed only of other elements.

#### Third Party Components

A __third party component__ function returns a [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) controlled by a third party library. 

Like elements, they cannot react to state changes or invoke services. Rather they provide an interface consistent with components and elements.

#### Services

A __service__ function that orchestrates domain logic and IO including issuing state changes to state stores.

Inspired by [Functional Core, Imperative Shell](https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell), service functions may be characterised as imperative shells.

#### Core

A __core__ function is a pure function. 

Inspired by [Functional Core, Imperative Shell](https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell), core functions comprise the functional core.

#### IO

An __io__ function is an impure function that depends on the environment. 

#### Subscriptions

...

#### Stores

...

