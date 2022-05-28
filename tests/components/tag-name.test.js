export default ({ test, compose, helpers }) => {

    test('tag name changes to blank', t => {
        const { components, services } = compose().modules;
        const $tagList = components.tagList.container();
        services.tags.insertTag({ tagName: 'foo' });
        const [tag1] = helpers.getTags($tagList);
        const { getTagName, setTagName } = tag1;
        t.equal(getTagName(), 'Foo');
        setTagName('');
        t.equal(getTagName(), '');

    });

    test('tag name changes to different name', t => {
        const { components, services } = compose().modules;
        const $tagList = components.tagList.container();
        services.tags.insertTag({ tagName: 'foo' });
        const [tag1] = helpers.getTags($tagList);
        const { getTagName, setTagName } = tag1;
        t.equal(getTagName(), 'Foo');
        setTagName('bar');
        t.equal(getTagName(), 'bar');

    });

    test('tag name and role changes given expression', t => {
        const { components, services } = compose().modules;
        const $tagList = components.tagList.container();
        services.tags.insertTag();
        const [tag1] = helpers.getTags($tagList);
        const { setTagName, getTagName, getRoleName } = tag1;
        setTagName('foo+bar');
        t.deepEqual([getTagName(), getRoleName()], ['foo', 'BAR']);

    });

    test('tag name change propagates to all instances of tag', t => {
        const { components, services } = compose().modules;
        const $tagList = components.tagList.container();
        services.tags.insertTag();
        services.settings.changeOption('active', 2);

        {
            const tags = helpers.getTags($tagList);
            t.equal(tags.length, 2);
        }

        {
            const [tag1] = helpers.getTags($tagList);
            const { setTagName } = tag1;
            setTagName('Foo');
        }

        {
            const [tag1, tag2] = helpers.getTags($tagList);
            t.equal(tag1.getTagName(), 'Foo');
            t.equal(tag2.getTagName(), 'Foo');
        }


    });

};
