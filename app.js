const express=require('express')

const app=express();
const bodyparser=require('body-parser')
app.use(bodyparser.json({extended:false}));

const cors=require('cors')
app.use(cors());


app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:5501');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    res.setHeader('Access-Control-Allow-Methods','Content-Type','multipart/form-data');
    next(); 
})

const orderRoutes=require('./routes/order')
app.use(orderRoutes)

app.set('view engine', 'ejs')
app.set('views','views')

const sequelize=require('./util/databse')
sequelize
.sync()
.then(result=>
{
    app.listen(3000)
}
)
.catch(err=>
    {
        console.log(err)
    })