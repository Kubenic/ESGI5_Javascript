import APIHelper from '../Utils/APIHelper.js';

import * as HTMLMarkup from '../Templates/Home.js';

export default class Home{
    constructor(){

    }
    view(){
        APIHelper.discover(1)
            .then((value) => {
                document.body.innerHTML = HTMLMarkup.generate('','',value.results);
            })
        }

}