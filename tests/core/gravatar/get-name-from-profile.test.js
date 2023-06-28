export default ({ test, assert }) => ({ compose }) => {

    const { core } = compose().modules;

    test('return given name when both given and display names present', () => {
        const profile = { name: { givenName: 'given' }, displayName: 'display' };
        const name = core.gravatar.getNameFromProfile(profile, 'default');
        assert.equal(name, 'given');
    });

    test('return display name when given name not present', () => {
        const profile = { name: {}, displayName: 'display' };
        const name = core.gravatar.getNameFromProfile(profile, 'default');
        assert.equal(name, 'display');
    });

    test('return default name when neither name or display name present', () => {
        const profile = {};
        const name = core.gravatar.getNameFromProfile(profile, 'default');
        assert.equal(name, 'default');
    });

};
