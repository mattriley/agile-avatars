export default ({ test }) => ({ compose }) => {

    test('debounce is zero', async () => {
        const { util } = compose().modules;
        await new Promise(resolve => {
            const foo = () => {
                resolve();
            };

            util.debounce(foo, 0)();
        });
    });

    test('debounce is greater than zero', async () => {
        const { util } = compose().modules;
        await new Promise(resolve => {
            const foo = () => {
                resolve();
            };

            util.debounce(foo, 1)();
        });

    });

};
