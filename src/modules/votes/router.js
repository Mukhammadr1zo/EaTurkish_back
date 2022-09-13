const { Router } = require('express')
const { vote } = require('./controller.js')

const router = Router()

router.post('/vote/:food_id', vote)

module.exports = router