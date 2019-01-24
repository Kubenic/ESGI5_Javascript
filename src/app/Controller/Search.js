import BaseController from "./Base/BaseController.js";
import APIHelper from "../Utils/APIHelper.js";
import * as CardTemplateHTMLMarkup from "../Templates/Parts/Card.js";

export default class Search extends BaseController{
    constructor(){
        super();
    }

    renderSearchJson(query){
        return APIHelper.search(query);
    }
}