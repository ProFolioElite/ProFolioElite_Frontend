// import React from 'react'
import ContactForm from "./contactForm/ContactForm";
import Header from "./header/Header";
import ProjectsSection from "./projectSection/ProjectSection";
import SkillsSection from "./skillSection/SkillSection";
import SocialMediaSection from "./socialMediaSection/SocialMediaSection";
import Top from "./top/Top";

const Templete = () => {
  return (
    <>
      <Header />
      <Top />
      <SkillsSection />
      <ProjectsSection />
      <ContactForm />
      <SocialMediaSection />
    </>
  );
};

export default Templete;
