'use strict';
module.exports = {
    '/workout/plan': {
        get: {
            method: 'getWorkoutPlan',
            public: true,
            swagger: {
                "tags": [
                    "Workout"
                  ],
                  "summary": "Get User Workout Plan",
                  "description": "",
                  "operationId": "getWorkout",
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
            method: 'putWorkoutPlan',
            public: true,
            swagger: {
                "tags": [
                    "Workout"
                  ],
                  "summary": "Add User Profile to the API",
                  "description": "",
                  "operationId": "putWorkout",
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