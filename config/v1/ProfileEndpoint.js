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
            },
            swagger: {
                "tags": [
                    "Profile"
                  ],
                  "summary": "Create Profile of User",
                  "description": "",
                  "operationId": "postProfile",
                  "consumes": [
                    "application/x-www-form-urlencoded"
                  ],
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [
                    {
                      "name": "name",
                      "in": "formData",
                      "description": "The first name for user",
                      "required": false,
                      "type": "string"
                    },
                    {
                        "name": "middleName",
                        "in": "formData",
                        "description": "The first name for user",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "surName",
                        "in": "formData",
                        "description": "The first name for user",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "mobile",
                        "in": "formData",
                        "description": "The first name for user",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "phone",
                        "in": "formData",
                        "description": "The first name for user",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "address",
                        "in": "formData",
                        "description": "The first name for user",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "pincode",
                        "in": "formData",
                        "description": "The first name for user",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "admin",
                        "in": "formData",
                        "description": "The first name for user",
                        "required": false,
                        "default": false,
                        "type": "boolean"
                    },
                    {
                        "name": "city",
                        "in": "formData",
                        "description": "The first name for user",
                        "required": false,
                        "type": "string"
                    }
                  ],
                  "responses": {
                    "405": {
                      "description": "Invalid input"
                    },
                    "200": {
                      "description": "Logged in"
                    }
                  },
                  "security": [{"Authorization": ["write","read"]}]
            }
            
        },
        put: {
            method: 'updateProfile',
            public: false,
            schema : {},
            swagger: {
                "tags": [
                    "Profile"
                  ],
                  "summary": "Create Profile of User",
                  "description": "",
                  "operationId": "updateProfile",
                  "consumes": [
                    "application/x-www-form-urlencoded"
                  ],
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [
                    {
                      "name": "name",
                      "in": "formData",
                      "description": "The first name for user",
                      "required": false,
                      "type": "string"
                    },
                    {
                        "name": "middleName",
                        "in": "formData",
                        "description": "The first name for user",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "surName",
                        "in": "formData",
                        "description": "The first name for user",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "mobile",
                        "in": "formData",
                        "description": "The first name for user",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "phone",
                        "in": "formData",
                        "description": "The first name for user",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "address",
                        "in": "formData",
                        "description": "The first name for user",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "pincode",
                        "in": "formData",
                        "description": "The first name for user",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "admin",
                        "in": "formData",
                        "description": "The first name for user",
                        "required": false,
                        "type": "boolean"
                    },
                    {
                        "name": "city",
                        "in": "formData",
                        "description": "The first name for user",
                        "required": false,
                        "type": "string"
                    }
                  ],
                  "responses": {
                    "405": {
                      "description": "Invalid input"
                    },
                    "200": {
                      "description": "Logged in"
                    }
                  },
                  "security": [{"Authorization": ["write","read"]}]
            }
            
        },
        get: {
            method: 'getProfile',
            public: false,
            schema : {},
            swagger: {
                "tags": [
                    "Profile"
                  ],
                  "summary": "Create Profile of User",
                  "description": "",
                  "operationId": "getProfile",
                  "consumes": [
                    "application/x-www-form-urlencoded"
                  ],
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [],
                  "responses": {
                    "405": {
                      "description": "Invalid input"
                    },
                    "200": {
                      "description": "Logged in"
                    }
                  },
                  "security": [{"Authorization": ["write","read"]}]
            }
            
        },
        
    }
};