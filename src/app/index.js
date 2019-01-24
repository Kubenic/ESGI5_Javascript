import Routing from './Utils/Routing.js';
import Home from './Controller/Home.js';
import Category from './Controller/Category.js';
import Movie from './Controller/Movie.js';

/*
let routes = {
    '/' : 'Home@view',
    '/category': 'Category@view',
    '/category/{id}': 'Category@viewById',
    '/category/{id}/{details}': 'Category@viewById'
};
*/

let routes ={
    '/': {controller:Home, action:'view'},
    '/category': {controller:Category, action:'view'},
    '/category/{id}/{details}': {controller:Category, action:'viewById'},
    '/movie/{id}': {controller:Movie, action:'detailsById'}

}
new Routing(routes);
