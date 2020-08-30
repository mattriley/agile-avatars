module.exports = ({ test, src }) => {

    test('debounce is zero', async () => {
        await new Promise(resolve => {
            const foo = () => {
                resolve();
            };

            src.lib.util.debounce(foo, 0)();   
        });     
    });

    test('debounce is greater than zero', async () => {
        await new Promise(resolve => {
            const foo = () => {
                resolve();
            };
    
            src.lib.util.debounce(foo, 1)(); 
        });
             
    });

};