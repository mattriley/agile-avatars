module.exports = ({ el, config }) => () => {

    const $title = el('h1', { textContent: config.app.name });
    
    const $author = el('a', 'author', {
        textContent: `by ${config.author.name}`,
        href: config.author.profile,        
        target: '_blank'
    });

    return el('div', 'title-bar').append($title, $author);
    
};
