// src/TemplatesPage.js

// import  from 'react';
import { useParams } from 'react-router-dom';

const TemplatesPage = () => {
  const { profession } = useParams();
  console.log(profession);

  const templates = {
    developer: ['Developer Template 1', 'Developer Template 2'],
    designer: ['Designer Template 1', 'Designer Template 2'],
    writer: ['Writer Template 1', 'Writer Template 2'],
    photographer: ['Photographer Template 1', 'Photographer Template 2'],
    // Add more templates for other professions
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-900">
        Templates for
         {/* {profession.charAt(0).toUpperCase() + profession.slice(1)} */}
      </h2>
      <div className="mt-8 space-y-6">
        {/* {templates[profession]?.map((template, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md">
            {template}
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default TemplatesPage;
