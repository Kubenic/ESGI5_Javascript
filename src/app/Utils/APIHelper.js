const baseUrl = "https://api.themoviedb.org/3";
var options ="?api_key=5dd007f8e0ca43e889d236f43549dee7&language=fr-FR&region=FR";
export default class APIHelper{

    static call(urlPart, parts){{}
        let queryString = "";
        queryString += Object.keys(parts).map(key => key + '=' + parts[key]).join('&');
        options += (queryString !== "") ? "&"+queryString : "";
        let url = baseUrl+urlPart+options
        return new Promise((resolve, reject) => {
            fetch(url)
                .then((response) => {
                    response.json()
                        .then((value) => {
                            resolve(value);
                        })
                })
        });

    }

    static discover(page){
        return APIHelper.call("/discover/movie", {page: page});
    }

    static search(page){
        return APIHelper.call("/search/movie", {query: query});
    }

}