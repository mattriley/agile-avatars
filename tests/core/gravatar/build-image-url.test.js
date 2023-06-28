export default ({ test, assert }) => ({ compose }) => {

    test('builds a gravatar image url', () => {
        const { core } = compose().modules;
        const imageUrl = core.gravatar.buildImageUrl('foo@bar.com', 'monsterid');
        assert.equal(imageUrl, 'https://secure.gravatar.com/avatar/f3ada405ce890b6f8204094deb12d8a8?r=g&s=600&d=monsterid');

    });

};
