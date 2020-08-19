module.exports = ({ stores }) => tagId => () => {

    const { tagName, instances } = stores.tags.getState(tagId);
    const changes = { tagName };
    instances.forEach(id => stores.tagInstances.setState(id, changes));
    
};
