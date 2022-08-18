const express = require("express");
const router=express.Router();
const User=require('../models/user');

router.get('/',(req,res)=>{
    res.send("this is the login page");
})

router.post('/',(req,res)=>{
    const {name,password}=req.body;
    User.findOne({name:name},(err,user)=>{
        if(user){
            if(password===user.password){
                res.send({message:"loggedin successfully",user:user})
            }
            else{
                res.send({message:"password didn't match"});
            }
        }
        else{
            res.send({message:"user not rregistered"});
        }
    })
})

module.exports=router;