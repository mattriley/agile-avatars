export default ({ core, config }) => randomNumber => roleData => {

    const presetColor = config.roles.presetColors[roleData.roleName];
    const randomColor = core.roles.randomColor(randomNumber);
    const color = presetColor || roleData.color || randomColor;
    return { ...roleData, color };

};
