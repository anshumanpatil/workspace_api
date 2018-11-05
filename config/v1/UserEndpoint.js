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
    }
};