module.exports = () => (path, caption) => {

    const lines = [
        '<br>',
        '<p align="center">',
        `  <img src="${path}?raw=true" />`,
        '  <br>',
        `  <em>${caption}</em>`,
        '</p>',
        '<br>',
    ];
    
    return lines.join('\n');

};


// <figure class="image">
//   <img src="{{ include.url }}" alt="{{ include.description }}">
//   <figcaption>{{ include.description }}</figcaption>
// </figure>

// // module.exports = () => path => {

//     const lines = [
//         '<br>',
//         '<p align="center">',
//         `  <img src="https://github.com/mattriley/agileavatars/raw/master/${path}" />`,
//         '</p>',
//         '<br>',
//     ];
    
//     return lines.join('\n');

// };

