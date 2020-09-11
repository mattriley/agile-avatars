module.exports = ({ stores }) => {

    return Object.entries(stores).reduce((acc, [name, { subscriptions }]) => {
        return Object.assign(acc, { [name]: subscriptions });
    }, {});
    
};
