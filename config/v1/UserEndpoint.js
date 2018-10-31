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
            },
            swagger: {
                "tags": [
                    "User"
                  ],
                  "summary": "Login to the API",
                  "description": "",
                  "operationId": "login",
                  "consumes": [
                    "application/x-www-form-urlencoded"
                  ],
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [
                    {
                      "name": "user_email",
                      "in": "formData",
                      "description": "The user name for login",
                      "required": true,
                      "type": "string"
                    },
                    {
                      "name": "user_password",
                      "in": "formData",
                      "description": "The user password for login",
                      "required": true,
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
            },
            swagger: {
                "tags": [
                    "User"
                  ],
                  "summary": "Register New User to the API",
                  "description": "",
                  "operationId": "register",
                  "consumes": [
                    "application/x-www-form-urlencoded"
                  ],
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [
                    {
                      "name": "user_email",
                      "in": "formData",
                      "description": "The user name for login",
                      "required": true,
                      "type": "string"
                    },
                    {
                      "name": "user_password",
                      "in": "formData",
                      "description": "The user password for login",
                      "required": true,
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
                  }
            }
        }
    },
    '/user/profile': {
        get: {
            method: 'getProfile',
            public: false,
            schema : {
                body: {
                    user_email: Joi.string()
                }
            },
            swagger: {
                "tags": [
                    "User"
                  ],
                  "summary": "Get User Profile to the API",
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
                  "security": [
                    {
                      "api_key": []
                    }
                  ]
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
            },
            swagger: {
                "tags": [
                    "User"
                  ],
                  "summary": "Add User Profile to the API",
                  "description": "",
                  "operationId": "putProfile",
                  "consumes": [
                    "application/x-www-form-urlencoded"
                  ],
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [
                    {
                      "name": "user_full_name",
                      "in": "formData",
                      "description": "The user full name for profile",
                      "required": true,
                      "type": "string"
                    },
                    {
                      "name": "user_mobile",
                      "in": "formData",
                      "description": "The user mob no for profile",
                      "required": true,
                      "type": "string"
                    },
                    {
                      "name": "user_address",
                      "in": "formData",
                      "description": "The user address for profile",
                      "required": true,
                      "type": "string"
                    },
                    {
                      "name": "user_dob",
                      "in": "formData",
                      "description": "User DOB (1981-06-15)",
                      "required": true,
                      "type": "string"
                    },
                    {
                      "name": "user_doj",
                      "in": "formData",
                      "description": "User DOJ (1981-06-15)",
                      "required": true,
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
                  "security": [
                    {
                      "api_key": []
                    }
                  ]
            }
        }
        
    }
};