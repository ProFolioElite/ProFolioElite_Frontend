// import React from "react";
import ProfileImage from "./ProfileImage";
import IntroText from "./IntroText";
import HireButton from "./HireButton";

function Top({ professionTitle, aboutDetails, ProfilePic }) {
  return (
    <main className="flex flex-row gap-5 items-center self-center mt-16 text-lg max-md:mt-10 max-md:max-w-full">
      <section className="flex flex-row  gap-5 items-center self-center mt-20 max-md:mt-10 max-md:max-w-full">
        <div>
          <IntroText
            professionTitle={professionTitle ? professionTitle : null}
            aboutDetails={aboutDetails ? aboutDetails : null}
          />
          <HireButton />
        </div>
        <div>
          <ProfileImage ProfilePic={ProfilePic ? ProfilePic : null} />
        </div>
      </section>
    </main>
  );
}

export default Top;
