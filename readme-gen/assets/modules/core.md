Provides _pure functions_ to be consumed by the _services_ module. Without core, services would be interlaced with pure and impure functions, making them harder to test and reason about.

#### Collaborators

<%- await renderCollaborators() %>

- No access to modules that produce side effects.

#### Example: parseEmailExpression

parseEmailExpression is a pure function. Amongst other properties of pure functions, its return value is the same for the same arguments, and its evaluation has no side effects.

<%- await lib.renderCode(lib.fetchCode('src/modules/core/tags/parse-email-expression.js')) %>

#### List of core functions

<%- await renderIndex() %>

#### Further reading

- [Pure function - Wikipedia](https://en.wikipedia.org/wiki/Pure_function)
- [Functional Core, Imperative Shell - Gary Bernhardt](https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell)
