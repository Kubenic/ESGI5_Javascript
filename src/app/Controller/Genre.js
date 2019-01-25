import * as HTMLMarkup from "../Templates/Home.js";
import APIHelper from "../Utils/APIHelper.js";
import BaseController from "./Base/BaseController.js";

export default class Genre extends BaseController{
    constructor() {
        super();
    }
    viewById(id){
        APIHelper.discoverByGenre(1,id)
            .then((discorverValue) => {
                APIHelper.genreList().then((genreList) => {
                    genreList.genres.map((elem) => {
                        elem.active = elem.id === parseInt(id);
                    });
                    console.log(genreList);
                    this.importTemplate(HTMLMarkup.generate('','',discorverValue.results,genreList.genres));
                    this.importScript('/public/js/search.js','src',true);
                });
            })
    }

}