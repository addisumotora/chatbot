import React, { useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";

const conversations = [
  {
    id: 1,
    name: "abebe",
    convname: "conversation 1",
    message: [{ sender: "chatbot", message: "How can I help you today?" }],
  },
  {
    id: 2,
    name: "abebe2",
    convname: "conversation 2",
    message: [{ sender: "chatbot", message: "How can I help you today?" }],
  },
  {
    id: 3,
    name: "abebe3",
    convname: "conversation 3",
    message: [{ sender: "chatbot", message: "How can I help you today?" }],
  },
];

const options = ["Option A", "Option B", "Option C", "Option D"];

const Conversations = () => {
  const [selectedOption, setSelectedOption] = useState();
  const [selectedConversation, setSelectedConversation] = useState(
    conversations[0]
  );
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const setOption = (option) => {
    setSelectedOption(option);
    selectedConversation?.message?.push({ sender: "user", message: option });
    console.log(selectedConversation);

    const dummyMessage = {
      sender: "chatbot",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra suscipit turpis, sed pellentesque arcu sollicitudin ut. Morbi metus dui, scelerisque id consectetur quis, accumsan id ipsum.",
      url: "./images/Image 128.png",
    };
    setLoading(true);
    setTimeout(() => {
      selectedConversation?.message?.push(dummyMessage);
      setLoading(false);
    }, 6000);
  };

  const handleInput = () => {
    if (inputValue && selectedOption) {
      selectedConversation.message.push({
        sender: "user",
        message: inputValue,
      });
      console.log(selectedConversation);
      setLoading(true);

      setTimeout(() => {
        selectedConversation?.message?.push({
          sender: "chatbot",
          message: "Finished",
        });
        setLoading(false);
      }, 6000);
      setInputValue("");
    }
  };

  const timestamp = Date.now();
  const dateObject = new Date(timestamp);

  const formattedDate = dateObject.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
          <div className="bg-[#F8F9FA] mt-3 min-h-[72vh] shadow-md">
            {conversations.map((conve) => (
              <div
                onClick={() => setSelectedConversation(conve)}
                className={`${
                  selectedConversation?.id === conve.id
                    ? "bg-[#6D31ED] text-white"
                    : "bg-[#DEE1E6] text-[#171A1F]"
                } rounded-md flex justify-between p-5 my-2`}
              >
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
            <div className="flex flex-col justify-between p-3 min-h-[62vh]">
              <div>
                <p className="flex w-full justify-center">{formattedDate}</p>
                {selectedConversation?.message?.map((message, indx) => (
                  <div key={indx}>
                    {message.sender === "chatbot" ? (
                      <div className="flex gap-5 items-end">
                        <img
                          className="flex justify-self-end"
                          src="./images/Image 126.png"
                          alt=""
                        />{" "}
                        <div className="w-[50%]">
                          <div className="w-fit">
                            <p className="mt-4 my-3 bg-[#F0F9FF] p-2 rounded-3xl text-[#15ABFF]">
                              {message.message}
                            </p>
                            <img src={message.url} alt="" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex w-full gap-3 justify-end">
                        <div className="w-fit gap-3">
                          <p className="mt-4 bg-[#6D31ED] p-2 rounded-3xl text-white">
                            {message.message}
                          </p>
                          <img src={message.url} alt="" />
                        </div>
                        <img src="./images/Image 127.png" alt="" />{" "}
                      </div>
                    )}
                  </div>
                ))}

                {loading && (
                  <div className="flex gap-5 items-end">
                    <img
                      className="flex justify-self-end"
                      src="./images/Image 126.png"
                      alt=""
                    />{" "}
                    <div className="w-[50%]">
                      <div className="w-fit">
                        <p className="mt-4 my-3 bg-[#F0F9FF] p-2 rounded-3xl text-[#15ABFF]">
                          <SyncLoader
                            color="#15ABFF"
                            loading={loading}
                            size={10}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {!selectedOption && (
                <div className="flex  pl-5 my-3 w-full gap-4">
                  {options.map((option, index) => (
                    <button
                      onClick={() => setOption(option)}
                      className={`${
                        index === 0 ? "bg-[#6D31ED] text-white" : ""
                      } rounded-3xl w-[8rem] gap-3 border-2 border-[#6D31ED] p-2`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center items-center shadow-lg mt-2 rounded-[100px]">
            <input
              className="align-center p-3 m-4 rounded-[100px] w-full"
              placeholder="Reply to chatbot"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              onClick={() => handleInput()}
              className="w-10 h-10 rounded-[50%] mr-5 bg-[#6D31ED] flex justify-center items-center"
            >
              <img src="./images/Send message 1.png" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversations;
