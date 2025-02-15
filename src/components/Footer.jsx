
import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';

const Footer = ({ theme }) => {
    const socialLinks = [
        {
            href: "https://www.linkedin.com/in/fethiya-abdurehim-3a0248331",
            icon: <AiFillLinkedin />,
            hoverColor: "text-blue-700",
        },
        {
            href: "https://github.com/FetuTechTamer",
            icon: <AiFillGithub />,
            hoverColor: "text-gray-800",
        },
        {
            href: "https://www.instagram.com/fethiyaabdurehim7",
            icon: <AiFillInstagram />,
            hoverColor: "text-pink-600",
        },
    ];

    return (
        <footer className={`py-4 mt-auto ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
            <div className="container mx-auto text-center">
                <div className="flex justify-center space-x-4 mb-2">
                    {socialLinks.map(({ href, icon, hoverColor }, index) => (
                        <a 
                            key={index} 
                            href={href} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={`transition-transform duration-300 hover:${hoverColor}`}
                        >
                            {icon}
                        </a>
                    ))}
                </div>
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Fetu Tech Tamer. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;