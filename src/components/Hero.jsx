import React from 'react';
import { FaDollarSign, FaChartLine, FaWallet } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='text-white bg-black'>
      <div className='max-w-4xl mx-auto flex flex-col justify-center items-center pt-32 bg-black'>
        <div className='flex justify-center mb-8'>
          <FaDollarSign className='text-[#00df9a] text-6xl mr-4 bg-black' />
          <FaChartLine className='text-[#00df9a] text-6xl mx-4 bg-black' />
          <FaWallet className='text-[#00df9a] text-6xl ml-4 bg-black' />
        </div>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-black'>Master Your Money</h1>
        <p className='text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 bg-black'>Take control of your finances and grow your wealth with ease</p>
        <button className='bg-[#00df9a] hover:bg-green-600 text-lg text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
