import Controller from '@ember/controller';

export default Controller.extend({

    users: null,
    folders: null,
    currentUser: null,
    cities: null,

    loadData() {

        this.store.findAll('catalog-города').then(
            function (data) { this.set('cities', data); }.bind(this),
            function () { this.Core.addMessage('Произошла ошибка!', '', 'red'); }.bind(this)
        );

        this.store.findAll('catalog-папки').then(function (data) {
            this.set('folders', data);
        }.bind(this));

        this.store.findAll('catalog-пользователи').then(function (data) {
            this.set('users', data);
        }.bind(this));

    },

    actions: {

        selectUser(user) {
            this.set('currentUser', user);
        },

        createUser() {
            this.set('currentUser', this.store.createRecord('catalog-пользователи'));
        },

        saveCurrentUser() {

            if (!this.get('currentUser.наименование')) {
                this.Core.addMessage('Не заполнено ФИО');
                return;
            }

            if (!this.get('currentUser.логин')) {
                this.Core.addMessage('Не заполнен логин');
                return;
            }

            if (!this.get('currentUser.пароль')) {
                this.Core.addMessage('Не заполнено ФИО');
                return;
            }

            if (!this.get('currentUser.папка.id')) {
                this.Core.addMessage('Не заполнена папка');
                return;
            }

            if (!this.get('currentUser.город.id')) {
                this.Core.addMessage('Не заполнен город');
                return;
            }

            this.currentUser.save().then(
                function () { this.Core.addMessage('Данные сохранены!', false, 'green'); }.bind(this),
                function () { this.Core.addMessage('Произошла ошибка. Данные не сохранены!', '', 'red'); }.bind(this)
            );
        }

    }

});
