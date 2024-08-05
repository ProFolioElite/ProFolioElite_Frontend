// import React from "react";
import ProfileImage from "./ProfileImage";
import IntroText from "./IntroText";
import HireButton from "./HireButton";

function Top() {
  return (
    <main className="flex flex-row gap-5 items-center self-center mt-16 text-lg max-md:mt-10 max-md:max-w-full">
      <section className="flex  flex-row self-stretch my-auto min-w-[240px] w-[553px]  max-md:max-w-full">
        <div >
          <IntroText />
          <HireButton />
        </div>
        <div>
        <ProfileImage />
      
        </div>
        </section>
    </main>
  );
}

export default Top;
