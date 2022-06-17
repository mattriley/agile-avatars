export default ({ ui }) => () => {

    return ui.el('div', {
        title: 'Blocked and other badges',
        innerHTML: `
            <p>Create blocked and other badges in the same way as avatars.</p>
            <img src='img/tips/blocked-risk.png' />
        `
    });

};
