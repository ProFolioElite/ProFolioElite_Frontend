// import React from 'react';

const Setting = () => {
  return (
    <div className="p-5 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-white">Settings</h2>
      <div className="mb-4">
        <label className="block mb-2 text-gray-400">Change Password</label>
        <input
          type="password"
          placeholder="New Password"
          className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-400">Email Notifications</label>
        <select className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white">
          <option>Enabled</option>
          <option>Disabled</option>
        </select>
      </div>
      <button className="bg-purple-600 text-white py-2 px-4 rounded">
        Save Changes
      </button>
    </div>
  );
};

export default Setting;
