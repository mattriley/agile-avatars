The application is composed of architectural components called modules. Each module has a separate responsibility and may be composed with collaborating modules.

On the file system, a module is simply a directory of sources files that follow some simple rules:

- Each file and subdirectory (i.e. nested index.js) is loaded by index.js in the same directory.
- Each index.js exports an aggregate object of all files and directories loaded.
- Each file exports a function, so file names tend to be function names.
- Where a module is to be composed with collaborating modules, exported functions must be curried to first accept the collaborators.

#### Example: Root index.js for components module

<%- await renderCodeFile('src/modules/components/index.js') %>

#### Example: Curried function accepting collaborators

<%- await renderCodeFile('src/modules/components/tag-list/tag/components/tag-name.js') %>

This design has some interesting implications:

- Any source file is only referenced and loaded once in the entire application making it easier to move files around.
- In general, index.js files don't have a clear responsibility, sometimes even containing important implementation details that can be hard to find given any Node.js project will have many of them. This design ensures index.js files have a clear responsibility of their own and don't contain important implementation details that would be better extracted and named appropriately.
- Remove the noise of many require/import statements at the top of any file.
- No backtracking paths, i.e. `..` helps reduce cognitive load (for me anyway!).
- The approach to index.js forms a pattern which can be automated with code generation. See [module-indexgen](https://github.com/mattriley/agileavatars#-module-indexgen) in the list of development dependencies.

### Detecting inappropriate coupling

Because all relative files are loaded by index.js files, a simple search can be done to identify any inappropriate file references. A task is run during pre-commit and fails if any inappropriate file references are found.
