import Route from '@ember/routing/route';

export default Route.extend({

    beforeModel(transition) {
        this.get('Core.auth').checkAuth(transition);
    }

});
