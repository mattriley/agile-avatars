export default ({ el, subscriptions }) => roleId => {

    const $style = el('style');

    subscriptions.roles.onChange(roleId, 'color', color => {
        $style.textContent = `
                .role${roleId} .tag-image { border-color: ${color}; }            
                .role${roleId} .role-name { background-color: ${color}; }
            `;
    });

    return $style;

};
