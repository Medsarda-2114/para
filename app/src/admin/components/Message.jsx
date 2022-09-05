import React from "react";
import "./scss/message.scss";

const Message = ({ action }) => {
  return (
    <div className="MsgContainer">
      <div className="msg">
        <i class="fa-solid fa-trash delete"></i>
        <h2>Are You sure You Want To Delete This Product</h2>
        <div className="btn">
          <button className="delete">Confirm</button>
          <button className="cancel" onClick={() => action()}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
