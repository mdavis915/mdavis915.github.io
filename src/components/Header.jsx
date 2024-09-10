import React, { useState, useEffect } from 'react';
import right_arrow_white from '../assets/right-arrow-white.png';
import download_icon from '../assets/download-icon.png';
import resume from '../assets/MariaD_Resume.pdf';

const Header = () => {
  const [text, setText] = useState('');
  const fullText = "Hi! I'm Maria Davis";
  const typingSpeed = 100;

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [text]);

  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">{text}</h1>
      <p className="max-w-2xl mx-auto font-Ovo">I’m an aspiring software engineer with a passion for creating intuitive user interfaces and secure cloud solutions. Let's build something amazing together!</p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent"
        >
          Contact Me <img src={right_arrow_white} alt="" className="w-4" />
        </a>
        <a
          href={resume}
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          My Resume <img src={download_icon} alt="download icon" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
