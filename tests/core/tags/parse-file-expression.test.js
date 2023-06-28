export default ({ test, assert }) => ({ compose }) => {

    const { core } = compose().modules;

    test('file name', () => {
        const expression = '1 foo bar+dev.jpg';
        const actual = core.tags.parseFileExpression(expression);
        assert.deepEqual(actual, {
            tagName: 'foo bar',
            roleName: 'dev'
        });
    });

};
