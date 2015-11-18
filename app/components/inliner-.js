import Ember from 'ember';

var timeout;
var lastTap = 0;

export default Ember.Component.extend({
    classNames: ['input_text'],

    tagName: 'span',

    touchEnd: function() {
        let currentTime = new Date().getTime();
        let tapLength = currentTime - lastTap;

        clearTimeout(timeout);

        if (tapLength < 500 && tapLength > 0) {
            this.set('isEditing', true);
            event.preventDefault();
        } else {
            timeout = setTimeout(function() {
                clearTimeout(timeout);
            }, 500);
        }

        lastTap = currentTime;
    },

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