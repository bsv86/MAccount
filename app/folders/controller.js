import Controller from '@ember/controller';

export default Controller.extend({

    currentFolder: null,

    actions: {

        createFolder() {
            this.set('currentFolder', this.store.createRecord('catalog-папки'));
        },
        selectFolder(folder) {
            this.set('currentFolder', folder);
        },
        saveCurrentFolder() {
            
            if (!this.get('currentFolder.наименование')) { 
                this.Core.addMessage('Не заполнено наименование!', '', 'red');
                return;
            }

            if (!this.get('currentFolder.город.id')) { 
                this.Core.addMessage('Не заполнен город!', '', 'red');
                return;
            }

            this.currentFolder.save().then(
                function () { this.Core.addMessage('Данные сохранены!', false, 'green'); }.bind(this),
                function () { this.Core.addMessage('Произошла ошибка. Данные не сохранены!', '', 'red'); }.bind(this)
            );

        }
    }

});
