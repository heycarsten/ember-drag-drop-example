import Em from 'ember';

export default Em.Route.extend({
  activate: function() {
    Em.$('body').addClass('index');
  },

  deactivate: function() {
    Em.$('body').removeClass('index');
  }
});
