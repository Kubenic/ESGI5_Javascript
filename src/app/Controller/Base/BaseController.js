export default class BaseController{
    constructor(){

    }
    importTemplate(baseTemplate){
        let parsed = new DOMParser().parseFromString(baseTemplate,'text/html');
        for (let parse of parsed.body.children){
            document.body.appendChild(parse.cloneNode(true));
        }
    }

    importScript(scriptString, mode, isModule = false){
        let elem = document.createElement('script');
        if(mode === "inline"){
            elem.innerHTML = scriptString;
        }
        if(mode === "src"){
            elem.src = scriptString;
        }
        if(isModule){
            elem.type="module";
        }
        document.body.appendChild(elem);
    }

}