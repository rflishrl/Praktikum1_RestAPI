const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

const geometryRoutes = require('./routes/geometry')
const suhuRoutes = require('./routes/suhu')
const convertRoutes = require('./routes/convert')
const bmiRoutes = require('./routes/bmi')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

// Nomor 1
app.use('/geometry', geometryRoutes)

// Nomor 2
app.use('/suhu', suhuRoutes)

// Nomor 3
app.use('/convert', convertRoutes)

// Nomor 4
app.use('/bmi', bmiRoutes)

app.listen(8000, () => {
    console.log("Yuhuu!");
})