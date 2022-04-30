export default () => (t, target, className) => bool => {

    t.ok(target.classList.contains(`${className}-${bool}`));
    t.notOk(target.classList.contains(`${className}-${!bool}`));

};
