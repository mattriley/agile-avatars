module.exports = ({ stores }) => () => {

    const gravatar = stores.settings.find('gravatar');
    const emails = gravatar.freetext.split(/[\r\n,;]+/g).map(s => s.trim()).filter(s => s);
    return { emails, ...gravatar };

};

