module.exports = ({ test, boot }) => {

    const { core } = boot();

    test('email', t => {
        const expression = 'foo+xzy@bar.com+dev';
        const actual = core.tags.parseEmailExpression(expression);
        t.equal(actual, { 
            email: 'foo+xzy@bar.com',
            username: 'foo',
            emailOrUsername: 'foo+xzy@bar.com',
            roleName: 'dev'
        });
    });

    test('username', t => {
        const expression = 'foo+dev';
        const actual = core.tags.parseEmailExpression(expression);
        t.equal(actual, { 
            email: '',
            username: 'foo',
            emailOrUsername: 'foo',
            roleName: 'dev'
        });
    });

};