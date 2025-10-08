"use client";

import Subheading from "../common/Subheading"
import Text from "../common/Text"
import { testimonials } from "@/data/index"
import { FaStar, FaQuoteLeft } from "react-icons/fa"

const Testimonials = () => {
    return (
        <div id="testimonials" className="relative py-16 md:py-24 bg-white">
            <div className="default-container px-4 sm:px-6">
                {/* Header Section */}
                <div className="max-w-2xl mx-auto space-y-4 text-center mb-12 md:mb-16">
                    <Subheading className="text-blue-500">
                        Customer Testimonials
                    </Subheading>
                    <Text className="text-lg md:text-xl text-gray-600">
                        Read what our users have to say about our platform
                    </Text>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index}
                            className="
                                bg-white
                                p-4 sm:p-6
                                rounded-lg
                                border border-gray-100
                                transition-all
                                hover:shadow-sm
                            "
                        >
                            {/* Author and Rating */}
                            <div className="flex flex-col xs:flex-row justify-between items-start mb-4">
                                <div className="flex flex-col xs:flex-row items-center xs:items-center gap-2 sm:gap-3 w-full xs:w-auto">
                                    <div className="w-10 h-10 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 mb-2 xs:mb-0">
                                        <div className="w-full h-full bg-blue-500 flex items-center justify-center text-white font-medium">
                                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                    </div>
                                    <div className="min-w-0 max-w-full xs:max-w-[140px] sm:max-w-full text-center xs:text-left">
                                        <Text className="font-medium text-gray-900 text-sm sm:text-base">
                                            {testimonial.name}
                                        </Text>
                                        <Text className="text-xs sm:text-sm text-gray-500 truncate whitespace-nowrap overflow-hidden">
                                            {testimonial.title}
                                        </Text>
                                    </div>
                                </div>
                                <div className="flex text-yellow-400 mt-2 xs:mt-0 self-center xs:self-start">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="w-3 h-3 sm:w-4 sm:h-4" />
                                    ))}
                                </div>
                            </div>
                            
                            {/* Testimonial Content */}
                            <div className="relative">
                                <FaQuoteLeft className="absolute -top-1 -left-1 w-3 h-3 text-blue-100" />
                                <Text className="text-gray-600 pl-4 text-sm sm:text-base">
                                    {testimonial.testimonial}
                                </Text>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials