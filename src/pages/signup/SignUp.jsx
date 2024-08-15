// src/SignupPage.js

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../features/user/userSlice";
import { useEffect, useState } from "react";
import SuccessModal from "../../component/SuccessModal";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    profession: "",
  });

  const user = useSelector((state) => state.user);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.status === "succeeded") {
      setShowModal(true);
      setTimeout(() => {
        navigate("/signin"); // Navigate to sign-in after showing the modal
      }, 2000); // Optional: Delay before navigating
    }
  }, [user.status, navigate]);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-black to-gray-900 text-white">
      <header className="sticky top-0 w-full p-6">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold">
            <a href="/" className="m-2 text-2xl font-bold">
              {`{(</>)}`}
            </a>
            
          </div>
          <div>
            <Link
              to="/"
              className="px-4 py-2 text-sm font-bold text-black bg-purple-500 rounded-lg hover:bg-purple-600"
            >
              Home
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 w-full px-4 text-center">
        <h1 className="text-4xl font-bold mb-8">Sign Up for ProFolioElite</h1>
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 text-black rounded-lg"
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 text-black rounded-lg"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 text-black rounded-lg"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <select
              className="w-full px-3 py-2 text-black rounded-lg"
              name="profession" // Set name for select element
              onChange={handleChange}
              required
            >
              <option value="">Please choose your profession</option>
              <option value="frontendDeveloper">Frontend Developer</option>
              <option value="backendDeveloper">Backend Developer</option>
              <option value="fullStackDeveloper">Full Stack Developer</option>
              <option value="fullStackAiMlDeveloper">
                Full Stack AI/ML Developer
              </option>
              <option value="blockChainDeveloper">Blockchain Developer</option>
              <option value="fullStackBlockChainDeveloper">
                Full Stack Blockchain Developer
              </option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-black bg-purple-500 rounded-lg hover:bg-purple-600"
          >
            Sign Up
          </button>
        </form>
        <SuccessModal
          show={showModal}
          message={"You have successfully registered. You can now sign in."}
          onClose={handleClose}
        />
        <p className="mt-4">
          Already have an account?{" "}
          <Link to="/signin" className="text-purple-500 hover:underline">
            Sign In
          </Link>
        </p>
      </main>
    </div>
  );
};

export default SignupPage;
