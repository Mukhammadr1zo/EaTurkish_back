const { newsSchema, messageSchema, foodSchema, starsSchema, subscriberSchema } = require("../schema")

const JoiValidate = (schema, obj, next) =>{
    try {
        const {error} = schema.validate(obj)
        if(error) throw new Error(error.message)
        next()
    } catch (error) {
        next(error)
    }
}

const validation = (req, res, next) => {
    try {
        const [_, route] = req.url.split('/') 

        if(req.method === 'POST'){
            switch (route) {
                case 'news': JoiValidate(newsSchema, req.body, next); break;
                case 'message': JoiValidate(messageSchema, req.body, next); break;
                case 'food': JoiValidate(foodSchema, req.body, next); break;
                case 'vote': JoiValidate(starsSchema, req.body, next); break;
                case 'subscriber': JoiValidate(subscriberSchema, req.body, next); break;
                default: next(); break;
            }
        } else {
            next()
        }
    } catch (error) {
        next(error)
    }
}

module.exports = validation