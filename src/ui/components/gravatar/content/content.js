module.exports = ({ el, content }) => () => {
    
    return el('div', 'gravatar').append(
        content.freetext(), 
        content.fallbacks() 
    );

};
