import Controller from '@ember/controller';

export default Controller.extend({

    foldersCount: 0,

    actions: {
        saveData() {

            if (!this.foldersCount) {
                this.get('Core').addMessage('Не указано количество папок', '', 'red');
                return;
            }

            this.get('Core').query(null, 'saveManagersData', 'post', { foldersCount: this.foldersCount, folder: this.get('Core.folder') }).then(
                function () {
                    this.get('Core').addMessage('Папки записаны!', false, 'green');
                }.bind(this),
                function () {
                    this.get('Core').addMessage('Произошла ошибка. Данные не сохранены!', '', 'red');
                }.bind(this)
            );

        }
    }

});
