import Controller from '@ember/controller';

export default Controller.extend({

    phone: '',
    name: '',
    category: 'НО',
    comment: '',
    sending: false,
    roadPatrol: false,

    actions: {

        fileToDataURL(file) {
            return new Promise(function (resolve) {

                var reader = new FileReader();

                reader.onload = function (event) {
                    resolve("filename='" + file.name + "';" + event.target.result);
                }.bind(file);

                reader.readAsDataURL(file);

            });
        },

        createLead() {

            if (!this.name) {
                this.get('Core').addMessage('Не заполнено ФИО клиента');
                return;
            }

            if (!this.phone) {
                this.get('Core').addMessage('Не заполнен телефон');
                return;
            }

            this.set('sending', true);

            var filesArray = Array.prototype.slice.call($('#sendingFiles')[0].files);
            Promise.all(filesArray.map(this.actions.fileToDataURL)).then(
                function (data) {
                    let sendingData = { category: this.category, name: this.name, phone: this.phone, comment: this.comment, roadPatrol: this.roadPatrol, files: data };
                    this.get('Core').query(null, 'createLead', 'post', sendingData).then(
                        function () {
                            this.set('sending', false);
                            this.get('Core').addMessage('Заявка сохранена!', false, 'green');
                            this.set('phone');
                            this.set('name');
                            this.set('category', 'НО');
                            this.set('comment');
                            this.set('roadPatrol', false);
                        }.bind(this),
                        function () {
                            this.set('sending', false);
                            this.get('Core').addMessage('Произошла ошибка. Данные не сохранены!', '', 'red');
                        }.bind(this)
                    );
                }.bind(this)
            );

        }

    }

});
