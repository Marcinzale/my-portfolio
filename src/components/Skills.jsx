import React from 'react';

import AndroidStudio from '../assets/Android Studio logo.png';
import Java from '../assets/Java logo.png';
import Kotlin from '../assets/Kotlin logo.png';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full min-h-screen bg-blue-950 text-gray-300'>
      
      {/* Container */}
      <div className='max-w-5xl mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-gray-900 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={AndroidStudio} alt="Android Studio icon" />
                  <p className='my-4'>Android Studio</p>
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
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>React Native</p>
              </div>
              <div className='shadow-md shadow-gray-900 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-gray-900 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-gray-900 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-gray-900 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-gray-900 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />
                  <p className='my-4'>FIREBASE</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;