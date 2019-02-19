import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({

    store: inject('store'),
    placeholder: 'Выберите значение',
    value: null,
    list: null,
    show: false,
    variant: 'select',
    realValue: null,

    didReceiveAttrs() {
        if (this.get('value.content')) {
            this.set('realValue', this.value.content);
        } else {
            this.set('realValue', this.value);
        }
    },

    actions: {

        toggleDropdown() {
            this.toggleProperty('show');
        },

        selectValue(selectedValue) {
            this.set('value', selectedValue);
            this.set('show', false);
        },

        selectID(id) {
            this.set('value', this.store.peekRecord(this.list.modelName, id));
            this.set('show', false);
        }
    }
});
