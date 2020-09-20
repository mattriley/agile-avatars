module.exports = ({ config }) => (roleData, randomColor) => {
    
    const roleName = (roleData.roleName ?? '').trim().toUpperCase();
    const presetColor = config.roles.presetColors[roleData.roleName];
    const color = presetColor ?? roleData.color ?? randomColor;
    return { ...roleData, roleName, color };

};
