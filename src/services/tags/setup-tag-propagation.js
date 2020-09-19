module.exports = ({ stores }) => tagId => () => {

    const { tagName, instances } = stores.tags.find(tagId);
    const changes = { tagName };
    instances.forEach(id => stores.tagInstances.update(id, changes));
    
};
