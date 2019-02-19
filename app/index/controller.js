import Controller from '@ember/controller';
import { later } from '@ember/runloop';
import { cancel } from '@ember/runloop';
import { observer } from '@ember/object';

export default Controller.extend({

    reportFrom: '',
    reportTo: '',
    reportData: null,
    autoLoadReport: false,
    reportLoader: null,
    onChangeDates: observer('reportFrom', 'reportTo', function () {
        this.loadReport();
    }),

    init() {
        this._super(...arguments);

        if (!this.reportFrom) {
            let cureDate = new Date;
            this.set('reportFrom', cureDate.toISOString().slice(0, 10));
            this.set('reportTo', cureDate.toISOString().slice(0, 10));
        }
    },

    startAutoLoadReport() {
        this.set('autoLoadReport', true);
        this.reloadReport();
    },

    stopAutoLoadReport() {
        cancel(this.reportLoader);
        this.set('autoLoadReport', false);
    },

    reloadReport() {
        this.loadReport();
        if (this.autoLoadReport) {
            this.set('reportLoader', later(this, 'reloadReport', 600000));
        }
    },

    loadReport() {
        this.get('Core').query(null, 'getManagersReport', 'post', { 'folder': this.get('Core.folder'), 'from': this.reportFrom, 'to': this.reportTo }).then(
            function (data) {
                this.set('reportData', data);
            }.bind(this),
            function () { this.set('loading', false); }.bind(this)
        );
    }

});
