import Routing from './Utils/Routing.js';
import Home from './Controller/Home.js';
import Genre from './Controller/Genre.js';
import Movie from './Controller/Movie.js';
import Search from "./Controller/Search.js";

/*
let routes = {
    '/' : 'Home@view',
    '/category': 'Genre@view',
    '/category/{id}': 'Genre@viewById',
    '/category/{id}/{details}': 'Genre@viewById'
};
*/

let routes ={
    '/': {controller:Home, action:'view'},
    '/genre/{id}': {controller:Genre, action:'viewById'},
    '/movie/{id}': {controller:Movie, action:'detailsById'},
    '/search/{query}/json':{controller:Search, action:'renderSearchJson'}

}
new Routing(routes);
