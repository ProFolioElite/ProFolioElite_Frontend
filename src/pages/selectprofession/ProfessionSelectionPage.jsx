// src/ProfessionSelectionPage.js

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfessionCard from "./ProfessionCard";

import { FaCode, FaPaintBrush, FaPenFancy, FaChartLine, FaUsers, FaChartBar, FaBrain, FaPython, FaJava, FaProjectDiagram, FaDatabase, FaAndroid, FaApple, FaReact } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { DiAngularSimple } from "react-icons/di";

const ProfessionSelectionPage = () => {
  const [profession, setProfession] = useState("");
  const navigate = useNavigate();

  // const handleProfessionChange = (e) => {
  //   setProfession(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (profession) {
      navigate(`/templates/${profession}`);
    }
  };
  const professions = [
    {
      icon: <FaCode size={40} />,
      title: "Software Engineer",
    },
    {
      icon: <FaPaintBrush size={40} />,
      title: "UI/UX Designer",
    },
    {
      icon: <FaPenFancy size={40} />,
      title: "Content Writer",
    },
    {
      icon: <FaChartLine size={40} />,
      title: "Data Analyst",
    },
    {
      icon: <FaCode size={40} />,
      title: 'Frontend Developer'
    },
    {
      icon: <FaDatabase size={40} />,
      title: 'Backend Developer'
    },
    {
      icon: <FaProjectDiagram size={40} />,
      title: 'MERN Stack Developer'
    },
    {
      icon: <FaProjectDiagram size={40} />,
      title: 'Full Stack Developer'
    },
    {
      icon: <FaJava size={40} />,
      title: 'Java Full Stack Developer'
    },
    {
      icon: <FaPython size={40} />,
      title: 'Python Full Stack Developer'
    },
    {
      icon: <FaBrain size={40} />,
      title: 'AI/ML Developer'
    },
    {
      icon: <FaChartBar size={40} />,
      title: 'Data Scientist'
    },
    {
      icon: <FaChartBar size={40} />,
      title: 'Power BI Developer'
    },
    {
      icon: <FaUsers size={40} />,
      title: 'Product Associate'
    },
    {
      icon: <FaAndroid size={40} />,
      title: 'Android Developer'
    },
    {
      icon: <FaApple size={40} />,
      title: 'iOS Developer'
    },
    {
      icon: <FaReact size={40} />,
      title: 'React Native Developer'
    },
    {
      icon: <SiFlutter size={40} />,
      title: 'Flutter Developer'
    },
    {
      icon: <DiAngularSimple size={40} />,
      title: 'Angular Developer'
    },
    {
      icon: <FaReact size={40} />,
      title: 'React.js Developer'
    }
  ];

  return (
    // <div className="flex items-center justify-center min-h-screen bg-gray-100">
    //   <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
    //     <h2 className="text-2xl font-bold text-center text-gray-900">Select Your Profession</h2>
    //     <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
    //       <div>
    //         <label htmlFor="profession" className="block text-sm font-medium text-gray-700">
    //           Profession
    //         </label>
    //         <select
    //           id="profession"
    //           value={profession}
    //           onChange={handleProfessionChange}
    //           required
    //           className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //         >
    //           <option value="" disabled>Select your profession</option>
    //           <option value="developer">Developer</option>
    //           <option value="designer">Designer</option>
    //           <option value="writer">Writer</option>
    //           <option value="photographer">Photographer</option>
    //           {/* Add more professions as needed */}
    //         </select>
    //       </div>
    //       <button
    //         type="submit"
    //         className="block w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //       >
    //         Show Templates
    //       </button>
    //     </form>
    //   </div>
    // </div>
    <section className="p-10 flex flex-col items-center justify-center min-h-screen py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <h2 className="mb-8 text-4xl font-bold text-center">
        Select Your Profession
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {professions.map((profession, index) => (
          <ProfessionCard
            key={index}
            icon={profession.icon}
            title={profession.title}
            onSelect={() => {
              setProfession(profession.title);
              handleSubmit();
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ProfessionSelectionPage;
