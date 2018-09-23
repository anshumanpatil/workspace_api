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
            public: true,
            schema : {
                body: {
                    user_email: Joi.string().required(),
                    user_password: Joi.string().required()
                }
            }
        }
    },
    '/user/profile': {
        post: {
            method: 'getProfile',
            public: false,
            schema : {
                body: {
                    user_email: Joi.string().required()
                }
            }
        },
        put: {
            method: 'putProfile',
            public: false,
            schema : {
                body: {
                    user_full_name: Joi.string().required(),
                    user_mobile: Joi.string().required(),
                    user_address: Joi.string().required(),
                    user_dob: Joi.string().required(),
                    user_doj: Joi.string().required(),
                }
            }
        }
        
    }
};