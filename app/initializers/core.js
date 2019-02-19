export function initialize(application) {
  application.inject('route', 'Core', 'service:core');
  application.inject('controller', 'Core', 'service:core');
  application.inject('component', 'Core', 'service:core');
  application.inject('adapter', 'Core', 'service:core');
}

export default {
  name: 'core',
  initialize
};
