import { useState } from "react";
import logo from '../../../image/images.jpeg'
import profile from '../../../image/profile.jpg'
import aboutImage from '../../../image/aboutImage.jpg'
import education from '../../../image/Education.jpg'
import html from '../../../image/html.png'
import css from '../../../image/css.png'
import tailwind from '../../../image/tailwind.png'
import js from '../../../image/js.png'
import react from '../../../image/reactjs.png'
import node from '../../../image/nodejs.png'
import express from '../../../image/express.png'
import mongodb from '../../../image/mongodb.png'


// 0d0d0d
// 151515
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <nav className="bg-[#151515] fixed w-full top-0 z-50 shadow-lg px-8 robotoFont">
        <div className="flex justify-between items-center p-4">
          <div>
            <img className="rounded-full h-12" src={logo} alt="" />
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                ></path>
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex lg:space-x-6">
            <li>
              <a
                href="#home"
                className="text-white relative group cursor-pointer block py-2 lg:py-0 hover:text-red-300 duration-500"
              >
                Home
                <span className="block h-1 bg-transparent group-hover:bg-yellow-400 transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white relative group cursor-pointer block py-2 lg:py-0 hover:text-red-300 duration-500"
              >
                About Me
                <span className="block h-1 bg-transparent group-hover:bg-yellow-400 transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#skill"
                className="text-white relative group cursor-pointer block py-2 lg:py-0 hover:text-red-300 duration-500"
              >
                My Skill
                <span className="block h-1 bg-transparent group-hover:bg-yellow-400 transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="text-white relative group cursor-pointer block py-2 lg:py-0 hover:text-red-300 duration-500"
              >
                My Education
                <span className="block h-1 bg-transparent group-hover:bg-yellow-400 transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-white relative group cursor-pointer block py-2 lg:py-0 hover:text-red-300 duration-500"
              >
                Projects
                <span className="block h-1 bg-transparent group-hover:bg-yellow-400 transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white relative group cursor-pointer block py-2 lg:py-0 hover:text-red-300 duration-500"
              >
                Contact Me
                <span className="block h-1 bg-transparent group-hover:bg-yellow-400 transition-all duration-300"></span>
              </a>
            </li>
          </ul>
        </div>
        <div
          className={`lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-40 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <ul className="flex flex-col items-center space-y-6 mt-10">
            <li>
              <a
                href="#home"
                className="text-white relative group cursor-pointer block py-2 lg:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
                <span className="block h-1 bg-transparent group-hover:bg-yellow-400 transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white relative group cursor-pointer block py-2 lg:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                About Me
                <span className="block h-1 bg-transparent group-hover:bg-yellow-400 transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#skill"
                className="text-white relative group cursor-pointer block py-2 lg:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                My Skill
                <span className="block h-1 bg-transparent group-hover:bg-yellow-400 transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="text-white relative group cursor-pointer block py-2 lg:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                My Education
                <span className="block h-1 bg-transparent group-hover:bg-yellow-400 transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a
                to="#projects"
                className="text-white relative group cursor-pointer block py-2 lg:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
                <span className="block h-1 bg-transparent group-hover:bg-yellow-400 transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white relative group cursor-pointer block py-2 lg:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Me
                <span className="block h-1 bg-transparent group-hover:bg-yellow-400 transition-all duration-300"></span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="bg-black">
        <section id="home" className="lg:min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 pb-5 lg:gap-96 pt-32 px-5">
          <div className="flex flex-col gap-6 robotoFont">
            <h1 className="text-4xl font-bold text-white">I AM</h1>
            <h2 className="text-4xl font-bold text-white">SABBIR AHMMED</h2>
            <h2 className="text-4xl font-bold text-white">MERN Stack Developer</h2>
          </div>
          <img className="h-[450px] lg:h-[500px] w-[300px] lg:w-[350px] bg-black" src={profile} alt="" />
        </section>
        <section id="about" className="lg:min-h-screen bg-[#202020] flex lg:flex-row-reverse  items-center lg:items-start justify-start lg:justify-end flex-col lg:px-24 gap-6 lg:gap-36 pt-20">
          <div className="px-5 flex flex-col items-start lg:h-screen gap-8 lg:pt-20">
            <h1 className="text-4xl text-white font-bold robotoFont">About Me</h1>
            <p className="text-gray-400 playwriteFont">I am Sabbir Ahmmed, a passionate MERN stack web developer. I am currently pursuing my HSC at Govt. Science College, Dhaka, and a BSc in CSE (3rd year) at Green University of Bangladesh. My expertise includes HTML, CSS, Tailwind CSS, JavaScript, ReactJS, NodeJS, ExpressJS, and MongoDB. I enjoy creating dynamic and responsive web applications and am always eager to learn and take on new challenges. Let's connect to discuss potential projects and ideas!</p>
          </div>
          <img className="h-[500px] w-[400px] pb-5" src={aboutImage} alt="" />
        </section>
        <section id="skill" className="lg:min-h-screen bg-black soraFont flex flex-col items-center justify-center gap-6 pt-10 lg:pt-0 px-5">
          <div className="text-center flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-white">My Skills</h1>
            <p>I put your ideas and thus your wishes in the form of a unique web project <br /> that inspires you and you customers.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 justify-center gap-6 p-4">
            <div className="border-2 p-4 text-center flex flex-col items-center justify-center rounded-2xl gap-4 bg-[#140b1c] hover:bg-[#382263] duration-700 hover:text-white">
              <img className="h-16" src={html} alt="" />
              <p>HTML</p>
            </div>
            <div className="border-2 p-4 text-center flex flex-col items-center justify-center rounded-2xl gap-4 bg-[#140b1c] hover:bg-[#382263] duration-700 hover:text-white">
              <img className="h-16" src={css} alt="" />
              <p>CSS</p>
            </div>
            <div className="border-2 p-4 text-center flex flex-col items-center justify-center rounded-2xl gap-4 bg-[#140b1c] hover:bg-[#382263] duration-700 hover:text-white">
              <img className="h-16" src={tailwind} alt="" />
              <p>TAILWIND CSS</p>
            </div>
            <div className="border-2 p-4 text-center flex flex-col items-center justify-center rounded-2xl gap-4 bg-[#140b1c] hover:bg-[#382263] duration-700 hover:text-white">
              <img className="h-16" src={js} alt="" />
              <p>JAVASCRIPT</p>
            </div>
            <div className="border-2 p-4 text-center flex flex-col items-center justify-center rounded-2xl gap-4 bg-[#140b1c] hover:bg-[#382263] duration-700 hover:text-white">
              <img className="h-16" src={react} alt="" />
              <p>REACTJS</p>
            </div>
            <div className="border-2 p-4 text-center flex flex-col items-center justify-center rounded-2xl gap-4 bg-[#140b1c] hover:bg-[#382263] duration-700 hover:text-white">
              <img className="h-16" src={node} alt="" />
              <p>NODEJS</p>
            </div>
            <div className="border-2 p-4 text-center flex flex-col items-center justify-center rounded-2xl gap-4 bg-[#140b1c] hover:bg-[#382263] duration-700 hover:text-white">
              <img className="h-16" src={express} alt="" />
              <p>NODEJS</p>
            </div>
            <div className="border-2 p-4 text-center flex flex-col items-center justify-center rounded-2xl gap-4 bg-[#140b1c] hover:bg-[#382263] duration-700 hover:text-white">
              <img className="h-16" src={mongodb} alt="" />
              <p>MONGODB</p>
            </div>
          </div>
        </section>
        <section id="education" className="lg:min-h-screen bg-[#202020] flex md:flex-row  lg:flex-row items-center lg:items-start flex-col lg:px-24 gap-6 justify-center lg:gap-[20rem] pt-5 px-5">
          <div className="lg:w-screen flex flex-col gap-4">
            <h1 className="text-4xl text-white font-bold robotoFont">My Education</h1>
            <div className="border-2 border-gray-600 flex flex-col gap-3 p-4 rounded-xl bg-[#140b1c] playfairFont text-[#764bf5] hover:bg-[#382263] duration-700 hover:text-white">
              <h2 className="text-2xl font-extrabold ">2015 - 2017</h2>
              <h2 className="text-3xl font-extrabold text-white">Secondary School</h2>
              <h2 className="text-xl font-bold text-gray-300">Rowson Ali High School</h2>
            </div>
            <div className="border-2 border-gray-600 flex flex-col gap-3 p-4 rounded-xl bg-[#140b1c] playfairFont text-[#764bf5] hover:bg-[#382263] duration-700 hover:text-white">
              <h2 className="text-2xl font-extrabold ">2017 - 2019</h2>
              <h2 className="text-3xl font-extrabold text-white">Higher Secondary School</h2>
              <h2 className="text-xl font-bold text-gray-300">Govt.Science College,Tejgoan,Dhaka</h2>
            </div>
            <div className="border-2 border-gray-600 flex flex-col gap-3 p-4 rounded-xl bg-[#140b1c] playfairFont text-[#764bf5] hover:bg-[#382263] duration-700 hover:text-white">
              <h2 className="text-2xl font-extrabold ">2022 - 2026</h2>
              <h2 className="text-3xl font-extrabold text-white">BSC in CSE</h2>
              <h2 className="text-xl font-bold text-gray-300">Green University of Bangladesh</h2>
            </div>
          </div>
          <img className="pb-4 lg:pb-0 md:mt-14 h-[500px]" src={education} alt="" />
        </section>

        <section id="contact" className="lg:min-h-screen bg-[#202020]">
          <h1 className="text-4xl font-bold">Contact Me</h1>
        </section>
        <section id="contact" className="lg:min-h-screen bg-[#202020]">
          <h1 className="text-4xl font-bold">Contact Me</h1>
        </section>
      </div>
    </div>
  );
};

export default Navbar;