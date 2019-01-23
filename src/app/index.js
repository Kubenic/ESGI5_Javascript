import Routing from './Utils/Routing.js';

let routes = {
    '/' : 'Home@view',
    '/category': 'Category@view',
    '/category/{id}': 'Category@viewById',
    '/category/{id}/{details}': 'Category@viewById'
};
new Routing(routes);
