const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')

const validation = require('./middlewares/validation.js')

const modules = require('./modules/modules.js')

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())
app.use(fileUpload())
app.use(validation)


app.use(modules)

app.use((error, req, res, next) => {
    return res.send({ error: error.error?.message || error.message || "error occured" })
})

app.listen(PORT, () => console.log(`Server run on ${PORT} port`))