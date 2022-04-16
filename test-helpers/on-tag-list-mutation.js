export default ({ helpers }) => ($tagList, trigger, ...callbacks) => {

    const decoratedCallbacks = callbacks.map(cb => {
        const decorated = () => cb(...helpers.getTags($tagList));
        return cb ? decorated : undefined;
    });

    return helpers.onMutation($tagList, trigger, ...decoratedCallbacks);

};
