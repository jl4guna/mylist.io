import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
    host: config.host,

    namespace: 'v1',

    shouldReloadAll: function shouldReloadAll(store, snapshot) {
        return !store.peekAll(snapshot.type.modelName).length;
    }
});
