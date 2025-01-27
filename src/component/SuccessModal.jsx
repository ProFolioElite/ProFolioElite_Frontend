// src/components/SuccessModal.js

import React from "react";

const SuccessModal = ({ show, message, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50  ">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-gradient-to-b from-black via-black to-gray-900 text-white p-6 rounded-lg border-2  border-purple-500 shadow-2xl z-10">
        <h2 className="text-2xl font-bold mb-4">Success</h2>
        <p>{message}</p>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2  text-sm font-bold text-black bg-purple-500 rounded-lg hover:bg-purple-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
