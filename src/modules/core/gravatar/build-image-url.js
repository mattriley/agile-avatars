export default ({ core, constants }) => (email, defaultImage) => {

    const { domain, size } = constants.gravatar;
    const emailHash = core.gravatar.hashEmail(email);
    return `${domain}/avatar/${emailHash}?r=g&s=${size}&d=${defaultImage}`;

};

/* FOOTNOTES

Gravatar image requests: 
https://en.gravatar.com/site/implement/images/

*/
