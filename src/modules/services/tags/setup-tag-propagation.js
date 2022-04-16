export default ({ stores }) => tagId => () => {

    const { tagName, instances } = stores.tags.find(tagId);
    instances.forEach(id => stores.tagInstances.update(id, { tagName }));

};
