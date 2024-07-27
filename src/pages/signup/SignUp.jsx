// src/SignupPage.js

// import  { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const user = { username, email, password };

    // try {
    //   const response = await fetch('http://localhost:5000/api/auth/signup', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(user),
    //   });

    //   if (response.ok) {
    //     // Handle successful signup (e.g., redirect to login or dashboard)
    //     console.log('User signed up successfully!');
    //   } else {
    //     // Handle errors (e.g., display error message)
    //     console.error('Signup failed.');
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-black to-gray-900 text-white">
    <header className=" sticky top-0 w-full p-6">
      <nav className="flex items-center justify-between">
        <div className="text-xl font-bold">ProFolioElite</div>
        <div>
          <Link to="/" className="px-4 py-2 text-sm font-bold text-black bg-purple-500 rounded-lg hover:bg-purple-600">Home</Link>
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
            placeholder="Full Name" 
            required 
          />
        </div>
        <div className="mb-4">
          <input 
            className="w-full px-3 py-2 text-black rounded-lg" 
            type="email" 
            placeholder="Email" 
            required 
          />
        </div>
        <div className="mb-4">
          <input 
            className="w-full px-3 py-2 text-black rounded-lg" 
            type="password" 
            placeholder="Password" 
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
      <p className="mt-4">Already have an account? <Link to="/signin" className="text-purple-500 hover:underline">Sign In</Link></p>
    </main>
  </div>
  );
};

export default SignupPage;
