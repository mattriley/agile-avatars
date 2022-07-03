module.exports = ({ services }) => async () => {

    const include = ['subscriptions', 'components', 'elements', 'services'];
    const definition = await services.renderModuleDefinition({ include });
    console.log(definition);
    
};
