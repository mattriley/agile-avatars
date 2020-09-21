module.exports = ({ test, boot }) => {

    test('gets state', t => {
        const { getState } = boot();
        const state = getState();
        t.equal(Object.keys(state), ['settings', 'roles', 'tags', 'tagInstances']);        
    });

};
