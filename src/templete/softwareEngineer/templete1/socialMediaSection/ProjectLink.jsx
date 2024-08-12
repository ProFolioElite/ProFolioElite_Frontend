// import React from 'react';

import { Link } from "react-router-dom";

function ProjectLink({ githubLink }) {
  return (
    <div className="flex flex-col items-center self-stretch my-auto min-w-[240px]">
      <h2 className="text-xl font-medium text-center text-white">
        {`More projects I've worked on`}
      </h2>
      <div className="flex gap-5 items-center mt-5 text-lg text-cyan-500">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/630e98788e30dc68dbd7d5ae5711f187a828f2a2ea0310c6ecc62ce4ad1203b7?apiKey=2bf0694f47d849e3ac7eb08b0242d721&&apiKey=2bf0694f47d849e3ac7eb08b0242d721"
          alt="GitHub icon"
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
        />
        <div className="self-stretch my-auto">
          @
          <span className="text-cyan-500">
            <Link to={githubLink}>{githubLink ? githubLink : null}</Link>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectLink;
