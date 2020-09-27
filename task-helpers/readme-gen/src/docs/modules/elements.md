An aggregation of _element builder functions_.

An __element builder function__ returns an object deriving [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) using closures to react to user interaction, and may self-mutate.

Elements are 'fundamental' components. Unlike components, they cannot react to state changes or interact with services. For this reason, elements tend to be lower level, generic, and reusable.

<%- renderJsFile('src/elements/editable-span.js') %>
