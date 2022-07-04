Provides _style factory functions_. A style is simply a HTML style element that relies on closures to react to state changes by updating the CSS content of the element. This enables dynamic styling. Styles are injected into the document head by _styleManager_ which is loaded on startup.

#### Collaborators

<%- await renderCollaborators() %>

#### Example: roleColor

<%- await lib.renderCode(lib.fetchCode('src/modules/styles/role-color.js')) %>

#### Source: styleManager

<%- await lib.renderCode(lib.fetchCode('src/modules/startup/create-style-manager.js')) %>

#### List of styles

<%- await renderIndex() %>
