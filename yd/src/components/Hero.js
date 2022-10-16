import React from "react";

export default function Hero() {
  return (
    <section className="max-w-screen-2xl h-screen m-auto px-20 bg-zinc-200 flex flex-row justify-between items-center space-x-40">
      <div className="w-1/2 flex flex-col justify-center items-start space-y-6">
        <h1 className="text-6xl font-extrabold text-zinc-700">
          Hear, My People.
        </h1>
        <p className="text-2xl font-bold text-zinc-700">
          Let's conquer this fucking #digitalage.
        </p>
        <a
          href="/"
          className="text-xl uppercase py-2 px-20 font-bold text-zinc-700 bg-transparent border border-zinc-700 rounded drop-shadow hover:drop-shadow-md hover:bg-zinc-800 hover:text-white"
        >
          Ahoo!
        </a>
      </div>
      <img className="w-1/2 h-2/3 border border-black" src="./bg.jpeg" alt="" />
    </section>
  );
}
