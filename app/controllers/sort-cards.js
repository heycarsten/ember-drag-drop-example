import Em from 'ember';

export default Em.ArrayController.extend({
  bebesSorting: ['sequence'],
  sortedBebes: Em.computed.sort('@this', 'bebesSorting'),

  actions: {
    swapBebes: function(srcBebe, destBebe) {
      console.log('moving', srcBebe);
      console.log('to', destBebe);
    }
  }
});
