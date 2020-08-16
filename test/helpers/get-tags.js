module.exports = ({ window, helpers }) => $tagList => {

    return Array.from($tagList.querySelectorAll('.tag')).map($tag => {        
        const $tagName = $tag.querySelector('.tag-name');
        const $tagImage = $tagList.querySelector('.tag-image');
        const $roleName = $tag.querySelector('.role-name');

        return {
            getTagName: () => $tagName.textContent,
            getRoleName: () => $roleName.textContent,
            getRoleStyle: () => window.getComputedStyle($roleName),
            getTagStyle: () => window.getComputedStyle($tag),
            getImageStyle: () => window.getComputedStyle($tagImage),
            getImage: () => helpers.getTagImageAsync($tagImage),
            setTagName: tagName => {
                $tagName.textContent = tagName;
                helpers.dispatchEvent('blur', $tagName);
            },
            setRoleName: roleName => {
                $roleName.textContent = roleName;
                helpers.dispatchEvent('blur', $roleName);
            }
        };
    });

};
