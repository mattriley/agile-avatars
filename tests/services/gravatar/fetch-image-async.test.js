module.exports = ({ test, boot }) => {

    test('fetch invoked with correct url', async t => {
        await new Promise(resolve => {
            const fetch = url => {
                t.equal(url, 'https://secure.gravatar.com/avatar/f3ada405ce890b6f8204094deb12d8a8?r=g&s=600&d=defaultimage');
                resolve();
            };
            const io = { fetch };
            const { services } = boot({ io });
            services.gravatar.fetchImageAsync('foo@bar.com', 'defaultimage');
        });
    });

    test('return image blob on successful response', async t => {
        const image = 'blob';
        const fetch = () => ({ ok: true, blob: () => image });
        const io = { fetch };
        const { services } = boot({ io });
        const actualImage = await services.gravatar.fetchImageAsync('foo@bar.com', 'defaultimage');
        t.equal(actualImage, image);
    });

    test('throw on unexpected response status', async t => {
        const fetch = () => ({ ok: false, status: 500 });
        const io = { fetch };
        const { services } = boot({ io });
        try {
            await services.gravatar.fetchImageAsync('foo@bar.com', 'defaultimage');
            t.fail();
        } catch (err) {
            t.equal(err.message, 'Unexpected Gravatar response status 500.');
        }
    });

};
