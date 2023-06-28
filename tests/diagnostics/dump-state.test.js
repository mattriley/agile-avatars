export default ({ test, assert }) => ({ compose }) => {

    test('gets state', () => {
        const { diagnostics } = compose().modules;
        const state = diagnostics.dumpState();
        assert.deepEqual(Object.keys(state), ['settings', 'roles', 'tags', 'tagInstances']);
    });

};
