// src/components/FeatureCard.js

// import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg group hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="mb-4 text-purple-500">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white group-hover:text-purple-500 transition-colors duration-300 ease-in-out">
        {title}
      </h3>
      <p className="mt-4 text-lg text-gray-300 text-center">{description}</p>
    </div>
  );
};

export default FeatureCard;
