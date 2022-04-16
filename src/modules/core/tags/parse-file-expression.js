export default () => expression => {

    const [tagName, roleName] = expression
        .split('/')
        .pop()
        .match(/^(\d+)?(.+)/)[2]
        .split('.')[0]
        .split('+')
        .map(s => s.trim());

    return { tagName, roleName };

};

/* FOOTNOTES

Example of complex expression: '1 foo bar+dev.jpg'
=> { tagName: 'foo bar', roleName: 'dev' }

Leading numbers are stripped to enable inserting tags in a preferred order.

*/
