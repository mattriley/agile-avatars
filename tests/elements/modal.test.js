export default ({ test, boot, helpers }) => {

    test('hidden by default', t => {
        const { elements } = boot();
        const $modal = elements.modal();
        helpers.assertBoolClass(t, $modal, 'visible')(false);
    });

    test('immediately visible', t => {
        const { elements } = boot();
        const $modal = elements.modal({ visible: true });
        helpers.assertBoolClass(t, $modal, 'visible')(true);
    });

    test('visible by callback', t => {
        const { elements } = boot();

        const onVisibilityChange = (setVisible, $modal) => {
            setVisible(true);
            helpers.assertBoolClass(t, $modal, 'visible')(true);
        };

        elements.modal({ onVisibilityChange });
    });

    test('hidden by callback', t => {
        const { elements } = boot();

        const onVisibilityChange = (setVisible, $modal) => {
            setVisible(false);
            helpers.assertBoolClass(t, $modal, 'visible')(false);
        };

        elements.modal({ visible: true, onVisibilityChange });
    });

    test('dismissed by clicking dismiss button', async () => {
        await new Promise(resolve => {
            const { elements } = boot();

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
            const { elements } = boot();

            const $modal = elements.modal({ visible: true })
                .addEventListener('dismiss', () => {
                    resolve();
                });

            helpers.dispatchEvent('click', $modal);
        });
    });

    test('not dismissed by clicking prompt', t => {
        const { elements } = boot();

        const $modal = elements.modal({ visible: true })
            .addEventListener('dismiss', () => {
                t.fail();
            });

        helpers.dispatchEvent('click', $modal.querySelector('.modal-prompt'));
    });

    test('title and content', t => {
        const { elements } = boot();
        const title = 'foo';
        const content = 'bar';
        const $modal = elements.modal({ title, content, visible: true });
        const $title = $modal.querySelector('.modal-title');
        const $content = $modal.querySelector('.modal-content');
        t.equal($title.textContent, title);
        t.equal($content.textContent, content);
    });

};
