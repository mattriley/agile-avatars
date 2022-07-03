Provides _element factory functions_. An element is a HTML element that relies on closures to react to user interaction by updating the element or raising events for components. Unlike components, they cannot react to state changes or invoke services. Elements are lower level and may be reused by multiple components.

#### Collaborators

<%- await collaborators %>

- No access to _stores_ or _io_. Effects are serviced by raising events to be handled by _components_.
- No access to _window_. Low-level presentation concerns are serviced by the _ui_ module.

#### Example: editableSpan

<%- await lib.renderCode(lib.fetchCode('src/modules/elements/editable-span.js')) %>

#### List of elements

<%- await renderIndex() %>
