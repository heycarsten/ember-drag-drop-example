import Em from 'ember';
import Bebe from 'dragly-io/models/bebe';

var BEBES = [
  Bebe.create({ id: 'sheep',    seq: 1000 }),
  Bebe.create({ id: 'seal',     seq: 2000 }),
  Bebe.create({ id: 'raccoon',  seq: 3000 }),
  Bebe.create({ id: 'puppy',    seq: 4000 }),
  Bebe.create({ id: 'piglet',   seq: 5000 }),
  Bebe.create({ id: 'moose',    seq: 6000 }),
  Bebe.create({ id: 'lion',     seq: 7000 }),
  Bebe.create({ id: 'koala',    seq: 8000 }),
  Bebe.create({ id: 'kitten',   seq: 9000 }),
  Bebe.create({ id: 'duckling', seq: 10000 }),
  Bebe.create({ id: 'deer',     seq: 11000 }),
  Bebe.create({ id: 'chipmunk', seq: 12000 }),
  Bebe.create({ id: 'bunny',    seq: 13000 }),
  Bebe.create({ id: 'bear',     seq: 14000 })
];

export default Em.Route.extend({
  setupController: function() {
    var bebes = this.controllerFor('bebes');
    bebes.set('content', BEBES);
  }
});
