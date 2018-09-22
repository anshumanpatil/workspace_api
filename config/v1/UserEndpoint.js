'use strict';
module.exports = {
    '/user/login': {
        post: {
            method: 'login',
            public: true,
            schema : {
                body: {
                    user_email: Joi.string().required(),
                    user_password: Joi.string().required()
                }
            }
        }
    },
    '/user/register': {
        post: {
            method: 'register',
            public: true
        }
    }
};