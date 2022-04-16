export default (obj, mapper) => {

    return Object.entries(obj).reduce((acc, [key, val]) => {
        return Object.assign(acc, { [key]: mapper(val) });
    }, {});

};
