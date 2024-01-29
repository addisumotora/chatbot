import React, { useState } from "react";

const conversations = [
  {
    id: 1,
    name: "abebe",
    convname: "conversation 1",
  },
  {
    id: 2,
    name: "abebe2",
    convname: "conversation 2",
  },
  {
    id: 3,
    name: "abebe3",
    convname: "conversation 3",
  },
];

const options = ["Option A", "Option B", "Option C", "Option D"];

const Conversations = () => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div>
      <div className="flex justify-between items-center p-3 shadow-md">
        <div className="rounded-md bg-[#6D31ED] text-white w-14 h-14 flex justify-center items-center text-[9px]">
          CHATBOT
        </div>
        <div className=" p-3 rounded-md bg-[#6D31ED] text-white flex justify-center items-center">
          Logout
        </div>
      </div>
      <div className="flex p-5 gap-5">
        <div className="w-[25%] rounded-md h-full">
          <div className="bg-[#15ABFF] rounded-md flex justify-between p-5 text-white">
            <p>Conversations</p> <img src="./images/E add 13.png" />
          </div>
          <div className="bg-[#F8F9FA] mt-3 h-[72vh] shadow-md">
            {conversations.map((conve,index) => (
              <div className={`${index === 2 ? 'bg-[#6D31ED] text-white': 'bg-[#DEE1E6] text-[#171A1F]' } rounded-md flex justify-between p-5 my-2`}>
                <p>{conve.convname}</p> <img src="./images/trash 2.png" />
              </div>
            ))}
          </div>
        </div>
        <div className="w-[75%] flex flex-col">
          <div className="rounded-md shadow-lg h-full">
            <div className="bg-[#15ABFF] rounded-md flex justify-between p-3 text-white">
              <img src="./images/Image 126.png" />
            </div>
            <div className="flex flex-col justify-between h-[62vh]">
                <div>
                    {/* placeholder */}
                </div>
                <div className="flex  pl-5 my-3 w-full gap-4">
                  {options.map((option,index) => (
                    <button className={`${index === 0? 'bg-[#6D31ED] text-white': ''} rounded-3xl w-[8rem] gap-3 border-2 border-[#6D31ED] p-2`}>{option}</button>
                  ))}
                </div>
            </div>
          </div>
          <div className="flex justify-center items-center shadow-lg mt-2 rounded-[100px]">
            <input
              className="align-center p-6 rounded-[100px] w-full"
              placeholder="Reply to chatbot"
            />
            <button className="w-10 h-10 rounded-[50%] mr-5 bg-[#6D31ED] flex justify-center items-center">
              <img src="./images/Send message 1.png" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversations;
