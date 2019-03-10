import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({

    beforeModel(transition) {
        this.get('Core.auth').checkAuth(transition);
    },
    model() {
        return hash({
            folders: this.store.findAll('catalog-папки'),
            cities: this.store.findAll('catalog-города'),
        });
    }

});
