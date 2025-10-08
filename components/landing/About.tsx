"use client";

import { useState } from 'react'
import { about } from '@/data/index'
import { FaGraduationCap, FaPeopleGroup, FaCheck } from 'react-icons/fa6'
import Subheading from '../common/Subheading'
import Text from '../common/Text'

const iconMap = {
    FaGraduationCap,
    FaPeopleGroup
}

const About = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const activeItem = about[activeIndex]

    return (
        <div id="about" className="relative py-16 md:py-24">
            <div className="default-container px-4 sm:px-6">
                <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-16 items-start">
                    <div className="space-y-8 md:space-y-10">
                        <div>
                            <Subheading className="text-blue-500 mb-3">
                                About the Platform
                            </Subheading>
                            <Text className="text-xl md:text-2xl font-medium text-gray-900">
                                Choose your path
                            </Text>
                        </div>

                        <div className="space-y-2">
                            {about.map((item, index) => {
                                const Icon = iconMap[item.icon as keyof typeof iconMap]
                                return (
                                    <button 
                                        key={index} 
                                        onClick={() => setActiveIndex(index)} 
                                        className={`
                                            w-full text-left px-4 sm:px-5 py-3 sm:py-4 rounded-lg
                                            flex items-center gap-3 sm:gap-4
                                            transition-colors
                                            ${activeIndex === index 
                                                ? 'bg-blue-50 text-blue-500' 
                                                : 'hover:bg-gray-50 text-gray-600'
                                            }
                                        `}
                                    >
                                        <div className={`
                                            p-2 rounded-lg flex-shrink-0
                                            ${activeIndex === index 
                                                ? 'bg-blue-100' 
                                                : 'bg-gray-100'
                                            }
                                        `}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className="font-medium">{item.title}</span>
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6 sm:p-8 md:p-10">
                        <div className="space-y-6">
                            <Text className="text-xl md:text-2xl font-medium text-gray-900">
                                {activeItem.title}
                            </Text>

                            <div className="space-y-4 pt-4">
                                {activeItem.points.map((point, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="p-1 bg-blue-100 rounded-full text-blue-500 mt-0.5 flex-shrink-0">
                                            <FaCheck className="w-3.5 h-3.5" />
                                        </div>
                                        <Text className="text-gray-700">{point}</Text>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-4">
                                <a 
                                    href="#learn-more" 
                                    className="inline-flex items-center text-blue-500 font-medium hover:text-blue-600 transition-colors"
                                >
                                    Learn more
                                    <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About