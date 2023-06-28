export default ({ test, assert }) => ({ compose }) => {

    test('return image blob on successful response', async () => {
        const image = 'blob';
        const fetch = url => {
            assert.equal(url, 'https://secure.gravatar.com/avatar/f3ada405ce890b6f8204094deb12d8a8?r=g&s=600&d=defaultimage');
            return { ok: true, blob: () => image };
        };
        const io = { fetch };
        const { services } = compose({ overrides: { io } }).modules;
        const actualImage = await services.gravatar.fetchImageAsync('foo@bar.com', 'defaultimage');
        assert.equal(actualImage, image);
    });

    test('throw on unexpected response status', async () => {
        const fetch = () => ({ ok: false, status: 500 });
        const io = { fetch };
        const { services } = compose({ overrides: { io } }).modules;
        try {
            await services.gravatar.fetchImageAsync('foo@bar.com', 'defaultimage');
            assert.fail();
        } catch (err) {
            assert.equal(err.message, 'Unexpected Gravatar response status 500.');
        }
    });

};
