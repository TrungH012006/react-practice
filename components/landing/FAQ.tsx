"use client";

import { useState } from 'react'
import { FAQs } from '@/data/index'
import Subheading from '../common/Subheading'
import Text from '../common/Text'
import { IoAdd } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    return (
        <div id="faq" className="relative py-16 md:py-24 bg-white">
            <div className="default-container px-4 sm:px-6">
                <div className="max-w-3xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center space-y-3 sm:space-y-4 mb-12 md:mb-16">
                        <Subheading className="text-blue-500">
                            Frequently Asked Questions
                        </Subheading>
                        <Text className="text-base sm:text-lg md:text-xl text-gray-600">
                            Have another question? Contact us by email
                        </Text>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-3 sm:space-y-4">
                        {FAQs.map((faq, index) => (
                            <div key={index}>
                                <motion.div
                                    className={`
                                        rounded-lg overflow-hidden
                                        border border-gray-100
                                        transition-colors
                                        ${activeIndex === index 
                                            ? 'bg-blue-50 border-blue-100' 
                                            : 'bg-white hover:bg-gray-50'
                                        }
                                    `}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {/* Question Header */}
                                    <div
                                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                        className={`
                                            flex justify-between items-center p-4 sm:p-5
                                            cursor-pointer
                                            transition-colors
                                            ${activeIndex === index 
                                                ? 'text-blue-500' 
                                                : 'text-gray-700 hover:text-blue-500'
                                            }
                                        `}
                                    >
                                        <Text className="font-medium text-base sm:text-lg pr-2">
                                            {faq.question}
                                        </Text>
                                        
                                        <motion.div 
                                            className={`
                                                p-1 sm:p-1.5 rounded-full flex-shrink-0
                                                ${activeIndex === index 
                                                    ? 'bg-blue-100' 
                                                    : 'bg-gray-100'
                                                }
                                            `}
                                            animate={{ rotate: activeIndex === index ? 45 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <IoAdd className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                        </motion.div>
                                    </div>
                                    
                                    {/* Answer Section */}
                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <Text className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm sm:text-base text-gray-600">
                                                    {faq.answer}
                                                </Text>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ