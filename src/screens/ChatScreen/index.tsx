import React from "react";

const data = [
  { sender: "user", message: "おすすめのレストラン教えて" },
  { sender: "bot", message: "六本木のSushi Yoshiがおすすめです！" },
  // 例としてダミーデータを追加
];

const ChatForm = () => (
  <div className="bg-white p-4 shadow-inner flex space-x-4">
    <input
      type="text"
      className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none"
      placeholder="メッセージを入力"
    />
    <button className="bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600">
      送信
    </button>
  </div>
);

export const ChatScreen = () => {
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
