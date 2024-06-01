import React from "react";
import { ChatForm } from "./ChatForm";

type Chat = { id: "string"; sender: "ai" | "user"; message: "string" };
type ChatList = Chat[];

export const ChatScreen = async () => {
  const response = await fetch("http://localhost:3333/posts", {});
  const data: ChatList = await response.json();
  return (
    <div className="flex flex-col h-screen bg-orange-50">
      <header className="bg-orange-400 text-white text-center py-4 shadow-md">
        <h1 className="text-2xl font-bold">東京グルメbot</h1>
      </header>
      <div className="flex-grow p-4 overflow-auto">
        <div className="flex flex-col space-y-4">
          {data.map((chat, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg shadow-md max-w-md ${
                chat.sender === "user"
                  ? "bg-orange-300 text-white self-end"
                  : "bg-orange-200 text-gray-800 self-start flex items-center space-x-2"
              }`}
            >
              <span>{chat.message}</span>
            </div>
          ))}
        </div>
      </div>
      <ChatForm />
    </div>
  );
};
