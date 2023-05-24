export default ({ constants, core }) => email => {

    const { domain } = constants.gravatar;
    const emailHash = core.gravatar.hashEmail(email);
    return `${domain}/${emailHash}.json`;

};

/* FOOTNOTES

Gravatar profile requests: 
https://en.gravatar.com/site/implement/profiles/

*/
