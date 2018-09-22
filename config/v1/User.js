'use strict';
module.exports = {
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