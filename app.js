const express=require('express')
const bodyParser=require('body-parser')
const app=express();
const fs=require('fs');
app.use(bodyParser.urlencoded({extended:false}))


const dataRouter=require('./routes/data')
const loginRouter=require('./routes/login')
const showDataRouter=require('./routes/showData')



// app.use(dataRouter)

app.use(showDataRouter)
app.use(loginRouter)    

app.listen(5000)