
export default class Routing {
    constructor(routes){
        this.routes = routes;
        this.handleRoute();

    }

    handleRoute(){
        for(let route in this.routes){
            let rxps = this.prepareRxpString(route);
            let rxp = new RegExp("^"+rxps.pattern+"$");
            if(rxp.test(window.location.pathname)){
                /**
                 * NEED MODIFICATION
                 * import() only works on Chrome
                 * dynamic import not validated yet
                 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/import#Import_dynamique
                 */

                //let Class = this.routes[route].split("@");
                /*import("../Controller/"+Class[0]+".js")
                    .then((module) =>{
                        let args = [];
                        if(rxps.args){
                            args = window.location.pathname.match(rxps.pattern);
                            args.shift();
                        }
                        let controller = new  module.default();
                        controller[Class[1]].bind(controller).apply(null, args)
                    })
                */
                let args = [];
                if(rxps.args){
                    args = window.location.pathname.match(rxps.pattern);
                    args.shift();
                }

                let controller = new this.routes[route].controller;
                controller[this.routes[route].action].bind(controller).apply(null,args)

            }
        }
    }

    prepareRxpString(route){
        return {
            'pattern' : route.replace(new RegExp(/{([a-z]*)}/g),'(.*)'),
            'args' : (route.match(/{([a-z]*)}/g)) ? route.match(/{([a-z]*)}/g) : false
        }
    }

}

