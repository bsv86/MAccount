import Controller from '@ember/controller';

export default Controller.extend({

    foldersCountNO: 0,
    foldersCount: 0,

    actions: {

        saveData(type, field) {

            if (!field) {
                this.Core.addMessage('Не указано количество папок', '', 'red');
                return;
            }

            this.Core.query(null, 'saveManagersData', 'post', { type: type, foldersCount: field, folder: this.get('Core.folder') }).then(
                function () {
                    this.Core.addMessage('Папки по судебным делам записаны!', false, 'green');
                }.bind(this),
                function () {
                    this.Core.addMessage('Произошла ошибка. Данные не сохранены!', '', 'red');
                }.bind(this)
            );

        }

    }

});
