// src/components/TemplatePage.js

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchTemplates } from '../../features/user/userSlice';

const TemplatePage = () => {
  const dispatch = useDispatch();
  const { profession, templates, status, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (profession) {
      // dispatch(fetchTemplates(profession));
    }
  }, [profession, dispatch]);

  return (
    <div className="min-h-screen py-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8">
        Templates for {profession}
      </h2>
      {status === 'loading' && <p>Loading templates...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={template.image}
                alt={template.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold">{template.name}</h3>
                <p className="mt-2 text-gray-600">{template.description}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                  Choose Template
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TemplatePage;
