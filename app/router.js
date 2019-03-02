import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('auth');
  this.route('new-lead');
  this.route('login');
  this.route('user-admin');
  this.route('managers-data');
  this.route('planing');
  this.route('ia-case', { path: '/ia/:id' });
});

export default Router;
