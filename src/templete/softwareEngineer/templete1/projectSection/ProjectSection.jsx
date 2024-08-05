// import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8b6164471863802594b4f042e0a793217b9af3160b8871a1b0f4b2ebfa7f7803?apiKey=2bf0694f47d849e3ac7eb08b0242d721&&apiKey=2bf0694f47d849e3ac7eb08b0242d721",
    description: "Made a social media manager template using HTML 5, CSS and JS.",
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7b3a025122169175f831455e134a73a11b2dc227967cd9915a2c45f77bdc7537?apiKey=2bf0694f47d849e3ac7eb08b0242d721&&apiKey=2bf0694f47d849e3ac7eb08b0242d721",
    description: "Made a simple card page using HTML 5 and CSS 3",
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a717e4b429b635b2344ea7ba3a8f28e8289e3df8b6aebaf3aef57d4d00e70a82?apiKey=2bf0694f47d849e3ac7eb08b0242d721&&apiKey=2bf0694f47d849e3ac7eb08b0242d721",
    description: "Made an I.P address tracking website.",
  }
];

function ProjectsSection() {
  return (
    <section className="flex flex-col justify-center items-center pt-8 pb-10 mt-16 w-full bg-slate-700 max-md:mt-10 max-md:max-w-full">
      <header className="flex flex-col items-center text-white text-opacity-90">
        <div className="flex gap-4 items-end text-xl font-medium whitespace-nowrap">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f322bebdeb5da7805aaa85f42de087fe34b432d062dbb20afdc32fcfaec80bc7?apiKey=2bf0694f47d849e3ac7eb08b0242d721&&apiKey=2bf0694f47d849e3ac7eb08b0242d721" alt="" className="object-contain shrink-0 aspect-[1.08] w-[26px]" />
          <h2>Projects</h2>
        </div>
        <p className="mt-2 text-lg">A select number of projects</p>
      </header>
      <div className="flex flex-wrap gap-5 justify-between items-start mt-6 max-w-full text-center w-[1241px]">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} image={project.image} description={project.description} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;