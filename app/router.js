import Em from 'ember';

var Router = Em.Router.extend({
  location: DraglyIOENV.locationType
});

Router.map(function() {
  this.route('tile-sort');
  this.route('list-sort');
  this.route('bucket-sort');
});

export default Router;
