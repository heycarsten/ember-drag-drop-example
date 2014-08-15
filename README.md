# HTML5 Drag & Drop and Ember

HTML5 Drag & Drop is pretty cool, it was primarily designed with the idea of
dragging data in and out of the browser, but it can also be used for dragging
elements inside the browser too. It doesn't support locking drags to the x or y
axis, but with some smart CSS you can still provide a pretty great experience
for your users.

## The D-L

DnD accels at moving data in and out of the browser, with the ironic exception
of IE (sadly, yes, even 11), Microsoft having designed the specification in the
first place. Moving _data_ in and out of the browser. I don't show you how to do
that here, but you'll want to look into the
[`dataTransfer`](http://www.w3.org/TR/2011/WD-html5-20110113/dnd.html#the-datatransfer-interface)
property of the `dragstart` and `drop` events, it provides access to any files
and content dropped onto an element you've deemed droppable.

This example shows you how to capture the events in an Ember component, and then
use them to implement swapping items through dragging.

## _Update_

Ryan Florence is working on a series of Ember component mixins for drag and
drop, so once you've poked around this project and had a laugh, I highly
recommend you check it out: [ic-sortable](https://github.com/instructure/ic-sortable).
His implementation is much more robust, has tests, and deals with inserting
items not just swapping, it also adds classes to droppables so that you can show
the user where the insertion will happen. He also deals with validating drops so
that you can ensure your droppables only accept the correct draggables.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit the app at: http://localhost:4200

## Resources

* [Apple Developer](https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/SafariJSProgTopics/Tasks/DragAndDrop.html#//apple_ref/doc/uid/30001233-BAJGJJAH) - Safari Developer reference for Drag and Drop API
* [Drag and Drop](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Drag_and_drop) - MDN article on Drag and Drop
* [Drag Operations](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Drag_operations) - MDN article about drag operations
* [MSDN](http://msdn.microsoft.com/en-us/library/ie/hh673539.aspx) - Drag and Drop in Internet Explorer
* [The CSS Ninja](http://www.thecssninja.com/talks/dnd_and_friends/) - Blog article
* [W3C HTML5 Draft](http://drafts.htmlwg.org/html/CR/editing.html#dnd) - The actual working spec for HTML5 DND
* [Can I Use?](http://caniuse.com/dragndrop) - Browser support
