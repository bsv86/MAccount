import Controller from '@ember/controller';
import { observer } from '@ember/object';
import { set } from '@ember/object';

export default Controller.extend({

    reportDate: '',
    reportData: null,
    onChangeDates: observer('reportDate', function () {
        this.loadReport();
    }),

    init() {
        this._super(...arguments);
        this.initDate();
    },

    loadReport() {

        this.initDate();

        this.get('Core').query(null, 'getPlaning', 'post', { 'date': this.reportDate }).then(
            function (data) {
                this.set('reportData', data);
            }.bind(this),
            function () {
                this.get('Core').addMessage('Произошла ошибка!', '', 'red');
            }.bind(this)
        );
    },

    initDate() {
        if (!this.reportDate) {
            let curDate = new Date;
            this.set('reportDate', curDate.toISOString().slice(0, 10));
        }
    },

    actions: {
        showName(data) {
            set(data, 'showName', !data.showName);
        }
    }

});