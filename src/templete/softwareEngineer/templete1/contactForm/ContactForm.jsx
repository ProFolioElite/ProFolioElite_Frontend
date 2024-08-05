// import React from "react";
import InputField from "./InputField";
import MessageArea from "./MessageArea";
import SendButton from "./SendButton";

function ContactForm() {
  return (
    <section className="flex flex-col items-center self-center mt-20 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-xl font-medium text-red-500">Contact me</h2>
      <div className="flex flex-wrap gap-5 items-center mt-8 text-sm text-zinc-500 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/724f12c0d9b9cb101da782541a3bf055c03104f17d6c1d9ac320003aacfd919c?apiKey=2bf0694f47d849e3ac7eb08b0242d721&&apiKey=2bf0694f47d849e3ac7eb08b0242d721"
          alt=""
          className="object-contain self-stretch my-auto aspect-[1.37] min-w-[240px] w-[563px] max-md:max-w-full"
        />
        <form className="flex flex-col self-stretch my-auto min-w-[240px] w-[613px] max-md:max-w-full">
          <InputField
            label="Enter email address"
            type="email"
            id="email"
            name="email"
          />
          <MessageArea
            label="Enter message..."
            id="message"
            name="message"
          />
          <SendButton />
        </form>
      </div>
    </section>
  );
}

export default ContactForm;