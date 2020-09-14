module.exports = ({ core, lib }) => expression => {

    const result = data => {
        const emailOrUsername = data.email ?? data.username;
        return { emailOrUsername, ...data };
    };

    const isEmail = expression.includes('@');
    
    if (!isEmail) {
        const { tagName: username, ...data } = core.tags.parseTagExpression(expression);
        return result({ username, ...data });
    }

    const indexOfAt = expression.indexOf('@');
    const [username] = expression.substr(0, indexOfAt).split('+');
    const lastIndexOfPlus = expression.lastIndexOf('+');
    const hasRole = lastIndexOfPlus > indexOfAt;        
    const [email = '', roleName] = hasRole ? lib.util.splitAt(expression, lastIndexOfPlus, 1) : [expression];
    return result({ username, email, roleName });

};

/* FOOTNOTES

Example of complex expression: 'foo+bar@gmail.com+dev'
=> { tagName: 'foo', roleName: 'dev', email: 'foo+bar@gmail.com' }

*/
