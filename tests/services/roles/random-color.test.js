module.exports = ({ test, boot }) => {

    test('generates a random color', t => {
        const io = { random: () => 0.3815 };
        const { services } = boot({ io });
        const color = services.roles.randomColor();
        t.equal(color, '#61a9fb');        
    });

};
