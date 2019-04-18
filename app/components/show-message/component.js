import Component from '@ember/component';
import { later } from '@ember/runloop';
import { cancel } from '@ember/runloop';

export default Component.extend({

    text: '',
    caption: '',
    show: false,
    className: '',
    closerOnWait: null,

    didInsertElement() {
        later(this, 'showMessage', 100)
    },

    showMessage() {
        this.set('show', true);
        this.set('closerOnWait', later(this, 'closeOnWait', 2500));
    },

    closeOnWait() {
        this.set('show', false);
        later(this, 'close', 700);
    },

    close() {
        this.Core.deleteMessage(this.text);
    },

    actions: {
        close() {
            cancel(this.closerOnWait);
            this.set('show', false);
            later(this, 'close', 700);
        }
    }

});
