module.exports = () => expression => {

    const [tagName, roleName] = expression.split('+').map(s => s.trim());        
    return { tagName, roleName };

};

/* FOOTNOTES

Example of complex expression: 'foo bar+dev'
=> { tagName: 'foo bar', roleName: 'dev' }

*/
