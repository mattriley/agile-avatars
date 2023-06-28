export default ({ test, assert, helpers }) => ({ compose }) => {

    test('tag name changes to blank', () => {
        const { components, services } = compose().modules;
        const $tagList = components.tagList.container();
        services.tags.insertTag({ tagName: 'foo' });
        const [tag1] = helpers.getTags($tagList);
        const { getTagName, setTagName } = tag1;
        assert.equal(getTagName(), 'Foo');
        setTagName('');
        assert.equal(getTagName(), '');

    });

    test('tag name changes to different name', () => {
        const { components, services } = compose().modules;
        const $tagList = components.tagList.container();
        services.tags.insertTag({ tagName: 'foo' });
        const [tag1] = helpers.getTags($tagList);
        const { getTagName, setTagName } = tag1;
        assert.equal(getTagName(), 'Foo');
        setTagName('bar');
        assert.equal(getTagName(), 'bar');

    });

    test('tag name and role changes given expression', () => {
        const { components, services } = compose().modules;
        const $tagList = components.tagList.container();
        services.tags.insertTag();
        const [tag1] = helpers.getTags($tagList);
        const { setTagName, getTagName, getRoleName } = tag1;
        setTagName('foo+bar');
        assert.deepEqual([getTagName(), getRoleName()], ['foo', 'BAR']);

    });

    test('tag name change propagates to all instances of tag', () => {
        const { components, services } = compose().modules;
        const $tagList = components.tagList.container();
        services.tags.insertTag();
        services.settings.changeOption('active', 2);

        {
            const tags = helpers.getTags($tagList);
            assert.equal(tags.length, 2);
        }

        {
            const [tag1] = helpers.getTags($tagList);
            const { setTagName } = tag1;
            setTagName('Foo');
        }

        {
            const [tag1, tag2] = helpers.getTags($tagList);
            assert.equal(tag1.getTagName(), 'Foo');
            assert.equal(tag2.getTagName(), 'Foo');
        }


    });

};
