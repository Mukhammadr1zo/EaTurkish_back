const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()
const secret_key = process.env.secret_key

module.exports = {
    sign: (payload) => jwt.sign(payload, secret_key),
    verify: (token) => jwt.verify(token, secret_key)
}