export default () => (assert, target, className) => bool => {

    assert.ok(target.classList.contains(`${className}-${bool}`));
    assert.ok(!target.classList.contains(`${className}-${!bool}`));

};
