'use strict';
module.exports = {
    '/product/getCatagories': {
        get: {
            method: 'getCatagories',
            public: true
        }
    },
    '/product/addProduct': {
        post: {
            method: 'addProduct',
            public: true
        }
    },
    '/product/getProducts': {
        get: {
            method: 'getProducts',
            public: true
        }
    },
    '/product/getProduct/:id': {
        get: {
            method: 'getProduct',
            public: true
        }
    },
    '/product/updateProduct': {
        post: {
            method: 'updateProduct',
            public: true
        }
    },
    '/product/deleteProduct': {
        post: {
            method: 'deleteProduct',
            public: true
        }
    }
    
    
};