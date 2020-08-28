module.exports = ({ stores, settings }) => {

    const getSub = targets => {
        return Object.entries(targets).reduce((acc, [name, { subscriptions }]) => {
            return Object.assign(acc, { [name]: subscriptions });
        }, {});
    };

    return { ...getSub(stores), settings: getSub(settings) };

};
