import Em from 'ember';

// Resources:
//
// https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/SafariJSProgTopics/Tasks/DragAndDrop.html#//apple_ref/doc/uid/30001233-BAJGJJAH
// https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Drag_and_drop
// https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Drag_operations
// http://msdn.microsoft.com/en-us/library/ie/hh673539(v=vs.85).aspx
// http://www.w3.org/html/wg/drafts/html/master/editing.html
// http://www.thecssninja.com/talks/dnd_and_friends/
// http://drafts.htmlwg.org/html/CR/editing.html#dnd
// http://caniuse.com/dragndrop
//
export default Em.Component.extend({
  tagName:           'li',
  attributeBindings: 'draggable',
  model:             null,
  isHavingEncounter: false,
  effect:            'copy',
  dragzone:          Em.computed.alias('parentView'),
  isDraggable:       Em.computed.alias('parentView.enabled'),
  lock:              null,

  classNameBindings: [
    'isDraggable:draggable',
    'isHavingEncounter:having-encounter',
    'isBeingDragged:being-dragged'
  ],

  draggable: function() {
    return this.get('isDraggable') ? 'true' : null;
  }.property('isDraggable'),

  didStartDragging: function(event) {
    var effect;
    var elementId = this.get('elementId');

    if (effect = this.get('effect')) {
      event.dataTransfer.effectAllowed = effect;
    }

    // You can call setData multiple times with different MIME types, this is
    // useful if your users will need to drag stuff off the page and onto their
    // desktop. text/csv, text/x-vcard, feel me? However, keep in mind that the
    // fancier you get, the more likely your stuff won't work on every browser.
    // For example, IE only understands "Text" and "URL" at the time of this
    // writing.
    //
    // All we really need is to store something to remember this draggable node,
    // once we can look it up we can get everything else that we need. So let's
    // just store the DOM ID as plain text.
    event.dataTransfer.setData('text', elementId);

    this.set('isBeingDragged', true);
  }.on('dragStart'),

  didStopDragging: function() {
    //this.set('isBeingDragged', false);
  }.on('dragEnd'),

  didStartDraggableEncounter: function(event) {
    // Hilariously there is a default dragover event and if we don't cancel it,
    // our stuff won't work.
    event.preventDefault();
    this.set('isHavingEncounter', true);
  }.on('dragOver'),

  didFinishDraggableEncounter: function() {
    this.set('isHavingEncounter', false);
  }.on('dragLeave'),

  didAcceptDroppable: function(event) {
    var srcId    = event.dataTransfer.getData('text');
    var destId   = this.get('elementId');
    var dragzone = this.get('dragzone');

    this.set('isHavingEncounter', false);

    if ((srcId && destId) && srcId !== destId) {
      dragzone.send('swapDraggableIds', srcId, destId);
    }
  }.on('drop'),

  didInsertElement: function() {
    this.get('dragzone').addDraggable(this);
  },

  willDestroyElement: function() {
    this.get('dragzone').removeDraggable(this);
  }
});
