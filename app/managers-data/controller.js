import Controller from '@ember/controller';

export default Controller.extend({

    foldersCount: 0,

    actions: {
        saveData() {

            if (!this.foldersCount) {
                this.Core.addMessage('Не указано количество папок', '', 'red');
                return;
            }

            this.Core.query(null, 'saveManagersData', 'post', { foldersCount: this.foldersCount, folder: this.get('Core.folder') }).then(
                function () {
                    this.Core.addMessage('Папки записаны!', false, 'green');
                }.bind(this),
                function () {
                    this.Core.addMessage('Произошла ошибка. Данные не сохранены!', '', 'red');
                }.bind(this)
            );

        }
    }

});
