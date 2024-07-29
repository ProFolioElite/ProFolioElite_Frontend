// src/SignupPage.js

// import  { useState } from 'react';
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

  const [isRegister, setRegister] = useState({});
  const [showmodal,setShowModal]= useState(false)
  const navigate = useNavigate();

  // const [status]
  const dispatch = useDispatch();
  const handleToNavigate = () => {
    setRegister(user);
    if (isRegister) {
      navigate("/signin");
    }
  };

  useEffect(()=>{if(user.status==="succeeded"){
    setShowModal(true)
  }},[user.status])

  const hadleClose =()=>{
    setShowModal(false)
  } 

  // {user?token?Navigate({to:'/signin'})}
  // console.log(user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };
  console.log(formData);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-black to-gray-900 text-white">
      <header className=" sticky top-0 w-full p-6">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold">ProFolioElite</div>
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
        <form
          className="w-full max-w-sm"
          onSubmit={(e) => {
            handleSubmit(e);
            // handleToNavigate();
          }}
        >
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 text-black rounded-lg"
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={(e) => {
                handleChange(e);
              }}
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
              name="Password"
              placeholder="Password"
              // value
              onChange={(e) => {
                handleChange(e);
              }}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-black bg-purple-500 rounded-lg hover:bg-purple-600"
          >
            Sign Up
          </button>
        </form>
        <SuccessModal
          show={showmodal}
          message={"You are register succesfull now you can sign in "} 
          onClose={hadleClose}
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
