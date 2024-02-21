import React, { useState, useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const formRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  const handleLogin = () => {
    setShowLogin(!showLogin);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log(formData);
  };

  const handleClickOutside = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      setShowSignUp(false);
    }
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] cursor-pointer' onClick={handleSignUp}>CoinCraze</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4' onClick={handleSignUp}>SignUp</li>
        <li className='p-4' onClick={handleLogin}>Login</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      {showSignUp && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={handleClickOutside}>
          <form ref={formRef} onSubmit={handleSubmit} className="bg-black p-8 rounded-md shadow-md max-w-md w-full text-white">
            <h2 className="text-3xl font-semibold mb-4 text-center text-[#00df9a]">CoinCraze </h2>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-gray-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-gray-500"
                required
              />
            </div>
            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="rounded-sm mr-2"
              />
              <label htmlFor="rememberMe" className="text-sm">Remember me</label>
            </div>
            <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50">Sign Up</button>
            <p className="mt-2 text-sm">Already have an account? <span className="text-blue-500 cursor-pointer" onClick={handleLogin}>Login here</span></p>
          </form>
        </div>
      )}
      {showLogin && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <form className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
            {/* Your Login form elements go here */}
            <button className="block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
              Get Started
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Navbar;
