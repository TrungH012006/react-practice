"use client";

import { useState } from 'react'
import { navBarLinks } from '@/data/index'
import Text from '../common/Text'
import { FaBars, FaXmark } from 'react-icons/fa6'

/**
 * NavBar component with responsive design
 */
const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
            <div className="default-container">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-white font-medium">
                                C
                            </div>
                            <span className="text-lg font-medium text-gray-900">Cambridge Tutor</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {navBarLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.link || '#'}
                                className={`
                                    text-sm font-medium transition-colors
                                    ${index === navBarLinks.length - 1
                                        ? 'text-blue-500 hover:text-blue-600'
                                        : 'text-gray-600 hover:text-gray-900'
                                    }
                                `}
                            >
                                {link.label}
                            </a>
                        ))}
                        
                        {/* CTA Button */}
                        <a
                            href="#get-started"
                            className="ml-4 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-colors"
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                        >
                            {isMenuOpen ? (
                                <FaXmark className="w-5 h-5" />
                            ) : (
                                <FaBars className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`
                    md:hidden absolute top-[100px] left-0 right-0 border-b bg-white border-gray-100
                    transition-all duration-200 overflow-hidden
                    ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}
            >
                <div className="default-container py-4 space-y-4">
                    {navBarLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.link || '#'}
                            className="block py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    
                    {/* CTA Button */}
                    <a
                        href="#get-started"
                        className="block w-full text-center px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NavBar
