export default (str, index, offset) => {

    return [str.slice(0, index), str.slice(index + offset)];

};
