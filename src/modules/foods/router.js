const { Router } = require('express')
const { getFoods, postFood, deleteFood, putFood, getPopularFoods } = require('./controller.js')

const router = Router()

router.get('/foods', getFoods)
router.get('/food/:food_id', getFoods)
router.get('/popularfoods', getPopularFoods)
router.post('/food', postFood)
router.put('/food/:food_id', putFood)
router.delete('/food/:food_id', deleteFood)

module.exports = router