import APIHelper from '../Utils/APIHelper.js';

import * as HTMLMarkup from '../Templates/Home.js';

export default class Home{
    constructor(){

    }
    view(){
        APIHelper.discover(1)
            .then((value) => {
                //image base path -> https://image.tmdb.org/t/p/w500/ ...
                console.log(value);
                //console.log(HTMLMarkup);
                document.body.innerHTML = HTMLMarkup.generate('<h2>Header</h2>','<h2>Footer</h2>',value.results);
            })
        }

}