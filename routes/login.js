const express=require('express')

const router=express.Router();
router.get('/login',(req,res,next)=>
{
    res.send("<html><head><title>group chat app</title></head><body><form onSubmit=localStorage.setItem(`username`,document.getElementById(`username`).value) action='/' method='GET'><input type='text' id='username' placeholder='username' name='title'><button type='submit'>Submit</button></form></body></html>") 
})


module.exports=router;