export default ({ test, assert }) => ({ compose }) => {

    // const { stateStore } = modules.composition.target.storage;


    test('insert increments id by 1', () => {
        const { stateStore } = compose().target.storage;
        const store = stateStore({});
        const data = { foo: 'bar' };
        const id1 = store.insert(data);
        assert.equal(id1, 1);
        const id2 = store.insert(data);
        assert.equal(id2, 2);

    });

    test('insert then get state', () => {
        const { stateStore } = compose().target.storage;
        const store = stateStore({});
        const data = { foo: 'bar' };
        const id = store.insert(data);
        const state = store.find(id);
        assert.deepEqual(state, { id: 1, foo: 'bar' });

    });

    test('insert then set state', () => {
        const { stateStore } = compose().target.storage;
        const store = stateStore({});
        const data = { foo: 'bar' };
        const id = store.insert(data);
        store.update(id, { foo: 'boo', baz: 'qux' });
        const state = store.find(id);
        assert.deepEqual(state, { id: 1, foo: 'boo', baz: 'qux' });

    });

    test('insert emits insert event and inserted item can be found', () => {
        const { stateStore } = compose().target.storage;
        const store = stateStore({});

        store.subscriptions.onInsert(id => {
            const state = store.find(id);
            assert.deepEqual(state, { id: 1, foo: 'bar' });

        });

        const data = { foo: 'bar' };
        store.insert(data);
    });

    test('insert callback invoked before insert event emitted', () => {
        const { stateStore } = compose().target.storage;
        const store = stateStore({});

        let callbackInvoked = false;

        store.subscriptions.onInsert(() => {
            assert(callbackInvoked);

        });

        const data = { foo: 'bar' };

        store.insert(data, id => {
            const state = store.find(id);
            assert.deepEqual(state, { id: 1, foo: 'bar' });
            callbackInvoked = true;
        });
    });

    test('insert then remove', () => {
        const { stateStore } = compose().target.storage;
        const store = stateStore({});
        const data = { foo: 'bar' };
        const id = store.insert(data);
        store.remove(id);
        const state = store.find(id);
        assert.deepEqual(state, null);

    });

    test('before remove emitted before removing', () => {
        const { stateStore } = compose().target.storage;
        const store = stateStore({});

        store.subscriptions.onBeforeRemove(id => {
            const state = store.find(id);
            assert.deepEqual(state, { id: 1, foo: 'bar' });

        });

        const data = { foo: 'bar' };

        const id = store.insert(data);
        store.remove(id);
    });

    test('onChangeAny is emitted when any item is changed', () => {
        const { stateStore } = compose().target.storage;
        const store = stateStore({});

        const data = { foo: 'bar' };
        const id = store.insert(data);

        store.subscriptions.onChangeAny('foo', () => {
            const state = store.find(id);
            assert.deepEqual(state, { id: 1, foo: 'boo' });

        });

        store.update(id, { foo: 'boo' });
    });

};

