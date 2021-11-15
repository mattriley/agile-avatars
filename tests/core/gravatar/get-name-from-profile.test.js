module.exports = ({ test, boot }) => {

    const { core } = boot();

    test('return given name when both given and display names present', t => {
        const profile = { name: { givenName: 'given' }, displayName: 'display' };
        const name = core.gravatar.getNameFromProfile(profile, 'default');
        t.equal(name, 'given');
    });

    test('return display name when given name not present', t => {
        const profile = { name: {}, displayName: 'display' };
        const name = core.gravatar.getNameFromProfile(profile, 'default');
        t.equal(name, 'display');
    });

    test('return default name when neither name or display name present', t => {
        const profile = {};
        const name = core.gravatar.getNameFromProfile(profile, 'default');
        t.equal(name, 'default');
    });

};
