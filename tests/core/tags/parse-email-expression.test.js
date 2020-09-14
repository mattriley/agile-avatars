module.exports = ({ test, boot }) => {

    const { core } = boot();

    const emails = ['foo', 'foo@bar.com', 'foo+bar@qux.com'];
    const roles = [undefined, '+dev'];
    
    const scenarios = emails.flatMap(email => {
        return roles.flatMap(role => {
            return {
                expression: email + (role ?? ''),
                expected: { username: 'foo', roleName: role ? role.replace('+', '') : role }
            };
        });
    });
    
    scenarios.forEach(scenario => {
        test(`parses email expression: ${scenario.expression}`, t => {
            const data = core.tags.parseEmailExpression(scenario.expression);
            t.equal(data.username, scenario.expected.username);
            t.equal(data.roleName, scenario.expected.roleName);
            
        });
    });

};