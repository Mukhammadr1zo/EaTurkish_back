const { getFoodsModel, deleteFoodsModel, postFoodModel, putFoodModel, getPopularFoodsModel, getFoodByIdModel } = require("./model.js");
const { uploadimg } = require("../../utils/fireBase.js");

const getFoods = async (req, res, next) => {
    try {
        const { food_id } = req.params
        const response = food_id ? await getFoodByIdModel(req.params) : await getFoodsModel(req.query)
        
        if (response.error) return next(response)

        res.status(200).send({
            status: 200,
            data: response
        })
    } catch (error) {
        console.log(error);
    }
}

const getPopularFoods = async (req, res, next) => {
    try {
        const response = await getPopularFoodsModel()

        if (response.error) return next(response)

        res.status(200).send({
            status: 200,
            data: response
        })
    } catch (error) {
        console.log(error);
    }
}

const postFood = async (req, res, next) => {
    try {
        const file = req.files?.img

        if (file?.name && file?.data) {
            const fileName = Date.now() + file?.name
            const path = `foods/${fileName}`
            req.body.food_img = await uploadimg(file, path, res)
        } else {
            req.body.food_img = ''
        }

        const response = await postFoodModel(req.body)

        if (response.error || !response.length) return next(response)

        res.status(201).send({
            status: 201,
            message: 'food created successfully',
            data: response
        })
    } catch (error) {
        console.log(error);
    }
}

const putFood = async (req, res, next) => {
    try {
        const file = req.files?.img

        if (file?.name && file?.data) {
            const fileName = Date.now() + file?.name
            const path = `food/${fileName}`
            req.body.food_img = await uploadimg(file, path, res)
        }

        const response = await putFoodModel(req.body, req.params)

        if (response.error || !response.length) return next(response)

        res.status(201).send({
            status: 201,
            message: 'food updated successfully',
            data: response
        })
    } catch (error) {
        console.log(error);
    }
}

const deleteFood = async (req, res, next) => {
    try {
        const response = await deleteFoodsModel(req.params)

        if (response.error || !response.length) return next(response)

        res.status(203).send({
            status: 203,
            message: 'food deleted successfully',
            data: response
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getFoods,
    getPopularFoods,
    postFood,
    putFood,
    deleteFood
}