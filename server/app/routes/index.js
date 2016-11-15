'use strict';

const h = require('../helpers');
const config = require('../config');

const user = require('./user');
const cart = require('./cart');
const product = require('./product');
const category = require('./category');
const brewery = require('./brewery');

let routes = {
    'get': {
        '/product/:id': product.getProduct,
        '/category/:name': category.getCategory,
        '/category': category.getCategoryList,
        '/brewery/:id': brewery.getBrewery,
        '/brewery': brewery.getBreweryList,
        '/breweryProducts/:id': product.getBreweryProducts,
        '/cart/:id': cart.getCartItems
    },
    'post': {
        '/login': user.login,
        '/category': category.createCategory,
        '/product': product.createProduct,
        '/searchProduct': product.searchProduct,
        '/addCart': cart.addToCart,
        '/removeCart': cart.removeFromCart,
        '/plusOne': cart.plusOne,
        '/minusOne': cart.minusOne,
        '/brewery': brewery.createBrewery,
        '/searchBrewery': brewery.searchBrewery,
        '/getBreweryByOwner': brewery.getBreweryByOwner,
        '/rateBrewery': brewery.rate,
        '/rateProduct': product.rate,
        '/updateCategory': category.updateCategory,
        '/updateProduct': product.updateProduct,
        '/updateBrewery': brewery.updateBrewery,
    },
    'NA': (req, res, next) => {
        res.status(404).sendFile(process.cwd() + '/views/404.htm');
    }
}

module.exports = () => { return h.route(routes) };