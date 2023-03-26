export default ({ test, compose, helpers }) => {

    test('master role name reflects new color', t => {
        const { components, services } = compose().modules;

        const roleId = services.roles.insertRole({ roleName: 'foo' });
        const $roleCustomiser = components.roleList.roleCustomiser.container(roleId);

        services.tags.insertTag({ roleId });

        const $colorPickerTrigger = $roleCustomiser.querySelector('.color-picker');
        helpers.dispatchEvent('click', $colorPickerTrigger);

        const $color = $colorPickerTrigger.querySelector('input');
        $color.value = '#ffffffff';
        helpers.dispatchEvent('input', $color);

        const role = helpers.getRole($roleCustomiser);
        t.equal(role.getRoleStyle().backgroundColor, 'rgb(255, 255, 255)');


    });

    test('role color change propagates to tags', t => {
        const { components, services } = compose().modules;

        const roleId = services.roles.insertRole({ roleName: 'foo' });
        const $roleCustomiser = components.roleList.roleCustomiser.container(roleId);

        const $tagList = components.tagList.container();
        services.tags.insertTag({ roleId });

        const $colorPickerTrigger = $roleCustomiser.querySelector('.color-picker');
        helpers.dispatchEvent('click', $colorPickerTrigger);

        const $color = $colorPickerTrigger.querySelector('input');
        $color.value = '#ffffffff';
        helpers.dispatchEvent('input', $color);

        const [tag1] = helpers.getTags($tagList);
        const imageStyle = tag1.getImageStyle();
        const roleStyle = tag1.getRoleStyle();
        t.equal(imageStyle.borderColor, '#ffffffff');
        t.equal(roleStyle.backgroundColor, 'rgb(255, 255, 255)');

    });

};
