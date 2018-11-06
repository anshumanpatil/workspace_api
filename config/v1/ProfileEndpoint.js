'use strict';
module.exports = {
    '/profile': {
        post: {
            method: 'postProfile',
            public: false,
            schema : {
                body: {
                    name: Joi.string().allow('').optional(),
                    middleName: Joi.string().allow('').optional(),
                    surName: Joi.string().allow('').optional(),
                    mobile: Joi.string().allow('').optional(),
                    phone: Joi.string().allow('').optional(),
                    address: Joi.string().allow('').optional(),
                    pincode: Joi.string().allow('').optional(),
                    admin: Joi.boolean().allow('').optional(),
                    city: Joi.string().allow('').optional()
                }
            }
            
        },
        put: {
            method: 'updateProfile',
            public: false
            
        },
        get: {
            method: 'getProfile',
            public: false,
            schema : {}
            
        },
        
    }
};