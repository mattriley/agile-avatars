module.exports = ({ el, subscriptions, config }) => () => {

    const $style = el('style');

    subscriptions.settings.options.onChange('size', size => {
        const width = size - (config.tags.imagePadding * 2);
        $style.textContent = `
            .tag-list { grid-template-columns: repeat(auto-fill, ${size}px); }
            .tag-image { width: ${width}px; height: ${width}px; }
        `;
    }).invoke();

    return $style;
    
};

/* FOOTNOTES

Absolute size needed for `.tag-image` because the image is loaded as a 
CSS `background-image` of a <div> instead of an <img> for performance reasons.

*/
