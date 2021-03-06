import Route from '@ember/routing/route';

export default Route.extend({

    beforeModel(transition) {
        if (transition.targetName != 'auth') {
            this.get('Core.auth').checkAuth(transition);
        }
    }

});
