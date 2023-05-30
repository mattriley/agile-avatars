export default ({ config, core }) => email => {

    const { domain } = config.gravatar;
    const emailHash = core.gravatar.hashEmail(email);
    return `${domain}/${emailHash}.json`;

};

/* FOOTNOTES

Gravatar profile requests: 
https://en.gravatar.com/site/implement/profiles/

*/
