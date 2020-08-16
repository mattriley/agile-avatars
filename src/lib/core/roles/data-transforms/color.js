module.exports = ({ config }) => randomColor => roleData => {

    const preset = config.roles.presetColors[roleData.roleName];
    const color = preset ?? roleData.color ?? randomColor;
    return { ...roleData, color };

};
