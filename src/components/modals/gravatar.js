module.exports = ({ components }) => () => {

    return components.modal({ 
        name: 'gravatar', 
        title: components.gravatar.title(),
        content: components.gravatar.content(),         
        actions: components.gravatar.actions()
    });
    
};
