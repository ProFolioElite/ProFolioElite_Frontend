import React from "react";

function SendButton() {
  return (
    <button className="flex gap-5 justify-center items-center self-center px-6 py-3 text-lg text-center text-white rounded bg-slate-700 max-md:px-5">
      <span className="self-stretch my-auto">Send Message</span>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ffefd7b6406856225ebf5399c0a7a1d6d9cebf75f747ee47557ee33815b21d96?apiKey=2bf0694f47d849e3ac7eb08b0242d721&&apiKey=2bf0694f47d849e3ac7eb08b0242d721"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto aspect-[0.87] w-[21px]"
      />
    </button>
  );
}

export default SendButton;