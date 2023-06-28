export default ({ test, assert }) => ({ compose }) => {

    const { core } = compose().modules;

    test('email address', () => {
        const expression = 'foo+xzy@bar.com+dev';
        const actual = core.tags.parseEmailExpression(expression);
        assert.deepEqual(actual, {
            email: 'foo+xzy@bar.com',
            username: 'foo',
            emailOrUsername: 'foo+xzy@bar.com',
            roleName: 'dev'
        });
    });

    test('username', () => {
        const expression = 'foo+dev';
        const actual = core.tags.parseEmailExpression(expression);
        assert.deepEqual(actual, {
            email: '',
            username: 'foo',
            emailOrUsername: 'foo',
            roleName: 'dev'
        });
    });

};
