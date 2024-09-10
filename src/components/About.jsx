import React from 'react'
import user_image from '../assets/user-image.png'
import circular_text from '../assets/circular-text.png'
import dev_icon from '../assets/dev-icon.png'
import code_icon from '../assets/code-icon.png'
import code_icon_dark from '../assets/code-icon-dark.png'
import edu_icon from '../assets/edu-icon.png'
import edu_icon_dark from '../assets/edu-icon-dark.png'
import project_icon from '../assets/project-icon.png'
import project_icon_dark from '../assets/project-icon-dark.png'
import vscode from '../assets/vscode.png'
import firebase from '../assets/firebase.png'
import figma from '../assets/figma.png'
import git from '../assets/git.png'
import aws from '../assets/aws.png'
import node from '../assets/node.png'
import linux from '../assets/linux.png'
import python from '../assets/python.png'
import cplus from '../assets/c-.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
    <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
    <h2 className="text-center text-5xl font-Ovo">About me</h2>

    <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="max-w-max mx-auto relative">
            <img src={user_image} alt="" className="w-64 sm:w-80 rounded-3xl max-w-none"/>
        </div>
        <div className="flex-1">
            <p className="mb-10 max-w-2xl font-Ovo">I am a student majoring in Computer Science and minoring in Economics at the University of Florida. My focus lies in software engineering, cybersecurity, and cloud computing, where I am actively involved in projects that allow me to apply and expand my skills. Through these experiences, I aim to contribute to impactful technology solutions.</p>

            <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Languages I Use</h4>

            <ul className="flex items-center gap-3 sm:gap-5">
            <li className="flex flex-col items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 relative">
                <img src={python} alt="Python" className="w-5 sm:w-7"/>
                <span className="absolute bottom-[-1.5rem] text-xs sm:text-sm text-gray-700 dark:text-gray-300">Python</span>
            </li>
            <li className="flex flex-col items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 relative">
                <img src={cplus} alt="C++" className="w-5 sm:w-7"/>
                <span className="absolute bottom-[-1.5rem] text-xs sm:text-sm text-gray-700 dark:text-gray-300">C++</span>
            </li>
            <li className="flex flex-col items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 relative">
                <img src={html} alt="Git" className="w-5 sm:w-7"/>
                <span className="absolute bottom-[-1.5rem] text-xs sm:text-sm text-gray-700 dark:text-gray-300">HTML</span>
            </li>
            <li className="flex flex-col items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 relative">
                <img src={css} alt="CSS" className="w-5 sm:w-7"/>
                <span className="absolute bottom-[-1.5rem] text-xs sm:text-sm text-gray-700 dark:text-gray-300">CSS</span>
            </li>
            <li className="flex flex-col items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 relative">
                <img src={js} alt="javaScript" className="w-5 sm:w-7"/>
                <span className="absolute bottom-[-1.5rem] text-xs sm:text-sm text-gray-700 dark:text-gray-300">JavaScript</span>
            </li>

            </ul>

            <br></br>
            

            <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools I Use</h4>

            <ul className="flex items-center gap-3 sm:gap-5">
            <li className="flex flex-col items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 relative">
                <img src={vscode} alt="VS Code" className="w-5 sm:w-7"/>
                <span className="absolute bottom-[-1.5rem] text-xs sm:text-sm text-gray-700 dark:text-gray-300">VS Code</span>
            </li>
            <li className="flex flex-col items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 relative">
                <img src={aws} alt="AWS" className="w-5 sm:w-7"/>
                <span className="absolute bottom-[-1.5rem] text-xs sm:text-sm text-gray-700 dark:text-gray-300">AWS</span>
            </li>
            <li className="flex flex-col items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 relative">
                <img src={git} alt="Git" className="w-5 sm:w-7"/>
                <span className="absolute bottom-[-1.5rem] text-xs sm:text-sm text-gray-700 dark:text-gray-300">Git</span>
            </li>
            <li className="flex flex-col items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 relative">
                <img src={node} alt="Node.js" className="w-5 sm:w-7"/>
                <span className="absolute bottom-[-1.5rem] text-xs sm:text-sm text-gray-700 dark:text-gray-300">Node.js</span>
            </li>
            <li className="flex flex-col items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 relative">
                <img src={linux} alt="Linux" className="w-5 sm:w-7"/>
                <span className="absolute bottom-[-1.5rem] text-xs sm:text-sm text-gray-700 dark:text-gray-300">Linux</span>
            </li>
            <li className="flex flex-col items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 relative">
                <img src={react} alt="React" className="w-5 sm:w-7"/>
                <span className="absolute bottom-[-1.5rem] text-xs sm:text-sm text-gray-700 dark:text-gray-300">React.js</span>
            </li>
            </ul>

        </div>
    </div>
 </div>
  )
}

export default About
