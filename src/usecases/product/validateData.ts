import DateExtension from '@joi/date';
import * as JoiImport from 'joi';
const Joi = JoiImport.extend(DateExtension);

export const calculateSumAssuredByPremiumValidate = Joi.object({
    genderCd: Joi.any()
    .valid('FEMALE', 'MALE')
    .required(),
    dob: Joi.date().format(['YYYY-MM-DD'], ['YYYY-MM-DD HH:mm']).utc().required(),
    planCode: Joi.any()
    .valid('T11A20', 'T11A50', 'T11AM1')
    .required(),
    premiumPerYear: Joi.number().required(),
    paymentFrequency: Joi.any()
    .valid('YEARLY', 'HALFYEARLY', 'QUARTERLY', 'MONTHLYY')
    .required(),
})

export const calculatePremiumBySumassuredValidate = Joi.object({
    genderCd: Joi.any()
    .valid('FEMALE', 'MALE')
    .required(),
    dob: Joi.date().format(['YYYY-MM-DD'], ['YYYY-MM-DD HH:mm']).utc().required(),
    planCode: Joi.any()
    .valid('T11A20', 'T11A50', 'T11AM1')
    .required(),
    premiumPerYear: Joi.number().required(),
    paymentFrequency: Joi.any()
    .valid('YEARLY', 'HALFYEARLY', 'QUARTERLY', 'MONTHLYY')
    .required(),
    saPerYear: Joi.number().min(0).required()
})
