'use strict';
module.exports = {
    '/user/register': {
        post: {
            method: 'register',
            public: true
        }
    },
    '/user/login': {
        post: {
            method: 'login',
            public: true
        }
    },
    '/user/forget': { 
        post: {
            method: 'forget',
            public: true
        }
    },
    '/user/logout': {
        get: {
            method: 'logout',
            public: true
        }
    }
};