const joi = require("joi");

const userRegisterValidationSchema = joi.object({
  fullname: joi.string().min(4).max(20).trim().required().messages({
    "string.empty": "Full name is required",
    "string.min": "Full name must be at least 3 characters",
  }),
  email: joi
    .string()
    .required()
    .email({ tlds: { allow: false } })
    .trim()
    .lowercase()
    .messages({
      "string.email": "Please provide a valid email address",
      "string.empty": "Email is required",
    }),
  password: joi.string().min(6).max(50).required().trim().messages({
    "string.min": "Password must be at least 6 characters long",
    "string.empty": "Password is required",
  }),
});

const userLoginValidationSchema = joi.object({
  email: joi
    .string()
    .required()
    .email({ tlds: { allow: false } })
    .trim()
    .lowercase()
    .messages({
      "string.email": "Please provide a valid email address",
      "string.empty": "Email is required",
    }),
  password: joi.string().min(6).max(50).required().trim().messages({
    "string.min": "Password must be at least 6 characters long",
    "string.empty": "Password is required",
  }),
});

module.exports = {
  userRegisterValidationSchema,
  userLoginValidationSchema,
};
