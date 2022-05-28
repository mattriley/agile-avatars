export default ({ test, compose, helpers }) => {

    test('role customiser name change propagates to tags', t => {
        const { components, services } = compose().modules;
        const $tagList = components.tagList.container();
        const roleId = services.roles.insertRole({ roleName: 'foo' });
        const $roleCustomiser = components.roleList.roleCustomiser.container(roleId);
        const $roleName = $roleCustomiser.querySelector('.role-name');

        services.tags.insertTag({ roleId });
        const tags = helpers.getTags($tagList);
        t.equal(tags.length, 1);

        $roleName.textContent = 'bar';
        helpers.dispatchEvent('blur', $roleName);
        const [tag1] = helpers.getTags($tagList);
        t.equal(tag1.getRoleName(), 'BAR');

    });

    test('tag role name changes', t => {
        const { components, services } = compose().modules;
        const $tagList = components.tagList.container();
        services.tags.insertTag({ roleName: 'foo' });
        const [tag1] = helpers.getTags($tagList);
        t.equal(tag1.getRoleName(), 'FOO');
        tag1.setRoleName('bar');
        t.equal(tag1.getRoleName(), 'BAR');

    });

    test('new role inserted at end of list', t => {
        const { components, services } = compose().modules;
        const $roleList = components.roleList.container();
        services.roles.insertRole({ roleName: 'foo' });
        services.roles.insertRole({ roleName: 'bar' });
        const [role1, role2] = helpers.getRoles($roleList);
        t.equal(role1.getRoleName(), 'FOO');
        t.equal(role2.getRoleName(), 'BAR');

    });

    test('nil role is hidden', t => {
        const { components, services } = compose().modules;
        const nilRoleId = services.roles.getNilRoleId();
        const $roleCustomiser = components.roleList.roleCustomiser.container(nilRoleId);
        t.ok($roleCustomiser.hidden);

    });

    test('non-nil role is visible', async t => {
        const { components, services } = compose().modules;
        const roleId = await services.roles.insertRole({ roleName: 'foo' });
        const $roleCustomiser = components.roleList.roleCustomiser.container(roleId);
        t.notOk($roleCustomiser.hidden);

    });

};
