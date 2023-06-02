const express=require('express')
const bodyParser=require('body-parser')
const data=require('./data')
const router=express.Router();
const fs=require('fs');
router.use(bodyParser.urlencoded({extended:false}))

router.get('/',(req,res,next)=>
{
    console.log("get method")
    fs.readFile('form-data.txt',(err, data)=>
    {
        if(err)
        {
            console.log("No Chat Yet")
            data="No chat Exist"
        }
        res.send(`${data}<html><head><title>group chat app</title></head><body><form onSubmit=document.getElementById('userName').value=localStorage.getItem('username') action='/' method='POST'><input type='text' id='message' placeholder="message" name='message'><input type='hidden' id='userName' name='userName'><button type='submit'>Submit</button></form></body></html>`)
    })
  
})
router.post('/',(req,res,next)=>
{
    
    console.log("post method 2")
    console.log(req.body.userName)
    console.log(req.body.message)
   
        fs.writeFile('form-data.txt',`${req.body.userName}: ${req.body.message} `,{flag:'a'},err=>
        err?console.log(err):res.redirect('/')    
          );  
    
    
})


module.exports=router;