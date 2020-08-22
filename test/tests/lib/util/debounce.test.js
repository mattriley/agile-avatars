module.exports = ({ test, src }) => {

    test('debounce is zero', t => {
        const foo = () => {
            t.pass();
            t.end();
        };

        src.lib.util.debounce(foo, 0)();        
    });

    test('debounce is greater than zero', t => {
        const foo = () => {
            t.pass();
            t.end();
        };

        src.lib.util.debounce(foo, 1)();        
    });

};