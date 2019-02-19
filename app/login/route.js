import Route from '@ember/routing/route';

export default Route.extend({

    beforeModel() {
        if (this.get('Core.auth.loggedIn')) {
            this.transitionTo('index');
        }

    }

});
