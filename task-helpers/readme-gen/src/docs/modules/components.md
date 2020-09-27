An aggregation of _component builder functions_.

A __component builder function__ returns an object deriving [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) using closures to react to both user interaction and state changes (via subscriptions), may self-mutate, and interact with services.

<%- renderJsFile('src/components/tag-list/tag/components/tag-name.js') %>

Because component builder functions simply return native HTML elements, they can easily be appended to create component hierarchies.

<%- renderJsFile('src/components/header/header.js') %>
