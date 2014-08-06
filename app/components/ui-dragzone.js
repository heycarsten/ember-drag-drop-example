import Em from 'ember';

export default Em.Component.extend({
  tagName:    'ol',
  enabled:    true,
  classNames: 'ui-drag-zone',
  classNameBindings: 'enabled:dragging-on:dragging-off',

  registerDraggable: function(draggable) {

  }
});
