// import Animation from '../../component/Animation'

import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="text-center">
        <h1 className="text-5xl font-bold text-blue-600">
          Welcome to ProFolioElite
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Build, manage, and showcase your professional portfolio effortlessly.
        </p>
        <Link
          href="/signup"
          className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Get Started
        </Link>
        <Link
          to="/signin"
          className="mt-6 ml-2 inline-block px-7 py-3 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
        >
          Sign In
        </Link>
      </header>
      <div className=''>
      {/* <Animation/> */}
      </div>
      

      <section className="mt-16 max-w-4xl">
        <h2 className="text-3xl font-semibold text-gray-800">
          Why Choose ProFolioElite?
        </h2>
        <ul className="mt-4 list-disc list-inside">
          <li className="mt-2">🎨 Customizable Templates</li>
          <li className="mt-2">🔒 Secure Hosting</li>
          <li className="mt-2">📱 Responsive Design</li>
          <li className="mt-2">⚡ Real-Time Editing</li>
          <li className="mt-2">🌍 Showcase Your Work to the World</li>
        </ul>
      </section>
    </div>
  );
};

export default LandingPage;
