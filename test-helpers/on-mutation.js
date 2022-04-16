export default ({ window }) => ($target, trigger, ...callbacks) => {

    return new Promise(resolve => {
        const observer = new window.MutationObserver(async () => {
            const cb = callbacks.shift();
            if (cb) await cb();
            if (!callbacks.length) {
                observer.disconnect();
                resolve();
            }
        });
        observer.observe($target, { childList: true, subtree: true });
        trigger();
    });

};
