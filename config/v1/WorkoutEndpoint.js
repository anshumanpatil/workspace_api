'use strict';
let planItem = Joi.object().keys({
    link: Joi.string()
})
  
module.exports = {
    '/workout/exercise': {
        post: {
            method: 'putExercise',
            public: false,
            schema : {
                body: {
                    name: Joi.string().optional(),
                    imageLinks: Joi.array().items(planItem).optional()
                }
            }
        },
        get:{
            method: 'getAllExercise',
            public: false,
            schema : {}
        },
        delete:{
            method: 'deleteExercise',
            public: false,
            schema : {
                body: {
                    workout_id: Joi.string().required()
                }
            }
        }
    }
};