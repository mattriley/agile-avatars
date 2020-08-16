module.exports = ({ test, boot, helpers }) => {
    
    test('tag name changes to blank', t => {
        const { components, services } = boot();
        const $tagList = components.tagList();
        services.tags.insertTag({ tagName: 'foo' });
        const [tag1] = helpers.getTags($tagList);
        const { getTagName, setTagName } = tag1;
        t.equal(getTagName(), 'Foo');
        setTagName('');                
        t.equal(getTagName(), '');
        t.end();
    });

    test('tag name changes to different name', t => {
        const { components, services } = boot();
        const $tagList = components.tagList();    
        services.tags.insertTag({ tagName: 'foo' });
        const [tag1] = helpers.getTags($tagList);
        const { getTagName, setTagName } = tag1;
        t.equal(getTagName(), 'Foo');
        setTagName('bar');
        t.equal(getTagName(), 'bar');
        t.end();
    });

    test('tag name and role changes given expression', t => {
        const { components, services } = boot();
        const $tagList = components.tagList();        
        services.tags.insertTag();
        const [tag1] = helpers.getTags($tagList);
        const { setTagName, getTagName, getRoleName } = tag1;
        setTagName('foo+bar');
        t.deepEqual([getTagName(), getRoleName()], ['foo', 'BAR']);
        t.end();
    });

    test('tag name change propagates to all instances of tag', t => {
        const { components, services } = boot();        
        const $tagList = components.tagList();
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

        t.end();
    });

};