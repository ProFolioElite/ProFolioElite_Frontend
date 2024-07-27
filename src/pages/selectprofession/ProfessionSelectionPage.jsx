// src/ProfessionSelectionPage.js

import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfessionSelectionPage = () => {
  const [profession, setProfession] = useState('');
  const navigate = useNavigate();

  const handleProfessionChange = (e) => {
    setProfession(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (profession) {
      navigate(`/templates/${profession}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">Select Your Profession</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="profession" className="block text-sm font-medium text-gray-700">
              Profession
            </label>
            <select
              id="profession"
              value={profession}
              onChange={handleProfessionChange}
              required
              className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="" disabled>Select your profession</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="writer">Writer</option>
              <option value="photographer">Photographer</option>
              {/* Add more professions as needed */}
            </select>
          </div>
          <button
            type="submit"
            className="block w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Show Templates
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfessionSelectionPage;
