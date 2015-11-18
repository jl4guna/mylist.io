import Ember from 'ember';

export default Ember.TextField.extend({
    attributeBindings: ['length', 'value'],

    didInsertElement: function() {
        this.$().characterCounter().focus();
    },

    willDestroyElement: function() {
        Ember.$('.character-counter').remove();
    }
});