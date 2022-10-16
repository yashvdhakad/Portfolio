import React from "react";

export default function Header() {
  return (
    <nav className="w-screen m-auto px-20 py-5 text-zinc-700 fixed flex flex-col sm:flex-row justify-between items-center">
      <div className="font-extrabold">YD</div>
      {/* <div className="flex font-bold space-x-20">
            <a href='/'>About</a>
            <a href='/'>Projects</a>
            <a href='/'>Blog</a>
        </div> */}
      <div className="flex space-x-20">
        {[
          ["About", "/dashboard"],
          ["Projects", "/projects"],
          ["Blog", "/blog"],
        ].map(([title, url]) => (
          <a
            href={url}
            className="font-bold hover:text-zinc-800"
          >
            {title}
          </a>
        ))}
      </div>
      <a href="/" className="font-bold hover:text-zinc-800">
        Let's Work
      </a>
    </nav>
  );
}
