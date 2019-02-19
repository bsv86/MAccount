import Controller from '@ember/controller';

export default Controller.extend({

    userMenu: false,

    actions: {
        logout() {
            this.toggleProperty('userMenu');
            this.get('Core.auth').logout();
        },
        showUserMenu() {
            this.toggleProperty('userMenu');
        }
    }

});
