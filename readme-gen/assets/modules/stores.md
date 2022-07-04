Provides the _state stores_. State stores manage state changes and raise change events. State stores are created at [compose](#composing) time as defined in config.

#### Collaborators

<%- await lib.renderCollaborators() %>

#### Source

`stores` is a single-file module that creates stores dynamically from _config_:

<%- await lib.renderCode(lib.fetchCode('src/modules/stores/setup.js')) %>

#### List of stores

<%- await lib.renderIndex({ maxDepth: 1 }) %>
