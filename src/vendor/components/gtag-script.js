module.exports = ({ config, window }) => () => {

    const { trackingId } = config.gtag;
    const script = window.document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    return script;
    
};
