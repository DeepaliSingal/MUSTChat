const express=require('express');
const router=express.Router();
const User=require('../models/user');

router.get('/', async (req,res,next)=>{
    try{
      const user = await User.find();
  
      return res.status(200).json({
        success: true,
        count: user.length,
        data: user,
      });
    } catch(err) {
      console.log(err);
      res.status(500).json({ error: 'server error' });
    }
  });

module.exports=router;