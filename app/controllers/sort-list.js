import Em from 'ember';

export default Em.ArrayController.extend({
  needs: 'bebes',
  content: Em.computed.alias('controllers.bebes.sortedBebes'),

  actions: {
    swapBebes: function(srcBebe, destBebe) {
      var srcSeq  = srcBebe.get('seq');
      var destSeq = destBebe.get('seq');

      destBebe.set('seq', srcSeq);
      srcBebe.set('seq', destSeq);
    }
  }
});
