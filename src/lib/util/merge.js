const merge = (target, source) => {
    
    for (const key of Object.keys(source)) {
        if (source[key] instanceof Object && key in target) {
            Object.assign(source[key], merge(target[key], source[key]));
        }
    }
  
    return Object.assign(target, source);
};

module.exports = merge;

/* FOOTNOTES

Merge functions can vary greatly depending on needs.
This merge function is the minimum needed for this application.

*/
