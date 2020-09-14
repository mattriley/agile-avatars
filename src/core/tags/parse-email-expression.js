module.exports = ({ lib }) => expression => {

    const indexOfAt = expression.indexOf('@');
    const [username] = (indexOfAt > -1 ? expression.substr(0, indexOfAt) : expression).split('+');
    const lastIndexOfPlus = expression.lastIndexOf('+');
    const hasRole = lastIndexOfPlus > indexOfAt;        
    const [email, roleName] = hasRole ? lib.util.splitAt(expression, lastIndexOfPlus, 1) : [expression];
    const emailOrUsername = email ?? username;
    return { email, username, emailOrUsername, roleName };

};

/* FOOTNOTES

Example of complex expression: 'foo+bar@gmail.com+dev'
=> { email: 'foo+bar@gmail.com', username: 'foo', emailOrUsername: 'foo+bar@gmail.com', roleName: 'dev' }

*/
