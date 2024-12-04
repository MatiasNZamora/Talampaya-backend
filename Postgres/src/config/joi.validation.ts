import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
    // MONGODB: Joi.required(),
    PORT: Joi.number().default(4001),
    API_KEY: Joi.number().required()
});