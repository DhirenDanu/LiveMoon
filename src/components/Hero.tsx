import banner from '../assets/banner.png';
import videoIcon from '../../public/videoIcon.svg';
import ScrollAnimationWrapper from '../utils/ScrollAnimationWrapper';
import {motion} from 'framer-motion'
import { useMemo } from 'react';
import getScrollAnimation from '../utils/getScrollAnimation';

const User = [
  {
    name: "End user annually",
    number: '50K+',
    icon: videoIcon,
  },
  {
    name: "Supported Languages",
    number: '216',
    icon: videoIcon,
  },
  {
    name: "Service Uptime",
    number: '99.9%',
    icon: null, // Explicitly set to null if no icon is provided
  },
];

const Hero = () => {
  const scrollAnimation= useMemo(()=>getScrollAnimation(),[])
  
  
    return (
    <div className="max-w-screen-xl mt-24 xl:px-16 mx-auto relative">
           <ScrollAnimationWrapper>
      {/* Hero Section */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={scrollAnimation}>
        {/* Heading */}
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-4xl font-semibold leading-snug">
            Build Interactive Live Streaming and Reach{' '}
            <span className="text-green-400">Millions Globally</span>
          </h1>
          <p className="mt-6 mb-6 text-gray-700">
            Embed scalable interactive live streaming into your platforms with our fully customizable and 
            easy-to-integrate live SDK.
          </p>
          <button className="bg-[#5fcd89] py-3 px-8 text-white font-semibold rounded-sm hover:bg-[#53b87a]">
            Get Started
          </button>
        </div>

        {/* Banner Image */}
        <motion.div className="flex items-center justify-center" variants={scrollAnimation}>
          <img src={banner} alt="Hero banner" className="w-full h-auto object-contain" />
        </motion.div>
      </motion.div>
      </ScrollAnimationWrapper>

      {/* Stats Section */}
      <ScrollAnimationWrapper>
      <div className="relative w-full mt-12 flex justify-center">
        <div className="rounded-lg w-full grid grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white z-10 shadow-lg">
          {User.map((user, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center sm:justify-start py-4 sm:py-6 px-4 mx-auto sm:mx-0 w-full"
              variants={scrollAnimation}
            >
              <div className="flex items-center space-x-4">
                {user.icon && (
                <div className="flex items-center justify-center bg-green-500 w-12 h-12 rounded-full">
                <img src={user.icon} alt={`${user.name} icon`} className="w-6 h-6" />
              </div>
              
                )}
                <div className="flex flex-col">
                  <p className="text-xl font-bold text-black">{user.number}</p>
                  <p className="text-lg text-gray-600">{user.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </ScrollAnimationWrapper>

      {/* Blurred Background */}
      <div
        className="absolute bg-black opacity-5 w-11/12 rounded-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
        style={{ filter: 'blur(114px)' }}
      ></div>
    </div>
  );
};

export default Hero;