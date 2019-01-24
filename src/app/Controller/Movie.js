import APIHelper from '../Utils/APIHelper.js';

import * as HTMLMarkup from '../Templates/Movie.js';

export default class Movie {
    constructor() {

    }

    detailsById(id){
        APIHelper.details(id).then((value) => {
            console.log(value);

            document.body.innerHTML = HTMLMarkup.generate('','', value);

        });
    }
}