import APIHelper from '../Utils/APIHelper.js';
import * as HTMLMarkup from '../Templates/Home.js';

import BaseController from './Base/BaseController.js';

export default class Home extends BaseController{
    constructor(){
        super();
    }
    view(){
        APIHelper.discover(1)
            .then((value) => {
                //console.log(HTMLMarkup.generate('','',value.results));
                this.importTemplate(HTMLMarkup.generate('','',value.results));

                /*this.importScript(`
                    var searchButton = document.getElementById('search-button'),
                    searchBox = document.getElementById('search-box');
                    
                    searchButton.onclick = function(e){
                        let target = e.target || e.srcElement;
                        target.parentElement.classList.toggle('open');
                    };
                `,'inline');*/

                this.importScript('/public/js/search.js','src',true);
            })
        }

}