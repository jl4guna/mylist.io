export default DS.RESTAdapter.extend({
    host: 'http://127.0.0.1:3000',
    namespace: 'api',
    shouldReloadAll: function shouldReloadAll(store, snapshot) {
        return !store.peekAll(snapshot.type.modelName).length
    }
});
