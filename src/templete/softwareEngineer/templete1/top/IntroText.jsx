// import React from 'react';

function IntroText() {
  return (
    <>
      <h1 className="text-6xl font-semibold tracking-normal capitalize leading-[64px] text-slate-700 max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
        <span className="text-3xl leading-10">Hi👋, I'm</span>
        <span className="text-3xl leading-10"> a</span>
        <br />
        <span className="text-5xl">software develope</span>r
      </h1>
      <p className="mt-8 text-black text-opacity-70 max-md:max-w-full">
        <span className="text-black">I'm </span>
        <span className="font-bold text-black">John Doe</span>
        <span className="text-black">, a developer dedicated to making the world a better place one line of code at a time.</span>
      </p>
    </>
  );
}

export default IntroText;