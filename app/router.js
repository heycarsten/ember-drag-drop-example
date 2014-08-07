import Em from 'ember';

var Router = Em.Router.extend({
  location: DraglyIOENV.locationType
});

Router.map(function() {
  this.route('sort-cards', { path: '/sort/cards' });
  this.route('sort-list', { path: '/sort/list' });
});

export default Router;
