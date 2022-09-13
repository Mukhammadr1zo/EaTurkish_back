const { Router } = require('express')
const { postSubscriber } = require('./controller.js')

const router = Router()

router.post('/subscriber', postSubscriber)

module.exports = router