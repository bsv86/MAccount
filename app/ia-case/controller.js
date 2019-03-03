import Controller from '@ember/controller';

export default Controller.extend({

    actions: {

        sendFiles(data) {

            data.forEach(function (item) {

                let params = item;
                params.id = this.model.id;
                params.model = 'document-независимаяоценка';

                this.Core.query(null, 'attachFile', 'post', params).then(
                    function () {
                        data.removeObject(item);
                    }.bind(this),
                    function () {
                        this.Core.addMessage('Не удалось отправить файл ' + item.name, '', 'red');
                    }.bind(this));

            }.bind(this));

        }

    }

});
