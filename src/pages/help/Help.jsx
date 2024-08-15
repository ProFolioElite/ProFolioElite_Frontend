import React from "react";

const Help = () => {
  return (
    <div className="p-5 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-white">Help & Support</h2>
      <p className="mb-4 text-gray-400">
        If you have any questions or need assistance, please reach out to us.
      </p>
      <div className="mb-4">
        <label className="block mb-2 text-gray-400">Contact Us</label>
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-400">Message</label>
        <textarea
          rows="4"
          placeholder="Type your message here..."
          className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
        ></textarea>
      </div>
      <button className="bg-purple-600 text-white py-2 px-4 rounded">
        Send Message
      </button>
    </div>
  );
};

export default Help;
