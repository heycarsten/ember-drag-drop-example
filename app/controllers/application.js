import Em from 'ember';

export default Em.Controller.extend({
  year: function() {
    return new Date().getFullYear();
  }.property()
});
