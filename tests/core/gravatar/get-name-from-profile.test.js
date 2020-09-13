module.exports = ({ test, boot }) => {

    test('return given name when both given and display names present', t => {
        const { core } = boot();
        const profile = { name: { givenName: 'given' }, displayName: 'display' };
        const name = core.gravatar.getNameFromProfile(profile, 'foo@bar.com');
        t.equal(name, 'given');
    });

    test('return display name when given name not present', t => {
        const { core } = boot();
        const profile = { name: {}, displayName: 'display' };
        const name = core.gravatar.getNameFromProfile(profile, 'foo@bar.com');
        t.equal(name, 'display');
    });

    test('return default name when both given and display name not present', t => {
        const { core } = boot();
        const profile = {};
        const name = core.gravatar.getNameFromProfile(profile, 'foo@bar.com');
        t.equal(name, 'foo@bar.com');
    });

};
