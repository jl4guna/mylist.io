import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['input_text'],

    tagName: 'span',

    doubleClick: function() {
        this.set('isEditing', true);
    },

    focusOut: function() {
        this.set('isEditing', false);
    },

    keyUp: function(event) {
        if (event.keyCode === 13 || event.keyCode === 27) {
            this.set('isEditing', false);
        }
    }
});
