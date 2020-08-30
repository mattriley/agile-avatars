module.exports = ({ test, boot }) => {

    test('generated a random color', t => {
        const io = { random: () => 0.3815 };
        const { services } = boot({ io });
        const color = services.roles.randomColor();
        t.same(color, '#61a9fb');
        
    });

};