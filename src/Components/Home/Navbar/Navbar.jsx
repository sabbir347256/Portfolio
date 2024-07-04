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
import project1 from '../../../image/projcet1.png'
import verticleImage from '../../../image/verticle.jpeg'
import { NavLink } from "react-router-dom";
import project2 from '../../../image/project2.png'
import project3 from '../../../image/project3.png'
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";



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
                href="#projects"
                className="text-white relative group cursor-pointer block py-2 lg:py-0 hover:text-red-300 duration-500"
              >
                Projects
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
        <section id="home" className="lg:min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 pb-5 lg:pb-0 lg:gap-96 pt-32 px-5">
          <div className="flex flex-col gap-6 robotoFont">
            <h1 className="text-4xl font-bold text-white">I AM</h1>
            <h2 className="text-4xl font-bold text-white">SABBIR AHMMED</h2>
            <h2 className="text-4xl font-bold text-white">MERN Stack Developer</h2>
            <button className="btn w-32">
              <a href="../../../image/Untitled document.pdf" download='resume.pdf' target="blank">Download CV</a>
            </button>
          </div>
          <img className="h-[450px] lg:h-[500px] w-[300px] lg:w-[350px] bg-black lg:mt-4" src={profile} alt="" />
        </section>
        <section id="about" className="lg:min-h-screen bg-[#0f0716] flex lg:flex-row-reverse  items-center lg:items-start justify-start lg:justify-end flex-col lg:px-24 gap-6 lg:gap-36 pt-20">
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

        <section id="projects" className="lg:min-h-screen bg-[#0f0716] px-5 lg:px-24  flex flex-col justify-center items-center pt-20 pb-10">
          <h1 className="text-4xl font-bold text-white robotoFont">My Projects</h1>
          <div className="grid grid-cols-1 lg:grid-cols-6 justify-center pt-20">
            <NavLink className="lg:col-span-2" to='https://dreamtraveltourismagency.netlify.app/'>
              <img className="h-[610px] w-screen" src={project1} alt="" />
            </NavLink>
            <div className="lg:col-span-1 flex items-center mt-16 hidden lg:block">
              <img className="h-[500px]" src={verticleImage} alt="" />
            </div>
            <div className="lg:col-span-3 flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-gray-200 robotoFont">Tourism Project</h2>
              <h2>Name : <span className="text-xl font-bold robotoFont"> DREAM TRAVEL</span></h2>
              <h2><span className="font-bold text-gray-300 robotoFont">Description</span> : <span className="playwriteFont">It's a show all tourist place site projcet. Here all user see all famous tourist place in the world. Also know all kinds of information for all place. Any user choose any tourist place then user click view details button and user see all kind of information for this place.</span></h2>
              <h2>
                <span className="font-bold text-gray-300 robotoFont">Feature</span> : <span className="playwriteFont"><br /> 1. Here i implement login and register page. For this page, any user login or register for this site. Any user no login or register than this user do not see view information any kind of place. <br />
                  2. I implement Dark mode and white mode button in this site. Any user in his eye than this user click this dark mode button. When user click dark mode button than all over this site has been dark.</span>
              </h2>
              <h2 className="text-white"><span className="robotoFont">Live link</span> : <NavLink to='https://dreamtraveltourismagency.netlify.app' className="text-blue-500">https://dreamtraveltourismagency.netlify.app</NavLink> </h2>
              <h2 className="text-white"><span className="robotoFont">Client site github link</span> : <NavLink to='https://github.com/sabbir347256/Dream-Travel-tourism-agency' className='text-blue-500'>https://github.com/sabbir347256/Dream-Travel-tourism-agency</NavLink></h2>
              <h2 className="text-white"><span className="robotoFont">Server site github link</span> : <NavLink to='https://github.com/sabbir347256/Dream-Travel-server-site' className='text-blue-500'>https://github.com/sabbir347256/Dream-Travel-server-site</NavLink> </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-6 justify-center pt-20">
            <div className="lg:col-span-3 flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-gray-200 robotoFont">Study Project</h2>
              <h2>Name : <span className="text-xl font-bold robotoFont"> Online Group Study</span></h2>
              <h2><span className="font-bold text-gray-300 robotoFont">Description</span> : <span className="playwriteFont">Basically it's a assignment related web project. Here any user add any kind of assignment. This assignment show home page and all assignment section. Any user take whatever assignment he likes according to his needs. All the assignments the user takes will be displayed on his profile.</span></h2>
              <h2>
                <span className="font-bold text-gray-300 robotoFont">Feature</span> : <span className="playwriteFont"><br /> 1. Here i implement login and register page. For this page, any user login or register for this site. Any user no login or register than this user do not see view information any kind of assignment. <br />
                  2. I implement Dark mode and white mode button in this site. Any user in his eye than this user click this dark mode button. When user click dark mode button than all over this site has been dark. <br /></span>
                3. I will implement payment method system. This method is stripe payment mathod.Any user can pay for any assignment for this method.
              </h2>
              <h2 className="text-white"><span className="robotoFont">Live link</span> : <NavLink to='https://online-group-study-67ed0.web.app' className="text-blue-500">https://online-group-study-67ed0.web.app/</NavLink> </h2>
              <h2 className="text-white"><span className="robotoFont">Client site github link</span> : <NavLink to='https://github.com/sabbir347256/Dream-Travel-tourism-agency' className='text-blue-500'>https://github.com/sabbir347256/Online-Group-Study</NavLink></h2>
              <h2 className="text-white"><span className="robotoFont">Server site github link</span> : <NavLink to='https://github.com/sabbir347256/Dream-Travel-server-site' className='text-blue-500'>https://github.com/sabbir347256/Online-Group-Study-Server-site</NavLink> </h2>
            </div>
            <div className="lg:col-span-1 flex items-center mt-16 hidden lg:block">
              <img className="h-[500px]" src={verticleImage} alt="" />
            </div>
            <NavLink className="lg:col-span-2" to='https://online-group-study-67ed0.web.app/'>
              <img className="h-[610px] w-screen" src={project2} alt="" />
            </NavLink>
          </div>
          <div className="flex flex-col-reverse lg:flex-row lg:grid grid-cols-1 lg:grid-cols-6 justify-center pt-20 ">
            <NavLink className="lg:col-span-2" to='https://dreamtraveltourismagency.netlify.app/'>
              <img className="h-[610px] w-screen" src={project3} alt="" />
            </NavLink>
            <div className="lg:col-span-1 flex items-center mt-16 hidden lg:block">
              <img className="h-[500px]" src={verticleImage} alt="" />
            </div>
            <div className="lg:col-span-3 flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-gray-200 robotoFont">Blog Project</h2>
              <h2>Name : <span className="text-xl font-bold robotoFont"> MY Inbox</span></h2>
              <h2><span className="font-bold text-gray-300 robotoFont">Description</span> : <span className="playwriteFont">Basically it is a blog site project. Any user can post any kind of educational or tourist blog in this project. Users can also comment and report on any blog. And if the user wants to post the blogs,they can also delete then.</span></h2>
              <h2>
                <span className="font-bold text-gray-300 robotoFont">Feature</span> : <span className="playwriteFont"><br />1.The main feature of this project is the Admin Panel.Admin can control all users through admin panel. Any comment, report deletion and feedback can be given. In short, an admin can control the entire site through the admin panel. <br /> 2. Here i implement login and register page. For this page, any user login or register for this site. Any user no login or register than this user do not see view information any kind of blog. <br />
                  3. I implement Dark mode and white mode button in this site. Any user in his eye than this user click this dark mode button. When user click dark mode button than all over this site has been dark.</span>
              </h2>
              <h2 className="text-white"><span className="robotoFont">Live link</span> : <NavLink to=' https://my-inbox-c638f.web.app/' className="text-blue-500"> https://my-inbox-c638f.web.app/</NavLink> </h2>
              <h2 className="text-white"><span className="robotoFont">Client site github link</span> : <NavLink to='https://github.com/sabbir347256/MY-Inbox-' className='text-blue-500'>https://github.com/sabbir347256/MY-Inbox-</NavLink></h2>
              <h2 className="text-white"><span className="robotoFont">Server site github link</span> : <NavLink to='https://github.com/sabbir347256/My-inbox-Server-Site' className='text-blue-500'>https://github.com/sabbir347256/My-inbox-Server-Site</NavLink> </h2>
            </div>
          </div>
        </section>
        <section id="education" className="lg:min-h-screen bg-black flex md:flex-row  lg:flex-row items-center lg:items-start flex-col lg:px-24 gap-6 justify-center lg:gap-[20rem] lg:py-20 pt-5 px-5">
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
        <section id="contact" className="lg:min-h-screen bg-[#0f0716] lg:mx-5">
          <div className="min-h-screen flex flex-col md:flex-row bg-[#0f0716] text-white">
            {/* First Section: Send Message Form */}
            <div className="flex-1 p-6 flex flex-col justify-center items-center">
              {/* Heading and Paragraph */}
              <div className="mb-6 lg:px-16 libreFont">
                <h2 className="text-3xl font-bold mb-2 text-[#764bf5]">Let’s work together!</h2>
                <p className="text-gray-300">I design and code beautifully simple things and i love what i do. Just simple like that!</p>
              </div>

              <form className="space-y-6 w-full max-w-md">
                {/* First Name and Last Name */}
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="flex-1 p-2 rounded bg-gray-800 border border-gray-700"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="flex-1 p-2 rounded bg-gray-800 border border-gray-700"
                  />
                </div>

                {/* Email and Phone Number */}
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="flex-1 p-2 rounded bg-gray-800 border border-gray-700"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="flex-1 p-2 rounded bg-gray-800 border border-gray-700"
                  />
                </div>

                {/* Message */}
                <textarea
                  placeholder="Your Message"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-700 h-32"
                ></textarea>

                {/* Send Message Button */}
                <button
                  type="submit"
                  className="p-3 rounded-full duration-700 text-sm bg-purple-600 hover:bg-purple-800 libreFont"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Second Section: Contact Information */}
            <div className="flex-1 bg-black p-8 flex flex-col justify-center lg:relative lg:left-20 ">
              <div className="flex items-center mb-4 gap-4">
                <FaPhoneVolume className="bg-[#764bf5] text-gray-200 size-12 p-2 rounded-full"></FaPhoneVolume>
                <div className="libreFont">
                  <span>Phone</span>
                  <br />
                  <span>01638670537</span>
                </div>
              </div>
              <div className="flex items-center mb-4 libreFont gap-4">
                <MdOutlineMail className="bg-[#764bf5] text-gray-200 size-12 p-2 rounded-full"></MdOutlineMail>
                <div className="libreFont">
                  <span>Email</span>
                  <br />
                  <span>sabbir195323@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center mb-4 libreFont gap-4">
                <IoLocation className="bg-[#764bf5] text-gray-200 size-12 p-2 rounded-full"></IoLocation>
                <div className="libreFont">
                  <span>Address</span>
                  <br />
                  <span>Gaochiya,Narayanganj <br />Dhaka,Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Navbar;