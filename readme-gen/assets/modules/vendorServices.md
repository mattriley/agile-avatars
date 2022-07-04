Provides vendor (third party) services including gtag and sentry. These are separated from the services module because they have different collaborators. The services module avoids a direct dependency on window but some vendor services may require direct access to window which cannot be avoided.

#### Collaborators

<%- await lib.renderCollaborators() %>

#### Example: gtag

gtag is short for Google Global Site Tag.

gtag depends on window for global variables to work correctly.

<%- await lib.renderCode(lib.fetchCode('src/modules/vendor-services/gtag.js')) %>

#### List of vendor services

<%- await lib.renderIndex({ maxDepth: 1 }) %>
