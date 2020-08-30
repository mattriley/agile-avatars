module.exports = ({ window }) => ($target, trigger, ...callbacks) => {

    return new Promise(resolve => {
        const observer = new window.MutationObserver(() => {
            const cb = callbacks.shift();
            if (cb) cb();
            if (!callbacks.length) {
                observer.disconnect();
                resolve();
            }
        });    
        observer.observe($target, { childList: true, subtree: true });
        trigger();
    });
    
};
