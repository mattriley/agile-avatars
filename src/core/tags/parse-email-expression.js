module.exports = ({ core }) => expression => {

    const isEmail = expression.includes('@');
    if (!isEmail) return core.tags.parseTagExpression(expression);

    const indexOfAt = expression.indexOf('@');
    const [tagName] = expression.substr(0, indexOfAt).split('+');
    const lastIndexOfPlus = expression.lastIndexOf('+');
    const hasRole = lastIndexOfPlus > indexOfAt;        
    const [email, roleName] = hasRole ? core.util.splitAt(expression, lastIndexOfPlus, 1) : [expression];
    return { tagName, email, roleName };

};

/* FOOTNOTES

Example of complex expression: 'foo+bar@gmail.com+dev'
=> { tagName: 'foo', roleName: 'dev', email: 'foo+bar@gmail.com' }

*/
