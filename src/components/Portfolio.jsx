import React from 'react';
import { FaPaintBrush, FaCode, FaChartLine, FaBullhorn, FaFileAlt } from 'react-icons/fa';

const Portfolio = ({ theme }) => {
    const experiences = [
        {
            company: "Logo Design",
            description: "Creative logo designs that capture brand identity.",
            tags: ["Creative", "Branding"],
            icon: <FaPaintBrush className="text-4xl" />,
            percentage: 85,
        },
        {
            company: "Web Development",
            description: "Building responsive and dynamic websites.",
            tags: ["HTML", "CSS", "JavaScript"],
            icon: <FaCode className="text-4xl" />,
            percentage: 90,
        },
        {
            company: "Graphic Design",
            description: "Visual communication through innovative design.",
            tags: ["Illustration", "Adobe"],
            icon: <FaFileAlt className="text-4xl" />,
            percentage: 75,
        },
        {
            company: "Digital Marketing",
            description: "Strategies to enhance online presence and engagement.",
            tags: ["Social Media", "Campaigns"],
            icon: <FaBullhorn className="text-4xl" />,
            percentage: 70,
        },
        {
            company: "Content Creation",
            description: "Producing engaging content across various platforms.",
            tags: ["Blogging", "Video"],
            icon: <FaChartLine className="text-4xl" />,
            percentage: 88,
        },
    ];

    return (
        <div className={`py-10 ${theme === 'light' ? 'bg-white' : 'bg-black'} transition-colors duration-300`} id='portfolio'>
            <style>
                {`
                    .portfolio-card {
                        transition: transform 0.3s, box-shadow 0.3s;
                        perspective: 1000px; /* Enable 3D perspective */
                    }
                    .portfolio-card:hover {
                        transform: scale(1.05) rotateY(5deg); /* Scale and slight rotation on hover */
                        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                    }
                    .hover-details {
                        opacity: 0;
                        transition: opacity 0.3s;
                    }
                    .portfolio-card:hover .hover-details {
                        opacity: 1; /* Show details on hover */
                    }
                `}
            </style>

            <h2 className={`mb-8 text-4xl ${theme === 'light' ? 'text-gray-900' : 'text-white'} text-center font-bold`}>
                My <span className="text-red-500">Skills</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {experiences.map((experience, index) => (
                    <div 
                        key={index} 
                        className={`portfolio-card ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-800'} p-6 rounded-lg shadow-lg cursor-pointer relative overflow-hidden`}
                    >
                        <div className="flex items-center justify-center mb-4">
                            {experience.icon}
                        </div>
                        <h3 className={`${theme === 'light' ? 'text-gray-900' : 'text-white'} text-lg text-center`}>
                            {experience.company}
                        </h3>
                        <p className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-400'} text-center mt-2`}>
                            {experience.description}
                        </p>
                        <div className="hover-details text-center mt-4">
                            <h4 className="text-red-500 font-bold">Learn More</h4>
                            <p className={`${theme === 'light' ? 'text-gray-900' : 'text-gray-300'}`}>Skills: {experience.tags.join(', ')}</p>
                            <p className={`${theme === 'light' ? 'text-gray-900' : 'text-gray-300'}`}>Proficiency: {experience.percentage}%</p>
                        </div>
                        <div className="flex justify-center space-x-2 mt-2">
                            {experience.tags.map((tag, i) => (
                                <span key={i} className={`text-xs px-2 py-1 rounded-full ${theme === 'light' ? 'bg-red-500 text-white' : 'bg-red-500 text-white'}`}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <span className={`${theme === 'light' ? 'text-gray-900' : 'text-gray-300'}`}>{experience.percentage}%</span>
                            </div>
                            <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                                <div 
                                    className="bg-red-500 h-2 rounded-full" 
                                    style={{ width: `${experience.percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;