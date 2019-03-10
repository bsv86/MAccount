import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({

    store: inject('store'),
    placeholder: 'Выберите значение',
    value: null,
    list: null, // список выбора
    isRef: true, // это ссылка

    didReceiveAttrs() {
        this.set('isRef', this.get('value.then') != undefined);
    },

    actions: {

        selectValue(value) {
            this.set('value', this.isRef && this.store.peekRecord(this.list.modelName, value) || value);
        }

    }
});
