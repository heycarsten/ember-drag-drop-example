import Em from 'ember';

export default Em.ArrayController.extend({
  bebesSorting: ['seq'],
  sortedBebes: Em.computed.sort('@this', 'bebesSorting')
});
