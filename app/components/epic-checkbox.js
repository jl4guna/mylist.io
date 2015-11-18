import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['epic-checkbox'],

    tagName: 'span',

    click: function() {
        this.toggleProperty('value');
    }
});
