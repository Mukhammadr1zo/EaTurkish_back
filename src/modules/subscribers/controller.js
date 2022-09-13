const { postSubscriberModel } = require("./model.js");


const postSubscriber = async (req, res, next) => {
    try {
        const response = await postSubscriberModel(req.body)

        if (response.error || !response.length) return next(response)

        res.status(201).send({
            status: 201,
            message: 'successful created',
            data: response
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    postSubscriber
}