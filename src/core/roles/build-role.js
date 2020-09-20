module.exports = ({ core, config }) => (roleData, randomNumber) => {
    
    const roleName = (roleData.roleName ?? '').trim().toUpperCase();
    const presetColor = config.roles.presetColors[roleData.roleName];
    const randomColor = core.roles.randomColor(randomNumber);
    const color = presetColor ?? roleData.color ?? randomColor;
    return { ...roleData, roleName, color };

};
