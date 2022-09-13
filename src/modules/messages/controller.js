const { getMessagesModel, postMessageModel, deleteMessageModel, getMessagesByIdModel } = require("./model.js");

const getMessages = async (req, res, next) => {
    try {
        const {message_id} = req.params
        const response = message_id ? await getMessagesByIdModel(req.params) : await getMessagesModel(req.query)

        if (response.error) return next(response)

        res.status(200).send({
            status: 200,
            data: response
        })
    } catch (error) {
        console.log(error);
    }
}


const postMessage = async (req, res, next) => {
    try {        
        const response = await postMessageModel(req.body)

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

const deleteMessage = async (req, res, next) => {
    try {
        const response = await deleteMessageModel(req.params)

        if (response.error || !response.length) return next(response)

        res.status(203).send({
            status: 203,
            message: 'successful deleted',
            data: response
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getMessages,
    postMessage,
    deleteMessage
}