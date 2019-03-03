import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
    Номер: DS.attr('string'),
    АдресОсмотра: DS.attr('string'),
    Клиент_descr: DS.attr('string'),
    ДатаОсмотра: DS.attr('date'),
    МаркаАвто: DS.attr('string'),
    НомерАвто: DS.attr('string'),
    ДатаОсмотраFormat: computed('ДатаОсмотра', function () {
        return this.ДатаОсмотра.toLocaleString(); 
    })
});
