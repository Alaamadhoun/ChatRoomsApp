import React, { Component } from "react";

const DUMMY_DATA = [
  { senderId: "Raed", text: "1 dummy text" },
  { senderId: "Tariq", text: "2 dummy text" },
  { senderId: "Alaa", text: "3 dummy text" },
  { senderId: "Nabil", text: "4 dummy text" }
];

class MessageList extends Component {
  render() {
    return (
      <div className="message-list">
        <h2>this is Message list</h2>
        {DUMMY_DATA.map((message, index) => {
          return (
            <div key={index} className="message">
              <div className="message-username">{message.senderId}</div>
              <div className="message-text">{message.text} </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MessageList;
