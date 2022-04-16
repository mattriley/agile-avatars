export default ({ window }) => $roleCustomiser => {

    const $roleName = $roleCustomiser.querySelector('.role-name');
    const getRoleName = () => $roleName.textContent;
    const getRoleStyle = () => window.getComputedStyle($roleName);
    return { getRoleName, getRoleStyle };

};
