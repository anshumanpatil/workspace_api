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
            public: true,
            schema : {
                body: {
                    user_name: Joi.string().required()
                }
            }
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