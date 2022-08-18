const express=require('express');
const mongoose=require('mongoose');
const User=require('../models/user')
const router=express.Router();

router.get('/',(req,res)=>{
    res.send("this is signin router");
})

router.post('/',(req,res)=>{
    const { name,email,password }=req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"user already registered"});
        }
    else{
        const user=new User({
        name,
        email,
        password
    })
    user.save(err=>{
        if(err){
            res.send(err);
        } else{
            res.send({message:"successfully registered, please login now"});
        }
    });
}
});
})

module.exports=router;