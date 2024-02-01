import React, { useContext, useState } from "react";
import { AuthContext } from "../Context";
import { conversations } from "../utils/utils";
const Sidebar = ({
  selectedConversation,
  isOpen,
  handleConversationChange,
}) => {
  const { addConversation, removeConve, conversations } =
    useContext(AuthContext);
  const adConversation = () => {
    addConversation({
      id: conversations.length + 1,
      name: "abel",
      convname: `conversation ${conversations.length + 1}`,
      message: [{ sender: "chatbot", message: "How can I help you today?" }],
      conversationStarted: false,
    });
  };

  const removeConversation = (id) => {
    removeConve(id);
  };
  return (
    <div
      className={`w-[25%] rounded-md h-full md:block ${
        isOpen ? "w-[75%] mt-2" : "hidden"
      }`}
    >
      <div
        className={`bg-[#15ABFF] ${
          isOpen ? "hidden" : "block"
        } rounded-md flex justify-between p-5 text-white`}
      >
        <p>Conversations</p>
        <img
          onClick={adConversation}
          className="cursor-pointer"
          src="./images/E add 13.png"
          alt="prof"
        />
      </div>
      <div className="bg-[#F8F9FA] mt-3 min-h-[72vh] shadow-md">
        {conversations.map((conve) => (
          <div
            key={conve.id}
            onClick={() => handleConversationChange(conve)}
            className={`${
              selectedConversation?.id === conve.id
                ? "bg-[#6D31ED] text-white"
                : "bg-[#DEE1E6] text-[#171A1F]"
            } rounded-md flex justify-between p-5 my-2 cursor-pointer`}
          >
            <p>{conve.convname}</p>{" "}
            <img
              onClick={() => removeConversation(conve.id)}
              src="./images/trash 2.png"
              alt="delete image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
