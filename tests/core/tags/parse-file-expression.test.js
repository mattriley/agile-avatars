export default ({ test, compose }) => {

    const { core } = compose().modules;

    test('file name', t => {
        const expression = '1 foo bar+dev.jpg';
        const actual = core.tags.parseFileExpression(expression);
        t.equal(actual, {
            tagName: 'foo bar',
            roleName: 'dev'
        });
    });

};
