module.exports = ({ test, boot }) => {

    test('gets state', t => {
        const { diagnostics } = boot();
        const state = diagnostics.dumpState();
        t.equal(Object.keys(state), ['settings', 'roles', 'tags', 'tagInstances']);        
    });

};
