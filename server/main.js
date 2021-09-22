const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use(cookieParser())




const PORT = 3001;
app.listen(PORT ,
    ()=>console.log(`server listening on port ${PORT}.`)
    )