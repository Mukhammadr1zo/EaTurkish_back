const Joi = require('joi')

const newsSchema = Joi.object({
    news_title: Joi.string().min(3).required(),
    news_desc: Joi.string().min(10).required()
})

const messageSchema = Joi.object({
    client_name: Joi.string().min(3).max(30).required(),
    client_phone: Joi.number().required(),
    client_email: Joi.string().email({ tlds: { allow: false } }).required(),
    message_body: Joi.string().min(10).required()
})

const foodSchema = Joi.object({
    food_name: Joi.string().min(2).required(),
    food_price: Joi.number().required(),
    food_category: Joi.string().guid({ version: 'uuidv4' }).required()
})

const starsSchema = Joi.object({
    stars: Joi.number().min(1).max(5).required()
})

const subscriberSchema = Joi.object({
    subscriber_email: Joi.string().email({ tlds: { allow: false } }).required()
})

module.exports = {
    newsSchema,
    messageSchema,
    foodSchema,
    starsSchema,
    subscriberSchema
}