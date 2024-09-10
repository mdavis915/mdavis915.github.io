import React from 'react';
import send_icon from '../assets/send-icon.png';
import right_arrow_blod from '../assets/right-arrow-bold.png';
import right_arrow_blod_dark from '../assets/right-arrow-bold-dark.png';
import projectDemo1 from '../assets/WIN_20160923_23_58_23_Pro.mp4'; // Import your video

const Work = () => {
  // Handle click to open video in a new tab
  const handleOpenVideo = (videoUrl) => {
    window.open(videoUrl, '_blank'); // Open the video URL in a new tab
  };

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
      </p>

      {/* Center the project cards */}
      <div className="flex justify-center items-center gap-5 my-10 dark:text-black">
        {/* Project 1 */}
        <div
          className="w-[250px] h-[250px] bg-[url('./assets/bomb.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group border-4 border-gray-400"
          onClick={() => handleOpenVideo(projectDemo1)} // Open video in a new tab on click
        >
          <div className="bg-white w-9/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-2 px-4 flex items-center justify-between duration-500 group-hover:bottom-7">
            <div>
              <h2 className="font-semibold text-s">Minewsweeper</h2>
            </div>
            <div className="border rounded-full border-black w-7 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <img src={send_icon} alt="" className="w-3" />
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div
          className="w-[250px] h-[250px] bg-[url('./assets/sudoku.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group border-4 border-gray-400"
          onClick={() => handleOpenVideo(projectDemo1)} // Open video in a new tab on click
        >
          <div className="bg-white w-9/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-2 px-4 flex items-center justify-between duration-500 group-hover:bottom-7">
            <div>
              <h2 className="font-semibold text-s">Sudoku</h2>
            </div>
            <div className="border rounded-full border-black w-7 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <img src={send_icon} alt="" className="w-3" />
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Work;
