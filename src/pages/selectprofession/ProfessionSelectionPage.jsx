// src/ProfessionSelectionPage.js

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setProfession } from '../../features/user/userSlice';

import ProfessionCard from "./ProfessionCard";
// import {  } from 'react-router-dom';

import {
  FaCode,
  FaPaintBrush,
  FaPenFancy,
  FaChartLine,
  FaUsers,
  FaChartBar,
  FaBrain,
  FaPython,
  FaJava,
  FaProjectDiagram,
  FaDatabase,
  FaAndroid,
  FaApple,
  FaReact,
} from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { DiAngularSimple } from "react-icons/di";
import { useDispatch } from "react-redux";

const ProfessionSelectionPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelect = (profession) => {
    dispatch(setProfession(profession));
    navigate('/templates');
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
      title: "Frontend Developer",
    },
    {
      icon: <FaDatabase size={40} />,
      title: "Backend Developer",
    },
    {
      icon: <FaProjectDiagram size={40} />,
      title: "MERN Stack Developer",
    },
    {
      icon: <FaProjectDiagram size={40} />,
      title: "Full Stack Developer",
    },
    {
      icon: <FaJava size={40} />,
      title: "Java Full Stack Developer",
    },
    {
      icon: <FaPython size={40} />,
      title: "Python Full Stack Developer",
    },
    {
      icon: <FaBrain size={40} />,
      title: "AI/ML Developer",
    },
    {
      icon: <FaChartBar size={40} />,
      title: "Data Scientist",
    },
    {
      icon: <FaChartBar size={40} />,
      title: "Power BI Developer",
    },
    {
      icon: <FaUsers size={40} />,
      title: "Product Associate",
    },
    {
      icon: <FaAndroid size={40} />,
      title: "Android Developer",
    },
    {
      icon: <FaApple size={40} />,
      title: "iOS Developer",
    },
    {
      icon: <FaReact size={40} />,
      title: "React Native Developer",
    },
    {
      icon: <SiFlutter size={40} />,
      title: "Flutter Developer",
    },
    {
      icon: <DiAngularSimple size={40} />,
      title: "Angular Developer",
    },
    {
      icon: <FaReact size={40} />,
      title: "React.js Developer",
    },
  ];

  return (
    <section className="p-10 flex flex-col items-center justify-center min-h-screen py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <h2 className="mb-8 text-4xl font-bold text-center">
        Select Your Profession
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {professions.map((profession, index) => (
          <ProfessionCard
            // key={index}
            icon={profession.icon}
            title={profession.title}
            // onSelect={() => {
            //   setProfession(profession.title);
            //   handleSubmit();
            // }}
            key={index}
            onSelect={() => handleSelect(profession)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProfessionSelectionPage;
