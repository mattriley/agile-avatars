Provides _static application config_ as a plain JavaScript object, including default state used to initialise the state stores. Config is loaded at [compose](#composing) time.

#### Collaborators

<%- await renderCollaborators() %>

- No collaborators required.

#### Source

_config_ is a single-file module:

<%- await lib.renderCode(lib.fetchCode('src/config/config.js')) %>
