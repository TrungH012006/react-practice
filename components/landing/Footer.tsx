import { organizationInfo, socialLinks } from '@/data/index'
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'
import Text from '../common/Text'

const iconMap = {
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaGithub
}

/**
 * Minimal Footer component with organization info and social links
 */
const Footer = () => {
    const currentYear = new Date().getFullYear()
    
    return (
        <footer className="bg-white py-12 border-t border-gray-100">
            <div className="default-container">
                <div className="flex flex-col items-center text-center space-y-6">
                    {/* Logo & Name */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-white font-medium">
                            C
                        </div>
                        <span className="text-lg font-medium text-gray-900">{organizationInfo.name}</span>
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex gap-4">
                        {socialLinks.map((social, index) => {
                            const Icon = iconMap[social.icon as keyof typeof iconMap]
                            return (
                                <a 
                                    key={index} 
                                    href={social.link} 
                                    className="p-2 text-gray-500 hover:text-blue-500 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            )
                        })}
                    </div>
                    
                    {/* Copyright */}
                    <p className="text-sm text-gray-500">
                        &copy; {currentYear} {organizationInfo.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer