module.exports = ({ settings }) => () => {

    const gravatar = settings.gravatar.getState();
    const emails = gravatar.freetext.split(/[\r\n,;]+/g).map(s => s.trim()).filter(s => s);
    return { emails, ...gravatar };

};

