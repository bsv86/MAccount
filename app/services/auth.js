import Service from '@ember/service';
import { inject } from '@ember/service';

export default Service.extend({

    loggedIn: false,
    core: inject('core'),
    previousTransition: null,
    router: inject('-routing'),

    // При переходе на страницу смотрим аутентифицированы мы или нет.
    // Если нет, то сохраняем ту страницу, на которую хотели перейти
    // и переходим на страницу login
    checkAuth(previousTransition) {

        if (!this.loggedIn) {
            if (previousTransition && previousTransition.targetName != 'auth' && previousTransition.targetName != 'login') { this.set('previousTransition', previousTransition); }
            this.router.transitionTo('auth', []);
        }
        
    },

    // Функция проверки логина и пароля
    tryToLogin(login, password) {
        return this.core.query(null, 'login', 'post', { 'login': login, 'password': password });
    },

    // Аутентификация успешна
    loginSuccess(data) {
        this.set('loggedIn', true);
        this.core.set('username', data.username);
        this.core.set('id', data.id);
        this.core.set('folder', data.folder);
        this.core.set('leadCategories', data.leadCategories);
        this.core.set('administration', data.administration);
        this.goFromLoginPage();
    },

    // Если аутентификация удалась, то переходим на страницу index
    // или на страницу, на которую хотели перейти
    goFromLoginPage() {
        if (this.previousTransition) {
            this.previousTransition.retry();
        } else {
            this.router.transitionTo('index', []);
        }
    },

    logout() {
        this.core.query(null, 'deAuth', 'post').then(function () {
            this.set('loggedIn', false);
            this.core.set('username', '');
            this.core.set('id');
            this.core.set('folder');
            this.core.set('administration');
            this.core.set('leadCategories', []);
            this.router.transitionTo('login', []);
        }.bind(this));
    }

});
