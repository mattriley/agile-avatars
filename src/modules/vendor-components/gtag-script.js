export default ({ ui, config }) => () => {

    const { trackingId } = config.gtag;

    return ui.el('script', {
        src: `https://www.googletagmanager.com/gtag/js?id=${trackingId}`
    });

};
