const lib = require('task-library/src/lib/readme-gen');

module.exports = () => (path, caption) => {

    return lib.renderImage(path, caption);

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

