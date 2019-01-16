'use strict';
let planItem = Joi.object().keys({
    index: Joi.number(),
    planId: Joi.string(),
})
  
module.exports = {
    '/workout/plan': {
        post: {
            method: 'workout',
            public: false,
            schema : {
                body: {
                    plan_name: Joi.string().optional(),
                    mon: Joi.array().items(planItem).optional(),
                    tue: Joi.array().items(planItem).optional(),
                    wed: Joi.array().items(planItem).optional(),
                    thu: Joi.array().items(planItem).optional(),
                    fri: Joi.array().items(planItem).optional(),
                    sat: Joi.array().items(planItem).optional(),
                    sun: Joi.array().items(planItem).optional()
                }
            }
        },
        get:{
            method: 'getWorkout',
            public: false,
            schema : {}
        }
    }
};