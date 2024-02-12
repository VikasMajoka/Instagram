const express = require('express')
const app = express()
const PORT=5000

reuire('./models/user')

const customMiddleware = (req ,res ,next)=>{
    console.log("middleware executed!!")
    next()
}

app.use(customMiddleware)


app.get('/' ,(req ,res)=>{
    console.log("home")
    res.send("Hello World")
})
app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})