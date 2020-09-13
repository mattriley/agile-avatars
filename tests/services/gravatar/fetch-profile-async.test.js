module.exports = ({ test, boot }) => {

    test('return empty profile on response error', async t => {
        const fetch = () => ({ ok: false });
        const io = { fetch };
        const { services } = boot({ io });
        const profile = await services.gravatar.fetchProfileAsync('foo@bar.com');
        t.equal(profile, {});
    });

    test('return profile on successful response', async t => {
        const profile = { name: { givenName: 'given' }, displayName: 'display' };
        const json = { entry: [profile] };
        const fetch = () => ({ ok: true, json: () => json });
        const io = { fetch };
        const { services } = boot({ io });
        const actualProfile = await services.gravatar.fetchProfileAsync('foo@bar.com');
        t.equal(profile, actualProfile);
    });

};
