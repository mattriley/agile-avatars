export default ({ test, assert }) => ({ compose }) => {

    test('return profile on successful response', async () => {
        const profile = { name: { givenName: 'given' }, displayName: 'display' };
        const json = { entry: [profile] };
        const fetch = url => {
            assert.equal(url, 'https://secure.gravatar.com/f3ada405ce890b6f8204094deb12d8a8.json');
            return { ok: true, json: () => json };
        };
        const io = { fetch };
        const { services } = compose({ overrides: { io } }).modules;
        const actualProfile = await services.gravatar.fetchProfileAsync('foo@bar.com');
        assert.deepEqual(actualProfile, profile);
    });

    test('return empty profile when email is null', async () => {
        const { services } = compose().modules;
        const profile = await services.gravatar.fetchProfileAsync(null);
        assert.deepEqual(profile, {});
    });

    test('return empty profile on 404 not found', async () => {
        const fetch = () => ({ status: 404 });
        const io = { fetch };
        const { services } = compose({ overrides: { io } }).modules;
        const profile = await services.gravatar.fetchProfileAsync('foo@bar.com');
        assert.deepEqual(profile, {});
    });

    test('throw on unexpected response status', async () => {
        const fetch = () => ({ ok: false, status: 500 });
        const io = { fetch };
        const { services } = compose({ overrides: { io } }).modules;
        try {
            await services.gravatar.fetchProfileAsync('foo@bar.com');
            assert.fail();
        } catch (err) {
            assert.equal(err.message, 'Unexpected Gravatar response status 500.');
        }
    });

};
