import Route from '@ember/routing/route';

export default Route.extend({

    beforeModel() {
        if (this.get('Core.auth.loggedIn')) {
            this.transitionTo('index');
        } else {
            this.get('Core').query(null, 'auth', 'post').then(function (data) {
                if (data.success) {
                    this.get('Core.auth').loginSuccess(data);
                } else {
                    this.transitionTo('login');
                }
            }.bind(this),
                function () {
                    this.transitionTo('login');
                }.bind(this));
        }
    }

});
