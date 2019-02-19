import Component from '@ember/component';
import { later } from '@ember/runloop';

export default Component.extend({

    text: '',
    caption: 'Внимание!',
    show: false,

    didInsertElement() {
        later(this, 'showMessage', 100)
    },

    showMessage() {
        this.set('show', true);
    },

    close() {
        this.get('Core').deleteMessage(this.text);
    },

    actions: {
        close() {
            this.set('show', false);
            later(this, 'close', 700);
        }
    }

});
