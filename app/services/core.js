import Service from '@ember/service';
import { inject } from '@ember/service';
import config from '../config/environment';
import { getOwner } from '@ember/application';

export default Service.extend({

    auth: inject('auth'),
    httpServiceURL: config.APP.dataURL.host + '/' + config.APP.dataURL.namespace + '/',
    username: '',
    folder: null,
    id: null,
    leadCategories: null,
    administration: false,
    messages: null,

    query(host, urlInHost, method, data, headers) {
        if (!host) { host = this.httpServiceURL; }
        return getOwner(this).lookup('adapter:application').ajax(host + urlInHost, method, { data: data, headers: headers });
    },

    addMessage(text) {
        if (this.messages) {
            this.messages.pushObject(text);
        } else {
            this.set('messages', [text]);
        }
    },

    deleteMessage(text) {

        let newMessages = this.messages.filter(function (ele) {
            return ele != text;
        });

        this.set('messages', newMessages);

    }

});
