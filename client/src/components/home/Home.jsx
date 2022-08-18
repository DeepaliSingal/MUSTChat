import React from "react";
import "../home/style.css";
import Topbar from "../../containers/topbar/Topbar";
import Conversation from "../conversations/Conversation";
import Message from "../message/Message";
import ChatOnline from "../chatOnline/ChatOnline";

const Home = ({ setLoginUser }) => {
  // <div className="button" onClick={() => setLoginUser({})} >Logout</div>

  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            <Conversation></Conversation>
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Message />
              <Message own={true} />
              <Message />
            </div>
            <div className="chatBoxBottom">
              <textarea
                className="chatMessageInput"
                placeholder="write something..."
              ></textarea>
              <button className="chatSubmitButton">
                Send
              </button>
            </div>
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
