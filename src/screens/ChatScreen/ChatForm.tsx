"use client";

import { useFormState } from "react-dom";
import { State, actionMessage } from "./action";

export const inisialState: State = {
  result: null,
  message: null,
};

export const ChatForm = () => {
  const [state, dispatch] = useFormState(actionMessage, inisialState);
  return (
    <form
      action={dispatch}
      className="bg-white p-4 shadow-inner flex space-x-4"
    >
      {state.result === "error" && (
        <div className="w-full mb-4 text-red-600 border border-red-600 p-2 rounded-md">
          {state.message}
        </div>
      )}
      <input
        id="message"
        name="message"
        type="text"
        className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none"
        placeholder="メッセージを入力"
      />
      <button
        type="submit"
        className="bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600"
      >
        送信
      </button>
    </form>
  );
};
