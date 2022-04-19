export default ({ test, compose }) => {

    test('builds a gravatar profile url', t => {
        const { core } = compose();
        const profileUrl = core.gravatar.buildProfileUrl('foo@bar.com');
        t.equal(profileUrl, 'https://secure.gravatar.com/f3ada405ce890b6f8204094deb12d8a8.json');

    });

};
