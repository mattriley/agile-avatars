## Code

### Prefix $ to variables storing HTML element and $$ for collections of HTML elements

I generally prefer to avoid variable prefixes but I've found these prefixes help in a couple of ways:

1. Improves visual scanning of code making it faster to interpret.
2. Avoids naming conflicts, e.g. `$tagName.textContext = tagName;`

### Clarifying comments as footnotes

Such comments are secondary to the code and so follow the code rather than preceed it.

<%- await renderCodeFile('src/modules/components/tag-list/tag/components/tag-image.js', { includeFootnotes: true }) %>

### Async functions end with the word Async

This just makes it easier to know when to use `await`.


## Documentation

- Table of contents limited to heading 1.
- Headings for "lists" should begin with __List of__.
- Wherever possible render actual source files for example code.
