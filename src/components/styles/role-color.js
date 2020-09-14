module.exports = ({ el, subscriptions }) => () => {

    const $styles = el('div');

    subscriptions.roles.onInsert(roleId => {
        const $style = el('style');

        subscriptions.roles.onChange(roleId, 'color', color => {
            $style.textContent = `
                .role${roleId} .tag-image { border-color: ${color}; }            
                .role${roleId} .role-name { background-color: ${color}; }
            `;
        });
    
        $styles.append($style);
    });

    return $styles;

};
