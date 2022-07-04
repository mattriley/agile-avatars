Provides vendor (third party) components including gtag and vanilla-picker. These are separated from the components module because they have different collaborators. The components module avoids a direct dependency on window but some vendor components may require direct access to window which cannot be avoided.

#### Collaborators

<%- await lib.renderCollaborators() %>

#### List of vendor components

<%- await lib.renderIndex() %>
