import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

    files: null,
    filesToLoad: 0,
    readyToSend: computed('filesToLoad', 'files.[]', function () { return this.filesToLoad == 0 && this.files && this.files.length > 0; }),

    fileToDataURL(file, input) {

        if (!this.files) { this.set('files', []); }

        var reader = new FileReader();

        reader.onload = function (event, result) {
            this.files.pushObject({ name: file.name, data: result.target.result });
            this.decrementProperty('filesToLoad');

            if (this.filesToLoad == 0) {
                event.target.value = '';
            }
        }.bind(this, input);

        reader.readAsDataURL(file);

    },

    actions: {

        addFiles(event) {
            var filesArray = Array.prototype.slice.call(event.target.files);
            this.set('filesToLoad', filesArray.length);
            filesArray.forEach(function (item) { this.fileToDataURL(item, event); }.bind(this));
        },

        deleteFile(file) {
            this.files.removeObject(file);
        }

    }

});