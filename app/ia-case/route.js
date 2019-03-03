import Route from '@ember/routing/route';

export default Route.extend({

    beforeModel(transition) {
        this.get('Core.auth').checkAuth(transition);
    },

    model(params) {
        return this.store.peekRecord('document-независимаяоценка', params.id) || this.store.findRecord('document-независимаяоценка', params.id);
    }

});
