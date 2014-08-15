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
