module.exports = ({ test, boot }) => {

    const { core } = boot();

    test('file name', t => {
        const expression = '1 foo bar+dev.jpg';
        const actual = core.tags.parseFileExpression(expression)();
        t.equal(actual, { 
            tagName: 'foo bar',
            roleName: 'dev'
        });
    });

};