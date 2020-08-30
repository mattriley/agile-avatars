module.exports = ({ test, boot }) => {

    const testCase = async (t, { ok, json, expectedName }) => {
        const fetch = () => ({ ok, json: () => json });
        const io = { fetch };
        const { services } = boot({ io });
        const name = await services.gravatar.fetchNameAsync('foo@bar.com', 'default');
        t.equal(name, expectedName);
        
    };

    test('return default name on response error', async t => {
        await testCase(t, { ok: false, expectedName: 'default' });
    });

    test('return given name when both given and display names present', async t => {
        const json = { entry: [{ name: { givenName: 'given' }, displayName: 'display' }] };
        await testCase(t, { ok: true, json, expectedName: 'given' });
    });

    test('return display name when given name not present', async t => {
        const json = { entry: [{ name: {}, displayName: 'display' }] };
        await testCase(t, { ok: true, json, expectedName: 'display' });
    });

    test('return default name when both given and display name not present', async t => {
        const json = { entry: [{ name: {} }] };
        await testCase(t, { ok: true, json, expectedName: 'default' });
    });

};
