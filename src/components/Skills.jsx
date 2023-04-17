import React from 'react';

import Android from '../assets/Android logo.png';
import Java from '../assets/Java logo.png';
import Kotlin from '../assets/Kotlin logo.png';
import ReactImg from '../assets/react.png';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import GitHub from '../assets/github.png';
import Python from '../assets/Python logo.png';
import Tailwind from '../assets/tailwind.png';
import Bootstrap from '../assets/Bootstrap_logo.png';
import Figma from '../assets/Figma logo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-blue-950 text-gray-300'>
      
      {/* Container */}
      <div className='max-w-5xl mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>These are some of the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-gray-900 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Android} alt="Android icon" />
                  <p className='my-4'>Android</p>
              </div>
              <div className='shadow-md shadow-gray-900 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Java} alt="Java icon" />
                  <p className='my-4'>Java</p>
              </div>
              <div className='shadow-md shadow-gray-900 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Kotlin} alt="Kotlin icon" />
                  <p className='my-4'>Kotlin</p>
              </div>
              <div className='shadow-md shadow-gray-900 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="React Native icon" />
                  <p className='my-4'>React Native</p>
              </div>
              <div className='shadow-md shadow-gray-900 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-gray-900 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-gray-900 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                  <p className='my-4'>JavaScript</p>
              </div>
              <div className='shadow-md shadow-gray-900 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
                  <p className='my-4'>GitHub</p>
              </div>
              {/* <div className='shadow-md shadow-gray-900 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Python} alt="Python icon" />
                  <p className='my-4'>Python</p>
              </div>
              <div className='shadow-md shadow-gray-900 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Bootstrap} alt="Bootstrap icon" />
                  <p className='my-4'>Bootstrap</p>
              </div>
              <div className='shadow-md shadow-gray-900 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind CSS icon" />
                  <p className='my-4'>Tailwind CSS</p>
              </div>
              <div className='shadow-md shadow-gray-900 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Figma} alt="Figma icon" />
                  <p className='my-4'>Figma</p>
              </div> */}

          </div>
      </div>
    </div>
  );
};

export default Skills;