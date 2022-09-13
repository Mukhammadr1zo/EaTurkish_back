const { voteModel } = require("./model.js");


const vote = async (req, res, next) => {
    try {
        const response = await voteModel(req.body, req.params)

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

module.exports = {
    vote
}