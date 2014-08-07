import Em from 'ember';

export default Em.ArrayController.extend({
  bebesSorting: ['seq'],
  sortedBebes: Em.computed.sort('@this', 'bebesSorting'),

  actions: {
    swapBebes: function(srcBebe, destBebe) {
      var srcSeq  = srcBebe.get('seq');
      var destSeq = destBebe.get('seq');

      destBebe.set('seq', srcSeq);
      srcBebe.set('seq', destSeq);
    }
  }
});
