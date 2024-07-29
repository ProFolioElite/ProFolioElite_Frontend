// src/SignInPage.js

// import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../../features/user/userSlice';
import { useState } from 'react';

const SignInPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };


  // const handleSubmit = async (e) => {
  //   e.preventDefault();

    // const user = { email, password };

    // try {
    //   const response = await fetch('http://localhost:5000/api/auth/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(user),
    //   });

    //   if (response.ok) {
    //     // Handle successful login (e.g., redirect to dashboard)
    //     console.log('User signed in successfully!');
    //   } else {
    //     // Handle errors (e.g., display error message)
    //     console.error('Sign-in failed.');
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  // };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-black to-gray-900 text-white">
      <header className="w-full p-6">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold">ProFolioElite</div>
          <div>
            <Link to="/" className="px-4 py-2 text-sm font-bold text-black bg-purple-500 rounded-lg hover:bg-purple-600">Home</Link>
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
              name='email'
              onChange={handleChange}
              required 
            />
          </div>
          <div className="mb-4">
            <input 
              className="w-full px-3 py-2 text-black rounded-lg" 
              type="password" 
              placeholder="Password"
              name='password'
              onChange={handleChange} 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="w-full px-4 py-2 font-bold text-black bg-purple-500 rounded-lg hover:bg-purple-600"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4">{`Don't have an account?`} <Link to="/signup" className="text-purple-500 hover:underline">Sign Up</Link></p>
      </main>
    </div>

  );
};

export default SignInPage;
