// src/SignInPage.js

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, getUser } from "../../features/user/userSlice";
import { useEffect, useState } from "react";
import Spinner from "../../component/Spinner";

const SignInPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  // const userDetails = useSelector((state) => state.user);

  const { token } = user?.user || {}; // Destructure token directly from user state
  const { _id } = user?.user || {};
  // console.log(token); // Destructure token directly from user state
  const handleChange = (e) => { 
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(loginUser(formData));
  };

  // Use useEffect to navigate when the token is available
  useEffect(() => {
    if (token) {
      // Fetch user data with the token
      dispatch(getUser(token));
      setLoading(false);
    }
  }, [token, dispatch]);
  if (_id) {
    navigate(`/${_id}/dashboard`);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-black to-gray-900 text-white">
      <header className="w-full p-6">
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
        <h1 className="text-4xl font-bold mb-8">Sign In to ProFolioElite</h1>
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 text-black rounded-lg"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 text-black rounded-lg"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-black bg-purple-500 rounded-lg hover:bg-purple-600"
          >
            {loading ? <Spinner xm={true} /> : `Sign In`}
          </button>
        </form>
        <p className="mt-4">
          {`Don't have an account?`}{" "}
          <Link to="/signup" className="text-purple-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </main>{" "}
    </div>
  );
};

export default SignInPage;
