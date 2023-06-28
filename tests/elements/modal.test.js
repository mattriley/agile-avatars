export default ({ test, assert, helpers }) => ({ compose }) => {

    test('hidden by default', () => {
        const { elements } = compose().modules;
        const $modal = elements.modal();
        helpers.assertBoolClass(assert, $modal, 'visible')(false);
    });

    test('immediately visible', () => {
        const { elements } = compose().modules;
        const $modal = elements.modal({ visible: true });
        helpers.assertBoolClass(assert, $modal, 'visible')(true);
    });

    test('visible by callback', () => {
        const { elements } = compose().modules;

        const onVisibilityChange = (setVisible, $modal) => {
            setVisible(true);
            helpers.assertBoolClass(assert, $modal, 'visible')(true);
        };

        elements.modal({ onVisibilityChange });
    });

    test('hidden by callback', () => {
        const { elements } = compose().modules;

        const onVisibilityChange = (setVisible, $modal) => {
            setVisible(false);
            helpers.assertBoolClass(assert, $modal, 'visible')(false);
        };

        elements.modal({ visible: true, onVisibilityChange });
    });

    test('dismissed by clicking dismiss button', async () => {
        await new Promise(resolve => {
            const { elements } = compose().modules;

            const $modal = elements.modal({ visible: true })
                .addEventListener('dismiss', () => {
                    resolve();
                });

            const $dismiss = $modal.querySelector('.dismiss');
            helpers.dispatchEvent('click', $dismiss);
        });
    });

    test('dismissed by clicking overlay', () => {
        return new Promise(resolve => {
            const { elements } = compose().modules;

            const $modal = elements.modal({ visible: true })
                .addEventListener('dismiss', () => {
                    resolve();
                });

            helpers.dispatchEvent('click', $modal);
        });
    });

    test('not dismissed by clicking prompt', () => {
        const { elements } = compose().modules;

        const $modal = elements.modal({ visible: true })
            .addEventListener('dismiss', () => {
                assert.fail();
            });

        helpers.dispatchEvent('click', $modal.querySelector('.modal-prompt'));
    });

    test('title and content', () => {
        const { elements } = compose().modules;
        const title = 'foo';
        const content = 'bar';
        const $modal = elements.modal({ title, content, visible: true });
        const $title = $modal.querySelector('.modal-title');
        const $content = $modal.querySelector('.modal-content');
        assert.equal($title.textContent, title);
        assert.equal($content.textContent, content);
    });

};
