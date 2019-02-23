import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | managers-data', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:managers-data');
    assert.ok(route);
  });
});
