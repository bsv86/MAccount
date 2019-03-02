import Route from '@ember/routing/route';

export default Route.extend({

    beforeModel(transition) {
        this.get('Core.auth').checkAuth(transition);
    },

    model(params) {
        let record = this.store.peekRecord('document-независимаяоценка', params.id);
        if (record) { return record; } else { return this.store.findRecord('document-независимаяоценка', params.id); }
    }

});
