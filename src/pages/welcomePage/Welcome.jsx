import  { useState } from 'react';
import { FaCheckCircle, FaQuestionCircle } from 'react-icons/fa';

const Welcome = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    {
      title: 'Step 1: Select a Template',
      description: 'Choose a template that fits your profession and style from our collection.',
      tooltip: 'Each template is customizable to showcase your unique strengths.',
    },
    {
      title: 'Step 2: Enter Personal Information',
      description: 'Fill in your name, contact details, and a professional summary.',
      tooltip: 'Make sure to highlight your career goals and achievements.',
    },
    {
      title: 'Step 3: Add Your Experience',
      description: 'Add your work experience, roles, and responsibilities.',
      tooltip: 'Focus on key contributions and the impact you made in your roles.',
    },
    {
      title: 'Step 4: Customize Portfolio',
      description: 'Include your skills, projects, certifications, and links to social media.',
      tooltip: 'Projects can include any work that demonstrates your technical skills.',
    },
    {
      title: 'Step 5: Preview & Publish',
      description: 'Review your portfolio, make final edits, and publish it.',
      tooltip: 'Ensure everything looks polished before sharing your portfolio with employers.',
    },
  ];

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <div className="p-6  text-gray-200 max-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-purple-500">Welcome to ProFolioElite!</h1>
      <div className="instruction-step">
        <h2 className="text-2xl font-semibold mb-2 text-gray-100">{steps[currentStep].title}</h2>
        <p className="text-lg text-gray-300">{steps[currentStep].description}</p>
        <div className="tooltip mt-2 text-gray-400 flex items-center">
          <FaQuestionCircle className="mr-2" title={steps[currentStep].tooltip} />
          <span>{steps[currentStep].tooltip}</span>
        </div>
        <div className="step-navigation mt-4">
          <button
            className={`px-4 py-2 mr-4 rounded-lg text-white ${
              currentStep === 0 ? 'bg-gray-700 cursor-not-allowed' : 'bg-purple-500 hover:bg-purple-600'
            }`}
            disabled={currentStep === 0}
            onClick={handlePrev}
          >
            Previous
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-white ${
              currentStep === steps.length - 1 ? 'bg-gray-700 cursor-not-allowed' : 'bg-purple-500 hover:bg-purple-600'
            }`}
            disabled={currentStep === steps.length - 1}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
        <div className="progress-indicator flex justify-start items-center mt-6 space-x-2">
          {steps.map((_, index) => (
            <span
              key={index}
              className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                index <= currentStep ? 'bg-purple-500 border-purple-500' : 'bg-gray-800 border-gray-500'
              } text-white`}
            >
              {index <= currentStep ? <FaCheckCircle /> : index + 1}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
