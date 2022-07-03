View rendering is achieved primarily using the DOM API - `document.createElement`, and by exception using HTML strings - `element.innerHTML`.

## DOM API - document.createElement

Creating elements with the DOM API usually involves:

- Creating an element, `document.createElement('div')`
- Assigning a class name, `element.className = 'myclass'`
- Assigning properties, `element.prop1 = 'foo'`
- Appending child elements, `element.append(child1, child2)`
- Adding event listeners, `element.addEventListener('click', clickHandler)`

This approach is sometimes criticised as verbose. While I only considered the verbosity a minor concern, I did notice a pattern emerge which lead me to the creation of a helper function, `el`.

### Creating elements with el

`el` takes a tag name, an optional class name, and optional properties object. Because the native `append` and `addEventListener` functions return undefined, `el` overrides them to return the element instead to enable function chaining.

#### Example: Usage of el

```js
const $div = el('div', 'myclass', { prop1: 'foo', prop2: 'bar' })
    .append(child1, child2)
    .addEventListener('focus', focusHandler)
    .addEventListener('click', clickHandler);
```

The equivalent without `el`:

```js
const $div = document.createElement('div');
$div.className = 'myclass';
$div.prop1 = 'foo';
$div.prop2 = 'bar';
$div.append(child1, child2);
$div.addEventListener('focus', focusHandler);
$div.addEventListener('click', clickHandler);
```

#### Source: el

<%- await renderCodeFile('src/modules/ui/el.js') %>

### Observations

#### No id required on elements. No need to query for elements.

Because ultimately this approach uses `document.createElement` to create elements, and all interaction with elements are encapsulated within builder functions, we always have a direct reference to the element. This eliminates the need to assign an id, or lookup elements using `document.getElementById` or `document.querySelector` or some variation of these.

## HTML strings - element.innerHTML

`element.innerHTML` is used by exception, where HTML is used primarily for marking up blocks of content.

#### Example: Usage of innerHTML for content

This example uses `el` to create an element, but assigns a HTML string to `innerHTML` rather than appending child elements.

<%- await renderCodeFile('src/modules/components/tips/naming.js') %>
