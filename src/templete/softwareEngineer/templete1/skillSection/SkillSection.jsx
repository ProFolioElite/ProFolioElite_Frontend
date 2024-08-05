// import React from 'react';
import SkillCard from "./SkillCard";

const skillsData = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a552f32ff498a8de76b1df38891c5455599df0286522f3c9560ff79eb518742c?apiKey=2bf0694f47d849e3ac7eb08b0242d721&&apiKey=2bf0694f47d849e3ac7eb08b0242d721",
    skillName: "HTML 5",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/343cb9c938a00aaae15634b092733601d3ce732f549152735c419edd927661f2?apiKey=2bf0694f47d849e3ac7eb08b0242d721&&apiKey=2bf0694f47d849e3ac7eb08b0242d721",
    skillName: "CSS3",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/92610360a7e8f3786a98c4d9c0561039e02cc8a5684fc6a85985432ed2ed2ef1?apiKey=2bf0694f47d849e3ac7eb08b0242d721&&apiKey=2bf0694f47d849e3ac7eb08b0242d721",
    skillName: "JavaScript",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2ff6fb530d0f7272e0c35d25cc21a8ff349c432a91c86c83f7c0ad2d5c6818f2?apiKey=2bf0694f47d849e3ac7eb08b0242d721&&apiKey=2bf0694f47d849e3ac7eb08b0242d721",
    skillName: "Bootstrap",
  },
];

function SkillsSection() {
  return (
    <section className="flex flex-col items-center  self-center align-middle  w-full min-h-[444px] max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full ">
      <div>
        <h2 className="text-xl font-medium text-center text-red-500">Skills</h2>
        <div className="flex flex-row  justify-between items-center  w-full">
          <div className="flex flex-col self-stretch my-auto ">
            <p className="text-lg text-zinc-500 max-md:max-w-full">
              I have a vast experience in the following web technologies:
            </p>
            <div className="flex flex-wrap gap-5 items-start mt-10 text-base text-center text-black max-md:max-w-full">
              {skillsData.map((skill, index) => (
                <SkillCard
                  key={index}
                  imageSrc={skill.imageSrc}
                  skillName={skill.skillName}
                />
              ))}
            </div>
          </div>
          <div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6e7ae39bdaacca91e7480a9f20d33aa77ec807a3973e365bb6797c89163d0e2?apiKey=2bf0694f47d849e3ac7eb08b0242d721&&apiKey=2bf0694f47d849e3ac7eb08b0242d721"
              alt="Illustration of web development skills"
              className="object-contain self-stretch my-auto aspect-[1.23] min-w-[240px] w-[511px] max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
