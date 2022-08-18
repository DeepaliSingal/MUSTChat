import React from 'react';
import '../message/style.css';

const Message = ({own}) => {
  return (
    <>
    <div className={own ? "message own" : "message"}>
        <div className="messageTop">
            <p className="messageText">Hello this is a message</p>
        </div>
        <div className="messageBottom">1 hour ago</div>
    </div>
    </>
  )
}

export default Message