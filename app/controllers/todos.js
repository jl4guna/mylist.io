import Ember from 'ember';

export default Ember.Controller.extend({
    dirtyItems: Ember.computed.filterBy('model', 'hasDirtyAttributes', true),

    areDirtyItems: Ember.computed.empty('dirtyItems'),

    deleteItem: function(item) {
        item.destroyRecord();
    },

    restoreItem: function(item) {
        item.rollbackAttributes();
    },

    saveItem: function(item) {
        item.save();
    },

    actions: {
        add: function() {
            let newTodo = this.get('store').createRecord('todo', {
                isEditing: true
            });
            this.get('model').addObjects(newTodo);
        },

        restoreAll: function() {
            this.get('model').forEach(item => {
                item.rollbackAttributes();
            });
        },

        saveAll: function() {
            this.get('model').forEach(item => {
                item.save();
            });
        }
    }
});