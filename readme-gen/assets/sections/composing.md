Composing is the process of making the application _ready to launch_ and involves loading configuration, composing modules, and returning the composed modules.

The compose function composes the application from modules in the src directory.

<%- await lib.renderCode(lib.fetchCode('src/compose.js')) %>

This _codified view_ of the architecture has some interesting implications:

- Easier to understand how the application "hangs together".
- Easier to control and manage dependencies. Makes inappropriate dependencies more visible.
- Ability to test the integrated application without also launching it.
- Ability to programatically analyse and visualise dependencies.

<%- await lib.mermaid({ omit: ['config', 'diagnostics', 'startup', 'util', 'vendorComponents', 'vendorServices'] }) %>

## Deglobalising window

_window_ is a global [God object](https://en.wikipedia.org/wiki/God_object) that makes it too easy to misplace responsibilities. For example, manipulating the DOM or making HTTP requests from anywhere in the application.

The application has been designed to mitigate such misplaced responsibilities by avoiding the global window object altogether. The compose function expects a window object to be explicitly provided which is then passed to only the selected modules that are allowed to access it.

While this helps be intentional of how window is accessed, it still doesn't prevent use of the global window object. So, in order to _detect_ inappropriate access, window is not made globally available in the unit tests. This is possible because the unit tests run on Node.js instead of a browser environment. JSDOM is used to emulate a browser and create a non-global window object to provide to the compose function. This causes any code referencing the global window object to fail.

## module-composer

_module-composer_ is a small library that reduces the amount of boilerplate code needed to compose modules. It was extracted from Agile Avatars for reuse.

https://github.com/mattriley/node-module-composer

##### Further reading

- [Composition Root - Mark Seemann](https://blog.ploeh.dk/2011/07/28/CompositionRoot/)
