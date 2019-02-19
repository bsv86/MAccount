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
});

export default Router;
