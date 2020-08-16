module.exports = ({ helpers }) => $roleList => {

    const roleCustomisers = $roleList.querySelectorAll('.role-customiser');
    return Array.from(roleCustomisers).map(helpers.getRole);
    
};
