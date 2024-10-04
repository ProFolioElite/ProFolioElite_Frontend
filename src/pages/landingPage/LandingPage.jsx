// import Animation from '../../component/Animation'

// import { Link } from "react-router-dom";
// import { ReactComponent as Logo }  from '../../assets/logo.svg'
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Features from "./Feature";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      title: "Graphic Designer",
      image: "path/to/image1.jpg",
      text: "ProFolioElite helped me build my portfolio effortlessly. The templates are stunning and easy to customize.",
    },
    {
      name: "John Smith",
      title: "Web Developer",
      image: "path/to/image2.jpg",
      text: "The best portfolio builder I have ever used. Highly recommended for professionals looking to showcase their work.",
    },
    {
      name: "Sarah Lee",
      title: "Photographer",
      image: "path/to/image3.jpg",
      text: "Amazing tool! It saved me so much time and the end result looks fantastic. Love the 3D templates!",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-black to-gray-900 text-white">
        <header className="sticky top-0 w-full  bg-gray-800 p-6 ">
          <nav className="flex items-center justify-between">
            <div className="text-xl font-bold">
              {/* <div className="mb-4 md:mb-0"> */}
              <a href="/" className="m-2 text-2xl font-bold">
                {`{(</>)}`}
              </a>
              {/* </div> */}
            </div>
            <div>
              {/* <Link
                to="/signup"
                className="px-4 py-2 text-sm font-bold text-black bg-purple-500 rounded-lg hover:bg-purple-600"
              >
                Get Started
              </a> */}
              <Link
                to="/signup"
                className="px-4 py-2 text-sm font-bold text-black bg-purple-500 rounded-lg hover:bg-purple-600"
              >
                Get Started
              </Link>
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
            Create, manage, and showcase your professional portfolio
            effortlessly. <br /> Get noticed. Get hired.
          </p>
          <div className="mt-8">
            <Link
              to="/signup"
              className="px-8 py-3 text-lg font-bold text-black bg-purple-500 rounded-lg hover:bg-purple-600"
            >
              Get Started
            </Link>
          </div>
        </main>
        <section className="relative m-20 flex items-center justify-center w-full h-screen ">
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-[200px] font-bold text-gray-800 opacity-25">
              10M
            </h1>
          </div>
          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-bold">
              ProFolioElite saves professionals over{" "}
              <span className="text-gradient">10 million hours</span> every
              single year.
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
        {/* <section className="flex flex-col items-center justify-center min-h-screen py-20 bg-gradient-to-b from-gray-900 to-black text-white">
          <h2 className="mb-8 text-4xl font-bold text-center">
            What Our Users Say
          </h2>
          <div className="flex flex-col items-center justify-center w-full space-y-8 md:flex-row md:space-y-0 md:space-x-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 text-center bg-gray-800 rounded-lg shadow-lg"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 mb-4 rounded-full"
                />
                <h3 className="text-2xl font-bold">{testimonial.name}</h3>
                <p className="mt-2 text-sm font-semibold text-gray-400">
                  {testimonial.title}
                </p>
                <p className="mt-4 text-lg">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </section> */}
        <section>
          <Features />
        </section>
        <section className="flex flex-col items-center justify-center min-h-screen py-20 bg-gradient-to-b from-gray-900 to-black text-white">
          <h2 className="mb-8 text-4xl font-bold text-center">
            What Our Users Say
          </h2>
          <div className="flex flex-col items-center justify-center w-full space-y-8 md:flex-row md:space-y-0 md:space-x-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center justify-center p-6 text-center bg-gray-800 rounded-lg shadow-lg group hover:shadow-xl transition-shadow duration-300 ease-in-out"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 mb-4 rounded-full border-4 border-transparent group-hover:border-purple-500 transition-colors duration-300 ease-in-out"
                />
                <h3 className="text-2xl font-bold group-hover:text-purple-500 transition-colors duration-300 ease-in-out">
                  {testimonial.name}
                </h3>
                <p className="mt-2 text-sm font-semibold text-gray-400">
                  {testimonial.title}
                </p>
                <p className="mt-4 text-lg">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="/" className="m-4 text-3xl font-bold">
                {`{(</>)}`}
              </a>
            </div>
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a
                href="#features"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </div>
            <div className="flex space-x-4 ml-4">
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
