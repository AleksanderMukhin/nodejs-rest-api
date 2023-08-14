const { Schema, model } = require('mongoose');
const Joi = require('joi');
const { handleMongooseError } = require('../helpers');

const subscriptionList = ["starter", "pro", "business"];

const userSchema = new Schema({  
  password: {    
    type: String,
    required: [true, 'Password is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  subscription: {
    type: String,
    enum: subscriptionList,
    default: "starter"
  },
  token: {
    type: String,
    default: null,
  },
}, { versionKey: false, timestamps: true });

userSchema.post('save', handleMongooseError);

const registerSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().required(),
})

const schemas = {
  registerSchema,
  loginSchema,
}

const User = model('user', userSchema);

module.exports = {
  User,
  schemas,
}