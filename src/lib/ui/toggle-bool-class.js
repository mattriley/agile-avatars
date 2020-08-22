module.exports = ($el, className, bool) => {

    $el.classList.remove(`${className}-${Boolean(!bool)}`);
    $el.classList.add(`${className}-${Boolean(bool)}`);
    
};