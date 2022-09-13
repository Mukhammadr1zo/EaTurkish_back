const { getCategoriesModel, postCategoryModel, deleteCategoryModel } = require("./model.js");

const getCategories = async (req, res, next) => {
    try {
        const response = await getCategoriesModel()

        if (response.error) return next(response)

        res.status(200).send({
            status: 200,
            data: response
        })
    } catch (error) {
        console.log(error);
    }
}

const postCategories = async (req, res, next) => {
    try {
        const response = await postCategoryModel(req.body)

        if(response.error || !response.length) return next(response)

        res.status(201).send({
            status: 201,
            message: 'successful created',
            data: response
        })
    } catch (error) {
        console.log(error);
    }
}

const deleteCategories = async (req, res, next) => {
    try {
        const response = await deleteCategoryModel(req.params)

        if(response.error || !response.length) return next(response)

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
    getCategories,
    postCategories,
    deleteCategories
}