import { useState } from "react";
import {
  FaUser,
  FaBriefcase,
  FaCode,
  FaProjectDiagram,
  FaLink,
} from "react-icons/fa";
import {  useDispatch } from "react-redux";
import { inputUserDetialsInForm } from "../features/user/userSlice";
const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    profilePhoto: "",
    name: "",
    email: "",
    phone: "",
    about: "",
    profession: "",
    skills: [""],
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

  const [currentStep, setCurrentStep] = useState(0);
  const dispatch = useDispatch();

  const steps = [
    { label: "Personal Details", icon: <FaUser /> },
    { label: "Work Experience", icon: <FaBriefcase /> },
    { label: "Open Source Contributions", icon: <FaCode /> },
    { label: "Projects", icon: <FaProjectDiagram /> },
    { label: "Social Media Links", icon: <FaLink /> },
  ];

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
    // console.log(formData);
    // localStorage.setItem("intputUserDetials", formData);
    dispatch(inputUserDetialsInForm(formData));

    // Handle form submission here
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">{steps[currentStep].label}</h2>
      <div
        className="flex items-center justify-center  overflow-y-scroll  scrollbar-hide text-white  bg-gray-800 rounded-lg shadow-lg"
        style={{ height: "87vh" }}
      >
        <div
          className="w-full  bg-transparent text-white rounded-lg shadow-md p-5"
          style={{ height: "85vh" }}
        >
          <div className="flex mb-4">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`flex flex-col items-center flex-1 py-2 text-center ${
                  currentStep === index ? "bg-purple-600" : "bg-gray-700"
                } text-white rounded mx-1`}
              >
                <div className="text-2xl mb-1">{step.icon}</div>
                {/* <span className="text-sm">{step.label}</span> */}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-5">
            {currentStep === 0 && (
              <div className="mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block mb-2">Profile Photo</label>
                    <input
                      type="file"
                      name="profilePhoto"
                      onChange={handleFileChange}
                      className="w-full p-1  border-gray-600 h-10 rounded bg-gray-700 text-white "
                    />
                  </div>
                  {/* Uncomment these fields if needed */}
                  <div>
                    <label className="block mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-2 border rounded text-black"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2  border-gray-600 rounded bg-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-2  border-gray-600 rounded bg-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Experience Level</label>
                    <input
                      type="text"
                      name="experienceLevel"
                      value={formData.experienceLevel}
                      onChange={handleChange}
                      className="w-full p-2  border-gray-600 rounded bg-gray-700 text-white"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block mb-2">About Yourself</label>
                  <textarea
                    name="about"
                    value={formData.about}
                    onChange={handleChange}
                    className="w-full p-2  border-gray-600 rounded bg-gray-700 text-white"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Skills</label>
                  <textarea
                    name="skills"
                    value={formData.skills} // Join skills for display
                    onChange={handleChange}
                    className="w-full p-2  border-gray-600 rounded bg-gray-700 text-white"
                  />
                </div>
              </div>
            )}
            {currentStep === 1 && (
              <div className="mb-4">
                {/* <h3 className="text-xl font-bold mb-2">Work Experience</h3> */}
                {formData.workExperience.map((work, index) => (
                  <div
                    key={index}
                    className="mb-4 border p-4 rounded bg-gray-800"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-2">Company Name</label>
                        <input
                          type="text"
                          name="companyName"
                          value={work.companyName}
                          onChange={(e) => handleWorkExperienceChange(index, e)}
                          className="w-full p-2  border-gray-600 rounded bg-gray-700 text-white mb-2"
                        />
                      </div>
                      <div>
                        <label className="block mb-2">Designation</label>
                        <input
                          type="text"
                          name="designation"
                          value={work.designation}
                          onChange={(e) => handleWorkExperienceChange(index, e)}
                          className="w-full p-2  border-gray-600 rounded bg-gray-700 text-white mb-2"
                        />
                      </div>
                      <div>
                        <label className="block mb-2">Project Worked On</label>
                        <input
                          type="text"
                          name="projectWorkedOn"
                          value={work.projectWorkedOn}
                          onChange={(e) => handleWorkExperienceChange(index, e)}
                          className="w-full p-2  border-gray-600 rounded bg-gray-700 text-white mb-2"
                        />
                      </div>
                      <div>
                        <label className="block mb-2">Project Brief</label>
                        <textarea
                          name="projectBrief"
                          value={work.projectBrief}
                          onChange={(e) => handleWorkExperienceChange(index, e)}
                          className="w-full p-2  border-gray-600 rounded bg-gray-700 text-white mb-2"
                        />
                      </div>
                      <div>
                        <label className="block mb-2">Contribution</label>
                        <textarea
                          name="contribution"
                          value={work.contribution}
                          onChange={(e) => handleWorkExperienceChange(index, e)}
                          className="w-full p-2  border-gray-600 rounded bg-gray-700 text-white mb-2"
                        />
                      </div>
                      <div>
                        <label className="block mb-2">Document</label>
                        <input
                          type="file"
                          name="document"
                          onChange={(e) => handleWorkExperienceChange(index, e)}
                          className="w-full p-2  border-gray-600 rounded bg-gray-700 text-white"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addWorkExperience}
                  className="bg-purple-600 text-white py-2 px-4 rounded"
                >
                  Add Work Experience
                </button>
              </div>
            )}
            {currentStep === 2 && (
              <div className="mb-4">
                {/* <h3 className="text-xl font-bold mb-2">
                Open Source Contributions
              </h3> */}
                {formData.openSourceContribution.map((contribution, index) => (
                  <div
                    key={index}
                    className="mb-4 border p-4 rounded bg-gray-800"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-2">Description</label>
                        <textarea
                          name="description"
                          value={contribution.description}
                          onChange={(e) => handleOpenSourceChange(index, e)}
                          className="w-full p-2  border-gray-600 rounded bg-gray-700 text-white mb-2"
                        />
                      </div>
                      <div>
                        <label className="block mb-2">Skill Set</label>
                        <input
                          type="text"
                          name="skillSet"
                          value={contribution.skillSet}
                          onChange={(e) => handleOpenSourceChange(index, e)}
                          className="w-full p-2  border-gray-600 rounded bg-gray-700 text-white  mb-2"
                        />
                      </div>
                      <div>
                        <label className="block mb-2">Link</label>
                        <input
                          type="url"
                          name="link"
                          value={contribution.link}
                          onChange={(e) => handleOpenSourceChange(index, e)}
                          className="w-full p-2  border-gray-600 rounded bg-gray-700 text-white  mb-2"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addOpenSourceContribution}
                  className="mt-2 bg-purple-600 text-white py-2 px-4 rounded"
                >
                  Add Open Source Contribution
                </button>
              </div>
            )}
            {currentStep === 3 && (
              <div className="mb-4">
                {/* <h3 className="text-xl font-bold mb-2">Projects</h3> */}
                {formData.projects.map((project, index) => (
                  <div
                    key={index}
                    className="mb-4 border p-4 rounded bg-gray-800"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-2">Description</label>
                        <textarea
                          name="description"
                          value={project.description}
                          onChange={(e) => handleProjectsChange(index, e)}
                          className="w-full p-2  border-gray-600 rounded bg-gray-700 text-white  mb-2"
                        />
                      </div>
                      <div>
                        <label className="block mb-2">Skill Set</label>
                        <input
                          type="text"
                          name="skillSet"
                          value={project.skillSet}
                          onChange={(e) => handleProjectsChange(index, e)}
                          className="w-full p-2  border-gray-600 rounded bg-gray-700 text-white mb-2"
                        />
                      </div>
                      <div>
                        <label className="block mb-2">Repository Link</label>
                        <input
                          type="url"
                          name="repoLink"
                          value={project.repoLink}
                          onChange={(e) => handleProjectsChange(index, e)}
                          className="w-full p-2 border  border-gray-600 rounded bg-gray-700 text-white mb-2"
                        />
                      </div>
                      <div>
                        <label className="block mb-2">Live Link</label>
                        <input
                          type="url"
                          name="liveLink"
                          value={project.liveLink}
                          onChange={(e) => handleProjectsChange(index, e)}
                          className="w-full p-2  border-gray-600 rounded bg-gray-700 text-white mb-2"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={()=>{addProject()}}
                  className="mt-2 bg-purple-600 text-white py-2 px-4 rounded"
                >
                  Add Project
                </button>
              </div>
            )}
            {currentStep === 4 && (
              <div className="mb-4">
                {/* <h3 className="text-xl font-bold mb-2">Social Media Links</h3> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2">LinkedIn</label>
                    <input
                      type="url"
                      name="linkedIn"
                      value={formData.socialMediaLinks.linkedIn}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          socialMediaLinks: {
                            ...formData.socialMediaLinks,
                            linkedIn: e.target.value,
                          },
                        })
                      }
                      className="w-full p-2 border  border-gray-600 rounded bg-gray-700 text-white mb-2"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Instagram</label>
                    <input
                      type="url"
                      name="instagram"
                      value={formData.socialMediaLinks.instagram}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          socialMediaLinks: {
                            ...formData.socialMediaLinks,
                            instagram: e.target.value,
                          },
                        })
                      }
                      className="w-full p-2 border  border-gray-600 rounded bg-gray-700 text-white mb-2"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">LeetCode</label>
                    <input
                      type="url"
                      name="leetCode"
                      value={formData.socialMediaLinks.leetCode}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          socialMediaLinks: {
                            ...formData.socialMediaLinks,
                            leetCode: e.target.value,
                          },
                        })
                      }
                      className="w-full p-2 border  border-gray-600 rounded bg-gray-700 text-white mb-2"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">GitHub</label>
                    <input
                      type="url"
                      name="github"
                      value={formData.socialMediaLinks.github}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          socialMediaLinks: {
                            ...formData.socialMediaLinks,
                            github: e.target.value,
                          },
                        })
                      }
                      className="w-full p-2 border  border-gray-600 rounded bg-gray-700 text-white mb-2"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Stack Overflow</label>
                    <input
                      type="url"
                      name="stackOverflow"
                      value={formData.socialMediaLinks.stackOverflow}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          socialMediaLinks: {
                            ...formData.socialMediaLinks,
                            stackOverflow: e.target.value,
                          },
                        })
                      }
                      className="w-full p-2 border  border-gray-600 rounded bg-gray-700 text-white mb-2"
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="bg-gray-600 text-white py-2 px-4 rounded"
              >
                Previous
              </button>
              {currentStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-purple-600 text-white py-2 px-4 rounded"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-green-600 text-white py-2 px-4 rounded"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MultiStepForm;
