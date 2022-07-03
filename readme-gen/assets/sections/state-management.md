State management in an interesting problem to solve in this application due to the need for shared state between components.

Here's some examples:

Inserting a file (dropping, choosing, or Gravatar):
- Parses the file name to extract a tag name and optional role name.
- Renders a new _master role badge_ in the _roles list_ if it doesn't already exist.
- Renders multiple tag instances with the same image, name and role based on the values of the active and passive fields.

Changing the name of a role in the role list:
- Updates the role name of all tag instances referencing that role.

Changing the colour of a role in the role list:
- Updates the colour of the master role badge being updated.
- Updates the colour of the role and border colour of the image of all tag instances referencing that role.

Changing the role name of a tag instance:
- Renders a new role in the role list if it doesn't already exist.
- Updates the role name of all tag instances referencing that role.
- Updates the colour of the role and border colour of the image of all tag instances referencing that role.

Changing the name of a tag instance:
- Updates the name of all other instances of that tag.

Changing an option in the _options bar_ including active, passive, shape, size, spacing and sort order affects all tags.

The constraint of _no state management libraries_ forces the need for a bespoke state management solution.
No attempt is made to generify the state management solution for reuse by other applications; rather it is designed to evolve with the specific needs of this application.

## Stores

State is managed by a series of _state stores_. 

A __state store__ is collection of data items keyed by a unique identifier and managed using typical CRUD operations such as insert, find, update, remove.

<%- await renderCodeFile('src/modules/storage/state-store.js', { open: false }) %>

#### Example: Inserting a role

<%- await renderCodeFile('src/modules/services/roles/insert-role.js') %>

#### Example: Changing a role name

<%- await renderCodeFile('src/modules/services/roles/change-role-name.js') %>

## Subscriptions

State stores use the [observer pattern](https://en.wikipedia.org/wiki/Observer_pattern) to enable consumers to react to state changes by associating _listener_ functions to events such as _onInsert_ and _onChange_.

The observer pattern is easily implemented with Node's [EventEmitter](https://nodejs.org/api/events.html) which can be bundled directly into the application.

During [compose](#composing) time, subscription functions are extracted from the stores to produce the _subscriptions_ module. This decouples subscribers from the stores making them agnostic of the data source. Although not a design goal for this application, this should allow the data source to change without impacting the subscribers provided the interface of the subscription functions do not change.

#### Example: Reacting to a new role being inserted

<%- await renderCodeFile('src/modules/components/role-list/container.js') %>

### Example: Reacting to a role name change

<%- await renderCodeFile('src/modules/components/role-list/role-customiser/master-role-name.js') %>
