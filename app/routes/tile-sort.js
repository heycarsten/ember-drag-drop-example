import Em from 'ember';
import Bebe from 'dragly-io/models/bebe';

var BEBES = [
  Bebe.create({ id: 'sheep',    seq: 0 }),
  Bebe.create({ id: 'seal',     seq: 1 }),
  Bebe.create({ id: 'raccoon',  seq: 2 }),
  Bebe.create({ id: 'puppy',    seq: 3 }),
  Bebe.create({ id: 'piglet',   seq: 4 }),
  Bebe.create({ id: 'moose',    seq: 5 }),
  Bebe.create({ id: 'lion',     seq: 6 }),
  Bebe.create({ id: 'koala',    seq: 7 }),
  Bebe.create({ id: 'kitten',   seq: 8 }),
  Bebe.create({ id: 'duckling', seq: 9 }),
  Bebe.create({ id: 'deer',     seq: 10 }),
  Bebe.create({ id: 'chipmunk', seq: 11 }),
  Bebe.create({ id: 'bunny',    seq: 12 }),
  Bebe.create({ id: 'bear',     seq: 13 })
];

export default Em.Route.extend({
  model: function() {
    return BEBES;
  }
});
