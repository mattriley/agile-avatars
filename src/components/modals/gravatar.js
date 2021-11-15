module.exports = ({ components }) => () => {

    return components.modal({ 
        name: 'gravatar', 
        title: components.gravatar.title(),
        content: components.gravatar.content.container(),         
        actions: components.gravatar.actions.container()
    });
    
};
