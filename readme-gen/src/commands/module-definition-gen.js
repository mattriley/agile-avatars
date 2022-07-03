module.exports = ({ services }) => async () => {

    const include = ['subscriptions', 'components', 'elements', 'styles', 'ui', , 'io', 'services', 'core', 'stores', 'window'];
    const definition = await services.renderModuleDefinition({ include });
    console.log(definition);
    
};
