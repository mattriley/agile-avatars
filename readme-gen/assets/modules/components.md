Provides _component factory functions_. A component is a HTML element that relies on closures to react to user interaction and state changes by updating the DOM or invoking services for any non-presentation concerns.

#### Collaborators

<%- await collaborators %>

- No access to _stores_ or _io_. Effects are serviced by the _services_ module.
- No access to _window_. Low-level presentation concerns are serviced by the _ui_ module.

#### Example: tagName

tagName renders the tag name for a given _tag instance_. A _tag_ is composed of an image, a name, and a role. Multiple _instances_ of a tag may be rendered at a time depending on the numbers specified in the _active_ and _passive_ fields.

tagName accepts the ID of a tag instance and returns a [content editable](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content) span. tagName reacts to changes by invoking the changeTagName service function with the new tag name.

changeTagName updates the state of the underlying tag, which triggers a propagation of the new tag name to all other instances of the tag.

tagName subscribes to tag name change events and updates the editable span with the new tag name.

<%- await renderCodeFile('src/modules/components/tag-list/tag/components/tag-name.js') %>

#### List of components

<%- await renderIndex() %>
