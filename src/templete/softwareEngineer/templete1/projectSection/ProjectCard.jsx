// import React from 'react';

function ProjectCard({ image, description }) {
  return (
    <article className="flex flex-col justify-center items-center pb-3 bg-blue-950 min-w-[240px] w-[372px]">
      <img loading="lazy" src={image} alt="Project preview" className="object-contain self-stretch w-full aspect-[1.35]" />
      <p className="gap-2.5 p-2.5 mt-5 max-w-full text-base text-white text-opacity-90 w-[372px]">
        {description}
      </p>
      <button className="flex gap-1 justify-center items-center px-4 pt-2 pb-3.5 mt-5 text-sm font-medium text-white rounded bg-slate-700 bg-opacity-10">
        <span className="self-stretch my-auto">Learn More</span>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e2f5da840f31172de52b2b2d6e29c61c83217451ecd8f6d3e92505b31bec483?apiKey=2bf0694f47d849e3ac7eb08b0242d721&&apiKey=2bf0694f47d849e3ac7eb08b0242d721" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
      </button>
    </article>
  );
}

export default ProjectCard;