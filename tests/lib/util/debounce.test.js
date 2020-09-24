module.exports = ({ test, boot }) => {

    test('debounce is zero', async () => {
        const { util } = boot();
        await new Promise(resolve => {
            const foo = () => {
                resolve();
            };

            util.debounce(foo, 0)();   
        });     
    });

    test('debounce is greater than zero', async () => {
        const { util } = boot();
        await new Promise(resolve => {
            const foo = () => {
                resolve();
            };
    
            util.debounce(foo, 1)(); 
        });
             
    });

};