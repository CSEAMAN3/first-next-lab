"use client";

import { useState } from "react";
// import Image from "next/image";

export default function Home() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-white">
      <p className="text-blue-800 text-9xl">{count}</p>
      <div>
        <button onClick={decreaseCount} className="w-8 h-8 bg-blue-800 mr-4 text-white rounded-full cursor-pointer">
          -
        </button>
        <button onClick={increaseCount} className="w-8 h-8 bg-blue-800 ml-4 text-white rounded-full cursor-pointer">
          +
        </button>
      </div>
    </main>
  );
}
