import Em from 'ember';

export default Em.Component.extend({
  tagName:    'ol',
  enabled:    true,
  classNames: 'ui-drag-zone',
  classNameBindings: 'enabled:dragging-on:dragging-off',

  actions: {
    swapDraggableIds: function(srcId, destId) {
      var src  = this.lookupDraggable(srcId).get('model');
      var dest = this.lookupDraggable(destId).get('model');

      this.sendAction('swap', src, dest);
    }
  },

  initDraggables: function() {
    this.set('draggables', {});
  }.on('init'),

  addDraggable: function(draggable) {
    var elementId = draggable.get('elementId');
    this.get('draggables')[elementId] = draggable;
  },

  removeDraggable: function(draggable) {
    var elementId = draggable.get('elementId');
    this.get('draggables')[elementId] = undefined;
  },

  lookupDraggable: function(elementId) {
    return this.get('draggables')[elementId];
  }
});
