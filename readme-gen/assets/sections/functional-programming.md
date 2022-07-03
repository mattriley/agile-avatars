Although strict functional design is not a design goal, there are certain functional principles which are easily applied in vanilla JavaScript and should be within grasp of the average developer.

### Immutability

Care should be taken to avoid mutation but this is not strictly enforced. 

Mutation should be intentional and well controlled.

Avoid introducing libraries that enforce immutability. While it's tempting to introduce a library like [Immutable.js](https://github.com/immutable-js/immutable-js) to enforce immutability, adding a library also adds another level of complexity and cognative load to the developer experience. Sometimes such libraries are used as "guardrails" to enforce immutability in teams where there are concerns around code quality, but at the same time, this can limit the developer's ability to make mistakes and learn to truly understand and value immutability.

As a rule of thumb, prefer `const` over `let`, and avoid `var`.

While this will not guarantee immutability, it will challenge people to think about it. If `let` is seen as a smell, it may drive refactoring toward `const` which will likely result in a better design. An example would be recognising the `let` in a `for` loop as a smell, triggering a refactor toward a higher-order function.

### Higher-order functions

Prefer higher-order functions such as `filter`, `map`, `reduce`, over imperative looping statements.

#### Example: Usage of reduce

This function transforms a list of store names into an object of store name -> store. This could also be done with a `for` loop. Reduce hides the low level implementation details of iteration. It also removes the need for intermedite variables such as loop counters. 

The `acc` variable is intentionally mutated given the scope of the mutation is small and isolated within the reduce function. An immutable equivalent could be `{ ...acc, [name]: store }`.

<%- await lib.renderCode(lib.fetchCode('src/modules/stores/setup.js')) %>

#### Further reading

- [Reduce (Composing Software) - Eric Elliot](https://medium.com/javascript-scene/reduce-composing-software-fe22f0c39a1d)
- [Array.prototype.reduce() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

### Pure functions

As much as possible, pure functions are separated from impure functions. To make the distinction clear, pure domain functions are kept in the `core` module. Pure functions can be reasoned about and tested in isolation without having to manage side effects.

From [Wikipedia](https://en.wikipedia.org/wiki/Pure_function):
> In computer programming, a __pure function__ is a function that has the following properties:
> 1. Its return value is the same for the same arguments (no variation with local static variables, non-local variables, mutable reference arguments or input streams from I/O devices).
> 2. Its evaluation has no side effects (no mutation of local static variables, non-local variables, mutable reference arguments or I/O streams).

#### Example: Usage of a pure function

This function orchestrates pure and impure functions making it impure. However because the implementation of `parseFileExpression` has been extracted as a pure function.

<%- await lib.renderCode(lib.fetchCode('src/modules/services/tags/insert-file-async.js')) %>

<%- await lib.renderCode(lib.fetchCode('src/modules/core/tags/parse-file-expression.js')) %>


### Pipe

Where possible, use `pipe` to avoid nesting function calls and intermediate variables.

#### Example: Usage of pipe when inserting a file

<%- await lib.renderCode(lib.fetchCode('src/modules/services/tags/insert-file-async.js')) %>

#### Source: pipe

<%- await lib.renderCode(lib.fetchCode('src/modules/util/pipe.js')) %>

Once the [pipeline operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Pipeline_operator) is officially supported in JavaScript, we can remove the custom implementation.

### Curry and partial application

- [Curry and Function Composition - Eric Elliott](https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983)

### Functional core, imperative shell

- [Functional Core, Imperative Shell - Gary Bernhardt](https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell)
