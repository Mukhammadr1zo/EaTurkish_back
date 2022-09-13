const { uploadimg } = require('../../utils/fireBase.js')
const { postNewsModel, getNewsModel, putNewsModel, deleteNewsModel, getNewsByIdModel } = require("./model.js");
const { getSubscribersModel } = require('../subscribers/model.js');

const getNews = async (req, res, next) => {
    try {
        const {news_id} = req.params
        const response = news_id ? await getNewsByIdModel(req.params) : await getNewsModel(req.query)

        if (response.error) return next(response)

        res.status(200).send({
            status: 200,
            data: response
        })
    } catch (error) {
        console.log(error);
    }
}


const postNews = async (req, res, next) => {
    try {
        const file = req.files?.img

        if (file?.name && file?.data) {
            const fileName = Date.now() + file?.name
            const path = `news/${fileName}`
            req.body.news_img = await uploadimg(file, path, res)
        } else {
            req.body.news_img = ''
        }
        
        const response = await postNewsModel(req.body)
        let subscribers = await getSubscribersModel()

        subscribers = subscribers.map(subscr => subscr.subscriber_email)

        if (response.error || !response.length) return next(response)

        sendMail(subscribers, response[0])

        res.status(201).send({
            status: 201,
            message: 'successful created',
            data: response
        })
    } catch (error) {
        console.log(error);
    }
}

const putNews = async (req, res, next) => {
    try {
        const file = req.files?.img

        if (file?.name && file?.data) {
            const fileName = Date.now() + file?.name
            const path = `news/${fileName}`
            req.body.news_img = await uploadimg(file, path, res)
        }

        const response = await putNewsModel(req.body, req.params)

        if (response.error || !response.length) return next(response)

        res.status(201).send({
            status: 201,
            message: 'successful updated',
            data: response
        })
    } catch (error) {
        console.log(error);
    }
}

const deleteNews = async (req, res, next) => {
    try {
        const response = await deleteNewsModel(req.params)

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
    getNews,
    postNews,
    putNews,
    deleteNews
}