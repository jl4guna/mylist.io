import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'http://api.mylist.io',

    namespace: 'v1',

    shouldReloadAll: function shouldReloadAll(store, snapshot) {
        return !store.peekAll(snapshot.type.modelName).length;
    }
});
