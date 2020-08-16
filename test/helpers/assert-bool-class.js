module.exports = () => (t, target, className, bool) => {

    t.true(target.classList.contains(`${className}-${bool}`));
    t.false(target.classList.contains(`${className}-${!bool}`));

};