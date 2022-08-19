import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../conversations/style.css'

const Conversation = ({conversation,currentUser}) => {

  const [user,setUser]=useState(null);

  useEffect(()=>{
    const friendId=conversation.members.find(m=>m !== currentUser._id);

    const getUser=async()=>{
      try{
        const res=await axios("http://localhost:9000/users"+friendId);
        console.log(res.data);
        setUser(res.data);
      }
      catch(err){
        console.log(err);
      }
    };

    getUser();
  },[currentUser,conversation]);

  return (
    <>
    <div className='conversationName'>{user.name}</div>
    </>
  )
}

export default Conversation