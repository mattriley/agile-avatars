Provides _subscription functions_. A subscription function enables a listener to be notified of state changes.

The subscription functions are actually implemented in the state store. This module exposes only the subscriptions from the stores to prevent direct read/write access to the the stores. 

_stores_ enable retrieval and updating of state, and the ability to subscribe to state change events. In our layered architecture, the domain layer depends on the data layer, and so the _services_ module may access Stores directly.

The presentation layer however depends on the domain layer, and so the _components_ module may _not_ access Stores directly. That's to say, the presentation layer should not be retrieving and updating state directly.

The _subscriptions_ module was introduced to allow Components to subscribe to state change events while preventing access to the underlying stores. The subscriptions module is generated from the Stores, only providing access to subscriptions.

#### Collaborators

<%- await renderCollaborators() %>

#### Source

_subscriptions_ is a single-file module that exposes only subscriptions from the stores:

<%- await lib.renderCode(lib.fetchCode('src/modules/subscriptions/setup.js')) %>
