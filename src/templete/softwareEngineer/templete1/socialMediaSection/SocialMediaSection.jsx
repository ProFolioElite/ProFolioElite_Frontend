// import React from 'react';
import SocialMediaIcon from "./SocialMediaIcon";
import ProjectLink from "./ProjectLink";

const socialMediaIcons = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e0bb4a4ea22883a1b91eb12cffb0e466012ea148e8ebdd61a4bf2e4e0d8d634c?apiKey=2bf0694f47d849e3ac7eb08b0242d721&&apiKey=2bf0694f47d849e3ac7eb08b0242d721",
    alt: "Social media icon 1",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e5365edaa93ff730901b1895bddb279321bd84d20eb0d52fb85502d20b77046d?apiKey=2bf0694f47d849e3ac7eb08b0242d721&&apiKey=2bf0694f47d849e3ac7eb08b0242d721",
    alt: "Social media icon 2",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8b529b832f9a517e58a107dbe50f65b638908d117a3bbac59ef85c5b064c98df?apiKey=2bf0694f47d849e3ac7eb08b0242d721&&apiKey=2bf0694f47d849e3ac7eb08b0242d721",
    alt: "Social media icon 3",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/30f0db7d6e0d53c36a0c213da0122dec44095133e1af45f380ff127ce8967434?apiKey=2bf0694f47d849e3ac7eb08b0242d721&&apiKey=2bf0694f47d849e3ac7eb08b0242d721",
    alt: "Social media icon 4",
  },
];

function SocialMediaSection({ socialMedialDetials }) {
  return (
    <section className="flex relative flex-col justify-center items-center px-16 py-44 mt-16 w-full min-h-[444px] max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/50af8801c18c5e960ed639c018e2d3790d567ba311455cfa81a740229a1de75d?apiKey=2bf0694f47d849e3ac7eb08b0242d721&&apiKey=2bf0694f47d849e3ac7eb08b0242d721"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-wrap gap-5 justify-between items-center px-28 mb-0 w-full max-w-[1240px] max-md:px-5 max-md:mb-2.5 max-md:max-w-full">
        <div className="flex flex-col self-stretch my-auto min-w-[240px]">
          <h2 className="self-start text-xl font-medium text-center text-white">
            My social media links:
          </h2>
          <div className="flex gap-5 items-start mt-9">
            {socialMedialDetials
              ? socialMedialDetials.map((index, icon) => {
                  return (
                    <SocialMediaIcon
                      key={index}
                      src={icon.src}
                      alt={icon.alt}
                    />
                  );
                })
              : socialMediaIcons.map((icon, index) => (
                  <SocialMediaIcon key={index} src={icon.src} alt={icon.alt} />
                ))}
          </div>
        </div>
        <ProjectLink />
      </div>
    </section>
  );
}

export default SocialMediaSection;
