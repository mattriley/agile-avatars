Provides _service functions_. Service functions perform effects by orchestrate the pure functions from _core_, the impure functions from _io_ (such as making HTTP requests), as well as updating state.

#### Collaborators

<%- await collaborators %>

- No access to _window_. IO operations are serviced by the _io_ module.

#### Example: changeTagName

<%- await lib.renderCode(lib.fetchCode('src/modules/services/tags/change-tag-name.js')) %>

#### List of service functions

<%- await renderIndex() %>
