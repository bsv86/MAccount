import DS from 'ember-data';

export default DS.Model.extend({
    номер: DS.attr('string'),
    адресосмотра: DS.attr('string'),
    клиент_descr: DS.attr('string'),
    датаосмотра: DS.attr('date')
});
