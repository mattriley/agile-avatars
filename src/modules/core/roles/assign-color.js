export default ({ core, constants }) => randomNumber => roleData => {

    const presetColor = constants.roles.presetColors[roleData.roleName];
    const randomColor = core.roles.randomColor(randomNumber);
    const color = presetColor || roleData.color || randomColor;
    return { ...roleData, color };

};
