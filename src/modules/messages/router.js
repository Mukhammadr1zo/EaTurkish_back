const { Router } = require('express')
const { getMessages, postMessage, deleteMessage } = require('./controller.js')

const router = Router()

router.get('/messages', getMessages)
router.get('/message/:message_id', getMessages)
router.post('/message', postMessage)
router.delete('/message/:message_id', deleteMessage)

module.exports = router