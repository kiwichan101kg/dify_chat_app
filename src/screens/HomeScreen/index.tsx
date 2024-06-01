import Link from "next/link";
import React from "react";

export const HomeScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-orange-50">
      <div className="mb-10 text-center">
        <h1 className="text-2xl  text-orange-400"> TOKYO GOURMET</h1>
      </div>
      <div className="flex flex-col space-y-6 mt-10">
        <Link href="/chat">
          <span className="px-8 py-4 bg-orange-300 text-white text-lg rounded-lg shadow-md hover:bg-orange-400 transition duration-300 cursor-pointer text-center w-64">
            START
          </span>
        </Link>
      </div>
    </div>
  );
};
