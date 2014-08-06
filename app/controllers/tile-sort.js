import Em from 'ember';

export default Em.ArrayController.extend({
  bebesSorting: ['sequence'],
  sortedBebes: Em.computed.sort('@this', 'bebesSorting')
});
