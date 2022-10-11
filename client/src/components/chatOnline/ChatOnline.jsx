import React from 'react';
import '../chatOnline/style.css'

const ChatOnline = ({onlineUsers,currentId,setCurrentChat}) => {
  console.log(onlineUsers);
  return (
    <>
    <div className="chatOnline">
        <div className="chatOnlineFriend">
          <div className="chatOnlineImgContainer">
            <div className="chatOnlineBadge"></div>
          </div>
        </div>
    </div>
    </>
  )
}

export default ChatOnline