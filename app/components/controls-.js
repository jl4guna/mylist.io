import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['controls-'],

    tagName: 'span',

    areSaveAndRestoreDisabled: Ember.computed.not('todo.hasDirtyAttributes'),

    actions: {
        delete: function() {
            let todo = this.get('todo');
            this.get('delete')(todo);
        },

        restore: function() {
            let todo = this.get('todo');
            this.get('restore')(todo);
        },

        save: function() {
            let todo = this.get('todo');
            this.get('save')(todo);
        },
    }
});
