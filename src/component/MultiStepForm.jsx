import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    profilePhoto: "",
    name: "",
    email: "",
    phone: "",
    about: "",
    profession: "",
    skills: "",
    experienceLevel: "",
    workExperience: [
      {
        companyName: "",
        designation: "",
        projectWorkedOn: "",
        projectBrief: "",
        contribution: "",
        document: "",
      },
    ],
    openSourceContribution: [
      {
        description: "",
        skillSet: "",
        link: "",
      },
    ],
    projects: [
      {
        description: "",
        skillSet: "",
        repoLink: "",
        liveLink: "",
      },
    ],
    socialMediaLinks: {
      linkedIn: "",
      instagram: "",
      leetCode: "",
      github: "",
      stackOverflow: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleWorkExperienceChange = (index, e) => {
    const { name, value, files } = e.target;
    const updatedWorkExperience = [...formData.workExperience];
    if (files) {
      updatedWorkExperience[index][name] = files[0];
    } else {
      updatedWorkExperience[index][name] = value;
    }
    setFormData({ ...formData, workExperience: updatedWorkExperience });
  };

  const handleOpenSourceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedOpenSource = [...formData.openSourceContribution];
    updatedOpenSource[index][name] = value;
    setFormData({ ...formData, openSourceContribution: updatedOpenSource });
  };

  const handleProjectsChange = (index, e) => {
    const { name, value } = e.target;
    const updatedProjects = [...formData.projects];
    updatedProjects[index][name] = value;
    setFormData({ ...formData, projects: updatedProjects });
  };

  const addWorkExperience = () => {
    setFormData({
      ...formData,
      workExperience: [
        ...formData.workExperience,
        {
          companyName: "",
          designation: "",
          projectWorkedOn: "",
          projectBrief: "",
          contribution: "",
          document: "",
        },
      ],
    });
  };

  const addOpenSourceContribution = () => {
    setFormData({
      ...formData,
      openSourceContribution: [
        ...formData.openSourceContribution,
        {
          description: "",
          skillSet: "",
          link: "",
        },
      ],
    });
  };

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [
        ...formData.projects,
        {
          description: "",
          skillSet: "",
          repoLink: "",
          liveLink: "",
        },
      ],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission here
  };

  return (
    <div className="details-form min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-black to-gray-900 text-white">
      <div className="w-full max-w-5xl bg-transparent text-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-4">Personal Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2">Profile Photo</label>
              <input
                type="file"
                name={<FaUpload />}
                onChange={handleFileChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded  text-black"
              />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded text-black"
              />
            </div>
            <div>
              <label className="block mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded  text-black"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2">About Yourself</label>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              className="w-full p-2 border rounded  text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Profession</label>
            <input
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              className="w-full p-2 border rounded  text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Skills</label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full p-2 border rounded  text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Experience Level</label>
            <input
              type="text"
              name="experienceLevel"
              value={formData.experienceLevel}
              onChange={handleChange}
              className="w-full p-2 border rounded  text-black"
            />
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Work Experience</h3>
            {formData.workExperience.map((work, index) => (
              <div key={index} className="mb-4 border p-4 rounded">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2">Company Name</label>
                    <input
                      type="text"
                      name="companyName"
                      value={work.companyName}
                      onChange={(e) => handleWorkExperienceChange(index, e)}
                      className="w-full p-2 border rounded mb-2  text-black"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Designation</label>
                    <input
                      type="text"
                      name="designation"
                      value={work.designation}
                      onChange={(e) => handleWorkExperienceChange(index, e)}
                      className="w-full p-2 border rounded mb-2  text-black"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Project Worked On</label>
                    <input
                      type="text"
                      name="projectWorkedOn"
                      value={work.projectWorkedOn}
                      onChange={(e) => handleWorkExperienceChange(index, e)}
                      className="w-full p-2 border rounded mb-2  text-black"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Project Brief</label>
                    <textarea
                      name="projectBrief"
                      value={work.projectBrief}
                      onChange={(e) => handleWorkExperienceChange(index, e)}
                      className="w-full p-2 border rounded mb-2  text-black"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Contribution</label>
                    <textarea
                      name="contribution"
                      value={work.contribution}
                      onChange={(e) => handleWorkExperienceChange(index, e)}
                      className="w-full p-2 border rounded mb-2  text-black"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">
                      Upload Document/Certificate
                    </label>
                    <input
                      type="file"
                      name="document"
                      onChange={(e) => handleWorkExperienceChange(index, e)}
                      className="w-full p-2 border rounded  text-black"
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addWorkExperience}
              className="w-full  bg-purple-500  hover:bg-purple-600 text-white p-2 rounded"
            >
              Add More Experience
            </button>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Open Source Contribution</h3>
            {formData.openSourceContribution.map((contribution, index) => (
              <div key={index} className="mb-4 border p-4 rounded">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2">Description</label>
                    <textarea
                      name="description"
                      value={contribution.description}
                      onChange={(e) => handleOpenSourceChange(index, e)}
                      className="w-full p-2 border rounded mb-2  text-black"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Skill Set</label>
                    <input
                      type="text"
                      name="skillSet"
                      value={contribution.skillSet}
                      onChange={(e) => handleOpenSourceChange(index, e)}
                      className="w-full p-2 border rounded mb-2  text-black"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Link</label>
                    <input
                      type="url"
                      name="link"
                      value={contribution.link}
                      onChange={(e) => handleOpenSourceChange(index, e)}
                      className="w-full p-2 border rounded  text-black"
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addOpenSourceContribution}
              className="w-full  bg-purple-500  hover:bg-purple-600 text-white p-2 rounded"
            >
              Add More Contribution
            </button>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Projects</h3>
            {formData.projects.map((project, index) => (
              <div key={index} className="mb-4 border p-4 rounded">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2">Project Description</label>
                    <textarea
                      name="description"
                      value={project.description}
                      onChange={(e) => handleProjectsChange(index, e)}
                      className="w-full p-2 border rounded mb-2  text-black"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Skill Set Used</label>
                    <input
                      type="text"
                      name="skillSet"
                      value={project.skillSet}
                      onChange={(e) => handleProjectsChange(index, e)}
                      className="w-full p-2 border rounded mb-2  text-black"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">GitHub Link</label>
                    <input
                      type="url"
                      name="repoLink"
                      value={project.repoLink}
                      onChange={(e) => handleProjectsChange(index, e)}
                      className="w-full p-2 border rounded mb-2  text-black"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Live Link</label>
                    <input
                      type="url"
                      name="liveLink"
                      value={project.liveLink}
                      onChange={(e) => handleProjectsChange(index, e)}
                      className="w-full p-2 border rounded  text-black"
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addProject}
              className="w-full  bg-purple-500  hover:bg-purple-600 text-white p-2 rounded"
            >
              Add More Project
            </button>
          </div>

          <div className="mb-4">
            <label className="block mb-2">Social Media Links</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="linkedIn"
                value={formData.socialMediaLinks.linkedIn}
                placeholder="LinkedIn"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    socialMediaLinks: {
                      ...formData.socialMediaLinks,
                      linkedIn: e.target.value,
                    },
                  })
                }
                className="w-full p-2 border rounded mb-2  text-black"
              />
              <input
                type="text"
                name="instagram"
                value={formData.socialMediaLinks.instagram}
                placeholder="Instagram"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    socialMediaLinks: {
                      ...formData.socialMediaLinks,
                      instagram: e.target.value,
                    },
                  })
                }
                className="w-full p-2 border rounded mb-2  text-black"
              />
              <input
                type="text"
                name="leetCode"
                value={formData.socialMediaLinks.leetCode}
                placeholder="LeetCode"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    socialMediaLinks: {
                      ...formData.socialMediaLinks,
                      leetCode: e.target.value,
                    },
                  })
                }
                className="w-full p-2 border text-black rounded mb-2  text-black"
              />
              <input
                type="text"
                name="github"
                value={formData.socialMediaLinks.github}
                placeholder="GitHub"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    socialMediaLinks: {
                      ...formData.socialMediaLinks,
                      github: e.target.value,
                    },
                  })
                }
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="text"
                name="stackOverflow"
                value={formData.socialMediaLinks.stackOverflow}
                placeholder="Stack Overflow"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    socialMediaLinks: {
                      ...formData.socialMediaLinks,
                      stackOverflow: e.target.value,
                    },
                  })
                }
                className="w-full p-2 border rounded  text-black"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full  bg-purple-500  hover:bg-purple-600 text-white p-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;
