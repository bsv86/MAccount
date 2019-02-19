import DS from 'ember-data';

export default DS.Model.extend({
    наименование: DS.attr('string'),
    логин: DS.attr('string'),
    пароль: DS.attr('string'),
    папка: DS.belongsTo('catalog-папки'),
    город: DS.belongsTo('catalog-города')
});
