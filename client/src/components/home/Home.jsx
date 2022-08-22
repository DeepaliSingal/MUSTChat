import React from "react";
import "../home/style.css";
import Topbar from "../../containers/topbar/Topbar";
//import Conversation from "../conversations/Conversation";
import Message from "../message/Message";
import ChatOnline from "../chatOnline/ChatOnline";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRef } from "react";

const Home = ({ setLoginUser , user}) => {
  // <div className="button" onClick={() => setLoginUser({})} >Logout</div>

  
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const [conversations,setConversations]=useState([]);

  const scrollRef=useRef();

  useEffect(()=>{
    const fetchusers = () =>{
      axios.get('http://localhost:9000/users')
      .then((res)=>{
        console.log(res.data.data);
        setConversations(res.data.data);
      })
      .catch((err)=>{
        console.log(err);
      })
    };
    fetchusers();
  },[]);

  useEffect(()=>{
    scrollRef.current?.scrollIntoView({behavior:"smooth"})
  },[messages]);

  useEffect(()=>{
    const getMessages=async()=>{
      try{
        const res=await axios.get("http://localhost:9000/messages/"+currentChat?._id+"/"+user?._id);
        setMessages(res.data);
      }
      catch(err){
        console.log(err);
      }
    }
    getMessages();
  },[currentChat]);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const message={
      sender:user._id,
      text:newMessage,
      receiverId:currentChat._id,
    };

    try{
      const res=await axios.post("http://localhost:9000/messages",message);
      setMessages([...messages,res.data]);
      setNewMessage("");
    }
    catch(err){
      console.log(err);
    }
  }

  // useEffect(()=>{
  //   const getConversations = async()=>{
  //     try{
  //       const res=await axios.get("http://localhost:9000/conversations/"+user._id);
  //       setConversations(res.data);
  //     }
  //     catch(err)
  //     {
  //       console.log(err);
  //     }
  //   }
  //   getConversations();
  // },[user._id]);

  console.log("current chat",currentChat);

  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            {/* {conversations.map((c)=>(
              <Conversation conversation={c} currentUser={user}></Conversation>
            ))} */}
            {conversations.map((c)=>(
              <div onClick={()=>setCurrentChat(c)}>
                <li className="list-item" key={c._id}>{c._id!==user._id?c.name:""}</li>
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ?
            <>
            <div className="chatBoxTop">
              {messages.map((m)=>(
                <div ref={scrollRef}>
                  <Message message={m} own={m.sender===user._id}/>
                </div>
              ))}
            </div>
            <div className="chatBoxBottom">
              <textarea
                className="chatMessageInput"
                placeholder="write something..."
                onChange={(e)=>setNewMessage(e.target.value)}
                value={newMessage}
              ></textarea>
              <button className="chatSubmitButton" onClick={handleSubmit}>
                Send
              </button>
            </div></>:
            <h4>
            Open a conversation to start a chat.
            </h4>
          }
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
