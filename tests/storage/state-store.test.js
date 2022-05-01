export default ({ setup, test }) => {

    // const { stateStore } = modules.composition.target.storage;


    test('insert increments id by 1', t => {
        const { compose } = setup();
        const { stateStore } = compose().composition.target.storage;
        const store = stateStore({});
        const data = { foo: 'bar' };
        const id1 = store.insert(data);
        t.equal(id1, 1);
        const id2 = store.insert(data);
        t.equal(id2, 2);

    });

    test('insert then get state', t => {
        const { compose } = setup();
        const { stateStore } = compose().composition.target.storage;
        const store = stateStore({});
        const data = { foo: 'bar' };
        const id = store.insert(data);
        const state = store.find(id);
        t.same(state, { id: 1, foo: 'bar' });

    });

    test('insert then set state', t => {
        const { compose } = setup();
        const { stateStore } = compose().composition.target.storage;
        const store = stateStore({});
        const data = { foo: 'bar' };
        const id = store.insert(data);
        store.update(id, { foo: 'boo', baz: 'qux' });
        const state = store.find(id);
        t.same(state, { id: 1, foo: 'boo', baz: 'qux' });

    });

    test('insert emits insert event and inserted item can be found', t => {
        const { compose } = setup();
        const { stateStore } = compose().composition.target.storage;
        const store = stateStore({});

        store.subscriptions.onInsert(id => {
            const state = store.find(id);
            t.same(state, { id: 1, foo: 'bar' });

        });

        const data = { foo: 'bar' };
        store.insert(data);
    });

    test('insert callback invoked before insert event emitted', t => {
        const { compose } = setup();
        const { stateStore } = compose().composition.target.storage;
        const store = stateStore({});

        let callbackInvoked = false;

        store.subscriptions.onInsert(() => {
            t.ok(callbackInvoked);

        });

        const data = { foo: 'bar' };

        store.insert(data, id => {
            const state = store.find(id);
            t.same(state, { id: 1, foo: 'bar' });
            callbackInvoked = true;
        });
    });

    test('insert then remove', t => {
        const { compose } = setup();
        const { stateStore } = compose().composition.target.storage;
        const store = stateStore({});
        const data = { foo: 'bar' };
        const id = store.insert(data);
        store.remove(id);
        const state = store.find(id);
        t.equal(state, null);

    });

    test('before remove emitted before removing', t => {
        const { compose } = setup();
        const { stateStore } = compose().composition.target.storage;
        const store = stateStore({});

        store.subscriptions.onBeforeRemove(id => {
            const state = store.find(id);
            t.same(state, { id: 1, foo: 'bar' });

        });

        const data = { foo: 'bar' };

        const id = store.insert(data);
        store.remove(id);
    });

    test('onChangeAny is emitted when any item is changed', t => {
        const { compose } = setup();
        const { stateStore } = compose().composition.target.storage;
        const store = stateStore({});

        const data = { foo: 'bar' };
        const id = store.insert(data);

        store.subscriptions.onChangeAny('foo', () => {
            const state = store.find(id);
            t.same(state, { id: 1, foo: 'boo' });

        });

        store.update(id, { foo: 'boo' });
    });

};

