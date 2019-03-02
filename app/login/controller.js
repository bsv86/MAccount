import Controller from '@ember/controller';

export default Controller.extend({

    username: '',
    password: '',

    actions: {
        login() {

            this.get('Core.auth').tryToLogin(this.username, this.password).then(function (data) {
                if (data.success) {
                    this.set('loginFailure', false);
                    this.set('errorText', '');
                    this.set('password', '');
                    this.get('Core.auth').loginSuccess(data);
                } else {
                    this.Core.addMessage('Неправильный логин или пароль', '', 'red');
                }
            }.bind(this));

        }
    }

});
