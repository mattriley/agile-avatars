module.exports = ({ test, boot }) => {

    const digits = ['', '1', '1 '];
    const names = ['foo', 'bar/foo'];
    const roles = [undefined, '+dev'];
    const extensions = ['', '.jpg'];
    
    const scenarios = digits.flatMap(digit => {
        return names.flatMap(name => {
            return roles.flatMap(role => {
                return extensions.flatMap(extension => {  
                    return {
                        expression: digit + name + (role ?? '') + extension,
                        expected: { tagName: 'foo', roleName: role ? role.replace('+', '') : role }
                    };
                });
            });
        });
    });
    
    scenarios.forEach(scenario => {
        test(`parses file expression: ${scenario.expression}`, t => {
            const { core } = boot();
            const tagData = core.tags.parseFileExpression(scenario.expression);
            t.equal(tagData.tagName, scenario.expected.tagName);
            t.equal(tagData.roleName, scenario.expected.roleName);
            
        });
    });

};