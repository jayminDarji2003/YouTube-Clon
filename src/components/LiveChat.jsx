import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../helper";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="my-4 flex gap-3">
      <img className="h-12" src="user.png" alt="image" />
      <div>
        <p className="font-bold">{name}</p>
        <p>{message}</p>
      </div>
    </div>
  );
};

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.chatMessage);
  const [text, setText] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      // API polling here
      //console.log("testing")
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "Hii, how are you. 🚀",
        })
      );
    }, 2000);

    return () => clearInterval(i); // clearing the interval
  }, []);

  const sendMessage = () => {
    dispatch(
      addMessage({
        name: "Jaymin Darji",
        message: text,
      })
    );
    setText("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      <div className="my-5 p-3 w-72 h-96 lg:w-[800px] lg:h-[500px] bg-black border-2 border-gray-600 rounded-2xl overflow-y-scroll flex flex-col-reverse">
        {/* <p className="font-bold text-xl">Live Chat</p> */}

        {chatMessages.map((msg, index) => {
          return (
            <ChatMessage key={index} name={msg.name} message={msg.message} />
          );
        })}
      </div>

      <div className="lg:w-[800px] text-black flex lg:justify-center gap-2 lg:gap-7">
        <input
          type="text"
          className="p-3 w-52 lg:w-96 rounded-md"
          placeholder="Enter comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="text-white bg-gray-500 px-4 lg:px-7 rounded-lg font-bold"
          onClick={() => sendMessage()}
        >
          SEND
        </button>
      </div>
    </>
  );
};

export default LiveChat;
