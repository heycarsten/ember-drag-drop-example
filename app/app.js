import Em from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Em.MODEL_FACTORY_INJECTIONS = true;

var App = Em.Application.extend({
  modulePrefix: 'dragly-io', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'dragly-io');

export default App;
