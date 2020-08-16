module.exports = ({ test, boot }) => {

    const emails = ['foo', 'foo@bar.com', 'foo+bar@qux.com'];
    const roles = [undefined, '+dev'];
    
    const scenarios = emails.flatMap(email => {
        return roles.flatMap(role => {
            return {
                expression: email + (role ?? ''),
                expected: { tagName: 'foo', roleName: role ? role.replace('+', '') : role }
            };
        });
    });
    
    scenarios.forEach(scenario => {
        test(`parses email expression: ${scenario.expression}`, t => {
            const { core } = boot();
            const tagData = core.tags.parseEmailExpression(scenario.expression);
            t.equal(tagData.tagName, scenario.expected.tagName);
            t.equal(tagData.roleName, scenario.expected.roleName);
            t.end();
        });
    });

};