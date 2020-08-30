module.exports = ({ test, boot }) => {

    test('debounce is zero', async () => {
        const { lib } = boot();
        await new Promise(resolve => {
            const foo = () => {
                resolve();
            };

            lib.util.debounce(foo, 0)();   
        });     
    });

    test('debounce is greater than zero', async () => {
        const { lib } = boot();
        await new Promise(resolve => {
            const foo = () => {
                resolve();
            };
    
            lib.util.debounce(foo, 1)(); 
        });
             
    });

};