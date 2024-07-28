// src/components/Features.js

// import React from 'react';
import { FaRocket, FaMagic, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import FeatureCard from './FeatureCard';

const Features = () => {
  const features = [
    {
      icon: <FaRocket size={40} />,
      title: 'Quick Setup',
      description: 'Set up your portfolio in just a few steps with our easy-to-use interface.'
    },
    {
      icon: <FaMagic size={40} />,
      title: 'Customizable Templates',
      description: 'Choose from a variety of 3D templates built with Three.js to make your portfolio stand out.'
    },
    {
      icon: <FaChartLine size={40} />,
      title: 'Real-time Analytics',
      description: 'Track the performance of your portfolio with our real-time analytics feature.'
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: 'Secure and Reliable',
      description: 'Your data is safe with us. We use top-notch security measures to protect your information.'
    }
  ];

  return (
    <section id="features" className="flex flex-col items-center justify-center min-h-screen py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <h2 className="mb-8 text-4xl font-bold text-center">
        Key Features of ProFolioElite
      </h2>
      <p className="mb-12 text-xl text-center text-gray-300">
        Discover how ProFolioElite can help you create a professional portfolio effortlessly.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
