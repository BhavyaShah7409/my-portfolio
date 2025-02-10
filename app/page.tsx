import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "projects", href: "/projects" },
  { name: "contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        bhavya_shah
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          I am a tech enthusiast focused on building smart, scalable solutions. <br> 
          With experience in web development, machine learning, and generative AI, I love tackling challenges and bringing innovative ideas to life. 
        </h2>
        <a
          href="https://drive.google.com/file/d/1kO9hB3uMtA4-JsXkxVn2a7PLw4AbsYO0/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-6 py-2 text-sm font-medium text-white bg-zinc-700 rounded-lg hover:bg-zinc-600 transition duration-300"
        >
          resume
        </a>
      </div>
    </div>
  );
}
