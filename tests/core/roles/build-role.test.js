export default ({ test, assert }) => ({ compose }) => {

    const { core } = compose().modules;

    test('missing role name', () => {
        const role = core.roles.buildRole({});
        assert.equal(role.roleName, '');
    });

    test('transforms role name', () => {
        const role = core.roles.buildRole({ roleName: ' foo ' });
        assert.equal(role.roleName, 'FOO');
    });

    test('uses given color', () => {
        const role = core.roles.buildRole({ color: 'foo' });
        assert.equal(role.color, 'foo');
    });

    test('uses preset color', () => {
        const role = core.roles.buildRole({ roleName: 'dev' });
        assert.equal(role.color, '#48a56a');
    });

    test('uses random color', () => {
        const role = core.roles.buildRole({}, 0.3815);
        assert.equal(role.color, '#61a9fb');
    });

};
