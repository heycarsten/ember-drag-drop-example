import Em from 'ember';

export default Em.Object.extend({
  id:  null,
  seq: null,

  name: function() {
    return this.get('id').capitalize();
  }.property('id'),

  url: function() {
    return `/images/bebes/${this.get('id')}.jpg`;
  }.property('id')
});
