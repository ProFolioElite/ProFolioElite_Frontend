// import React from 'react'
import ContactForm from "./contactForm/ContactForm";
import Header from "./header/Header";
import ProjectsSection from "./projectSection/ProjectSection";
import SkillsSection from "./skillSection/SkillSection";
import SocialMediaSection from "./socialMediaSection/SocialMediaSection";
import Top from "./top/Top";

const Templete = ({
  profilePhoto,
  name,
  email,
  phone,
  about,
  profession,
  skills,
  experienceLevel,
  workExperience,
  openSourceContribution,
  projects,
  socialMediaLinks,
  navigationItems,
}) => {
  return (
    <>
      <Header
        navigationItems={navigationItems ? navigationItems : null}
        logo={profilePhoto ? profilePhoto : null}
      />
      <Top
        professionTitle={profession ? profession : null}
        ProfilePic={profilePhoto ? profilePhoto : null}
        aboutDetails={about ? about : null}
      />
      <SkillsSection skilDetails={skills ? skills : null} />
      <ProjectsSection projectDetails={projects ? projects : null} />
      <ContactForm />
      <SocialMediaSection
        socialMedialDetials={socialMediaLinks ? socialMediaLinks : null}
      />
    </>
  );
};

export default Templete;
