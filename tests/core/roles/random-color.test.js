module.exports = ({ test, boot }) => {

    test('generates a random color', t => {
        const { core } = boot();
        const color = core.roles.randomColor(0.3815);
        t.equal(color, '#61a9fb');        
    });

};
