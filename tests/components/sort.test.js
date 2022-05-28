export default ({ test, compose, helpers }) => {

    const setup = () => {
        const { services, components } = compose().modules;
        const $sortOptions = components.optionsBar.options.sort().querySelector('select');
        const $tagList = components.tagList.container();

        const changeSortOption = value => {
            $sortOptions.value = value;
            helpers.dispatchEvent('change', $sortOptions);
        };

        return { $tagList, changeSortOption, services, helpers };
    };

    test('keep sorted by order added', t => {
        const { $tagList, services, changeSortOption } = setup();

        changeSortOption('orderAdded');

        services.tags.insertTag({ tagName: 'B', roleName: 'A' });
        services.tags.insertTag({ tagName: 'A', roleName: 'B' });

        const [tag1, tag2] = helpers.getTags($tagList);
        t.deepEqual([tag1.getTagName(), tag1.getRoleName()], ['B', 'A']);
        t.deepEqual([tag2.getTagName(), tag2.getRoleName()], ['A', 'B']);

    });

    test('keep sorted by role then name', t => {
        const { $tagList, services, changeSortOption } = setup();

        changeSortOption('roleThenName');

        services.tags.insertTag({ tagName: 'A', roleName: 'B' });
        services.tags.insertTag({ tagName: 'B', roleName: 'A' });
        services.tags.insertTag({ tagName: 'C', roleName: 'A' });

        const [tag1, tag2, tag3] = helpers.getTags($tagList);

        t.deepEqual([tag1.getTagName(), tag1.getRoleName()], ['B', 'A']);
        t.deepEqual([tag2.getTagName(), tag2.getRoleName()], ['C', 'A']);
        t.deepEqual([tag3.getTagName(), tag3.getRoleName()], ['A', 'B']);

    });

    test('keep sorted by name', t => {
        const { $tagList, services, changeSortOption } = setup();

        changeSortOption('name');

        services.tags.insertTag({ tagName: 'B', roleName: 'A' });
        services.tags.insertTag({ tagName: 'A', roleName: 'B' });

        const [tag1, tag2] = helpers.getTags($tagList);
        t.deepEqual([tag1.getTagName(), tag1.getRoleName()], ['A', 'B']);
        t.deepEqual([tag2.getTagName(), tag2.getRoleName()], ['B', 'A']);

    });

    test('sorts existing tags', t => {
        const { $tagList, services, changeSortOption } = setup();

        services.tags.insertTag({ tagName: 'A', roleName: 'B' });
        services.tags.insertTag({ tagName: 'C', roleName: 'A' });
        services.tags.insertTag({ tagName: 'B', roleName: 'A' });

        {
            const tags = helpers.getTags($tagList);
            t.equal(tags.length, 3);
        }

        changeSortOption('roleThenName');

        {
            const [tag1, tag2, tag3] = helpers.getTags($tagList);
            t.deepEqual([tag1.getTagName(), tag1.getRoleName()], ['B', 'A']);
            t.deepEqual([tag2.getTagName(), tag2.getRoleName()], ['C', 'A']);
            t.deepEqual([tag3.getTagName(), tag3.getRoleName()], ['A', 'B']);
        }

        changeSortOption('name');

        {
            const [tag1, tag2, tag3] = helpers.getTags($tagList);
            t.deepEqual([tag1.getTagName(), tag1.getRoleName()], ['A', 'B']);
            t.deepEqual([tag2.getTagName(), tag2.getRoleName()], ['B', 'A']);
            t.deepEqual([tag3.getTagName(), tag3.getRoleName()], ['C', 'A']);
        }

        changeSortOption('orderAdded');

        {
            const [tag1, tag2, tag3] = helpers.getTags($tagList);
            t.deepEqual([tag1.getTagName(), tag1.getRoleName()], ['A', 'B']);
            t.deepEqual([tag2.getTagName(), tag2.getRoleName()], ['C', 'A']);
            t.deepEqual([tag3.getTagName(), tag3.getRoleName()], ['B', 'A']);
        }


    });

};
