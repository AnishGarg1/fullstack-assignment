import React from 'react';
import logo from "../../logo.png"

const Header = () => {
  return (
    <header className="bg-black w-full">
      <div className='w-11/12 text-white flex items-center justify-between p-4 mx-auto'>
        <div className="flex items-center space-x-4">
          <img src={logo} className="w-11 h-11" />
          <span className='text-xl font-semibold'>Abstract | Help Center</span>
        </div>
        <div className="flex space-x-4">
          <button variant="outline" className="text-white text-xl border-white bg-gray-500 px-5 py-1 rounded-md bg-opacity-50 border">
            Submit a request
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;