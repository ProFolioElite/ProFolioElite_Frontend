// import Animation from '../../component/Animation'

// import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-black to-gray-900 text-white">
      <header className="sticky w-full p-6">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold">ProFolioElite</div>
          <div>
            <a
              href="/signup"
              className="px-4 py-2 text-sm font-bold text-black bg-purple-500 rounded-lg hover:bg-purple-600"
            >
              Get Started
            </a>
          </div>
        </nav>
      </header>
      <main className="flex flex-col p-20 items-center justify-center flex-1 w-full px-4 text-center">
        <div className="bg-black text-white rounded-full px-4 py-2 mb-4">
          <span role="img" aria-label="sparkles">
            ✨
          </span>{" "}
          Introducing ProFolioElite 2.0{" "}
          <span role="img" aria-label="sparkles">
            ✨
          </span>
        </div>
        <h1 className="text-5xl font-bold">
          The Best Portfolio Building Experience Ever Made
        </h1>
        <p className="mt-4 text-lg">
          Create, manage, and showcase your professional portfolio effortlessly.{" "}
          <br /> Get noticed. Get hired.
        </p>
        <div className="mt-8">
          <a
            href="/signup"
            className="px-8 py-3 text-lg font-bold text-black bg-purple-500 rounded-lg hover:bg-purple-600"
          >
            Get Started
          </a>
        </div>
      </main>
      <section className="relative m-20 flex items-center justify-center w-full h-screen bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-[200px] font-bold text-gray-800 opacity-25">
            10M
          </h1>
        </div>
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold">
            ProFolioElite saves professionals over{" "}
            <span className="text-gradient">10 million hours</span> every single
            year.
          </h2>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center min-h-screen py-20  text-white">
        <h2 className="mb-8 text-4xl font-bold text-center">
          Build Your Portfolio in a Few Simple Steps
        </h2>
        <div className="flex flex-col items-center justify-center w-full space-y-8 md:flex-row md:space-y-0 md:space-x-8">
          <div className="flex flex-col items-center justify-center p-6 text-center bg-gray-800 rounded-lg shadow-lg">
            <div className="text-3xl font-bold">1</div>
            <p className="mt-4 text-lg">Sign up and create your account</p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 text-center bg-gray-800 rounded-lg shadow-lg">
            <div className="text-3xl font-bold">2</div>
            <p className="mt-4 text-lg">Choose your profession</p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 text-center bg-gray-800 rounded-lg shadow-lg">
            <div className="text-3xl font-bold">3</div>
            <p className="mt-4 text-lg">Select a template and customize</p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 text-center bg-gray-800 rounded-lg shadow-lg">
            <div className="text-3xl font-bold">4</div>
            <p className="mt-4 text-lg">Publish and share your portfolio</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;