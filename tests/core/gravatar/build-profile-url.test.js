export default ({ test, assert }) => ({ compose }) => {

    test('builds a gravatar profile url', () => {
        const { core } = compose().modules;
        const profileUrl = core.gravatar.buildProfileUrl('foo@bar.com');
        assert.equal(profileUrl, 'https://secure.gravatar.com/f3ada405ce890b6f8204094deb12d8a8.json');

    });

};
