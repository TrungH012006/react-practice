import React from 'react'
import ButtonLink from '../common/ButtonLink'
import Heading from '../common/Heading'
import Text from '../common/Text'
import { FaStar } from 'react-icons/fa'

/**
 * Hero component for the landing page
 */
const Hero = () => {
  const rating = 4.9;
  const stars = Array(5).fill(0);
  return (
    <div className="relative pt-32 pb-20">
      {/* Clean, minimal background */}
      <div className="absolute inset-0 bg-white -z-10"></div>
      
      <div className="default-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Star Rating */}
            <div className="flex items-center space-x-1.5">
              {stars.map((_, index) => (
                <FaStar key={index} className={`w-4 h-4 ${index < Math.floor(rating) ? "text-blue-500" : "text-gray-200"}`} />
              ))}
              <span className="ml-2 text-sm font-medium text-gray-500">{rating}</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <Heading className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                The Youth Job Listing Platform
              </Heading>
              <Text className="text-xl text-gray-600 max-w-lg">
                Connecting high school students with extracurricular opportunities and youth-led organizations with talent.
              </Text>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <ButtonLink 
                href="/get-started" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
              >
                Get Started
              </ButtonLink>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <img
                src="/temporary.jpg"
                alt="Platform Preview"
                className="w-full h-auto rounded-lg border border-gray-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;