import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({

    httpServiceURL: config.APP.dataURL.namespace + '/',
    host: config.APP.dataURL.host,

    pathForType: function (type) {
        return this.httpServiceURL + 'data/' + type;
    },
    ajaxOptions(url, method, options) {

        if (!options) { options = {} }

        options.crossDomain = true;
        options.xhrFields = { withCredentials: true }

        options.beforeSend = function (xhr) {
            xhr.setRequestHeader('guid', this.get('Core.id'));
            //     //if (this.get('Core.auth.loggedIn')) {
            //     //    xhr.setRequestHeader('Authorization', 'Basic ' + this.get('Core.auth.base64Login'));
            //     //}
        }.bind(this);

        return this._super(url, method, options);
    }

});
