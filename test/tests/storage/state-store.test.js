module.exports = ({ test, boot }) => {

    test('insert increments id by 1', t => {
        const { storage } = boot();
        const store = storage.stateStore({});
        const data = { foo: 'bar' };
        const id1 = store.insert(data);
        t.equal(id1, 1);
        const id2 = store.insert(data);
        t.equal(id2, 2);
        t.end();
    });

    test('insert then get state', t => {
        const { storage } = boot();
        const store = storage.stateStore({});
        const data = { foo: 'bar' };
        const id = store.insert(data);
        const state = store.getState(id);
        t.same(state, { id: 1, foo: 'bar' });
        t.end();
    });

    test('insert then set state', t => {
        const { storage } = boot();
        const store = storage.stateStore({});
        const data = { foo: 'bar' };
        const id = store.insert(data);
        store.setState(id, { foo: 'boo', baz: 'qux' });
        const state = store.getState(id);
        t.same(state, { id: 1, foo: 'boo', baz: 'qux' });
        t.end();
    });

    test('insert emits insert event and inserted item can be found', t => {
        const { storage } = boot();
        const store = storage.stateStore({});

        store.subscriptions.onInsert(id => {
            const state = store.getState(id);
            t.same(state, { id: 1, foo: 'bar' });
            t.end();
        });

        const data = { foo: 'bar' };
        store.insert(data);
    });

    test('insert callback invoked before insert event emitted', t => {
        const { storage } = boot();
        const store = storage.stateStore({});

        let callbackInvoked = false;

        store.subscriptions.onInsert(() => {
            t.assert(callbackInvoked);
            t.end();
        });

        const data = { foo: 'bar' };

        store.insert(data, id => {
            const state = store.getState(id);
            t.same(state, { id: 1, foo: 'bar' });
            callbackInvoked = true;
        });
    });

    test('insert then remove', t => {
        const { storage } = boot();
        const store = storage.stateStore({});
        const data = { foo: 'bar' };
        const id = store.insert(data);
        store.remove(id);
        const state = store.getState(id);
        t.equal(state, null);
        t.end();
    });

    test('before remove emitted before removing', t => {
        const { storage } = boot();
        const store = storage.stateStore({});

        store.subscriptions.onBeforeRemove(id => {
            const state = store.getState(id);
            t.same(state, { id: 1, foo: 'bar' });
            t.end();
        });

        const data = { foo: 'bar' };

        const id = store.insert(data);
        store.remove(id);
    });

    test('onChangeAny is emitted when any item is changed', t => {
        const { storage } = boot();
        const store = storage.stateStore({});

        const data = { foo: 'bar' };
        const id = store.insert(data);

        store.subscriptions.onChangeAny('foo', () => {
            const state = store.getState(id);
            t.same(state, { id: 1, foo: 'boo' });
            t.end();
        });

        store.setState(id, { foo: 'boo' });
    });

};