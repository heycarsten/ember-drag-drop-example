import Em from 'ember';

export default Em.Object.extend({
  id:       null,
  sequence: null,

  url: function() {
    return `/images/bebes/${this.get('id')}.jpg`;
  }.property('id')
});