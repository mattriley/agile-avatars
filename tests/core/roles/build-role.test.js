export default ({ test, boot }) => {

    const { core } = boot();

    test('missing role name', t => {
        const role = core.roles.buildRole({});
        t.equal(role.roleName, '');
    });

    test('transforms role name', t => {
        const role = core.roles.buildRole({ roleName: ' foo ' });
        t.equal(role.roleName, 'FOO');
    });

    test('uses given color', t => {
        const role = core.roles.buildRole({ color: 'foo' });
        t.equal(role.color, 'foo');
    });

    test('uses preset color', t => {
        const role = core.roles.buildRole({ roleName: 'dev' });
        t.equal(role.color, '#48a56a');
    });

    test('uses random color', t => {
        const role = core.roles.buildRole({}, 0.3815);
        t.equal(role.color, '#61a9fb');
    });

};
