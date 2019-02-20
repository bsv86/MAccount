import DS from 'ember-data';

export default DS.Model.extend({
    наименование: DS.attr('string'),
    город: DS.belongsTo('catalog-города')
});