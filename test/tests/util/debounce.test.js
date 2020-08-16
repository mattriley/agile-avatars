module.exports = ({ test, boot }) => {

    test('debounce is zero', t => {
        const { util } = boot({
            config: {
                debounce: { foo: 0 }
            }
        });

        const foo = () => {
            t.pass();
            t.end();
        };

        util.debounce(foo, 'foo')();        
    });

    test('debounce is greater than zero', t => {
        const { util } = boot({
            config: {
                debounce: { foo: 1 }
            }
        });

        const foo = () => {
            t.pass();
            t.end();
        };

        util.debounce(foo, 'foo')();        
    });

};