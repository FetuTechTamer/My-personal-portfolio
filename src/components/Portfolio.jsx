import React from 'react';
import { FaCode, FaFileAlt, FaBullhorn, FaChartLine } from 'react-icons/fa';

const ExperienceCard = ({ experience, theme }) => {
    return (
        <div className={`portfolio-card ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-800'} shadow-lg cursor-pointer`}>
            <div className="portfolio-card-inner">
                <div className="portfolio-card-front">
                    <div className="flex items-center justify-center mb-2">
                        {experience.icon}
                    </div>
                    <h3 className={`${theme === 'light' ? 'text-gray-900' : 'text-white'} text-lg text-center`}>
                        {experience.company}
                    </h3>
                    <p className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-400'} text-center mt-2`}>
                        {experience.description}
                    </p>
                </div>
                <div className="portfolio-card-back">
                    <h4 className="text-red-500 font-bold">Learn More</h4>
                    <p className={`${theme === 'light' ? 'text-gray-900' : 'text-gray-300'}`}>Skills: {experience.tags.join(', ')}</p>
                </div>
            </div>
        </div>
    );
};

const Portfolio = ({ theme }) => {
    const experiences = [
        {
            company: "Web Development",
            description: "Creating responsive and dynamic websites tailored to client needs.",
            tags: ["HTML", "CSS", "JavaScript"],
            icon: <FaCode className="text-5xl text-blue-500" />,
        },
        {
            company: "Graphic Design",
            description: "Transforming ideas into visual masterpieces through innovative design.",
            tags: ["Illustration", "Adobe Suite"],
            icon: <FaFileAlt className="text-5xl text-purple-500" />,
        },
        {
            company: "Digital Marketing",
            description: "Crafting strategies to boost online presence and user engagement.",
            tags: ["Social Media", "SEO", "Content Strategy"],
            icon: <FaBullhorn className="text-5xl text-green-500" />,
        },
        {
            company: "Content Creation",
            description: "Developing engaging content across blogs, videos, and social media.",
            tags: ["Blogging", "Video Production", "Social Media"],
            icon: <FaChartLine className="text-5xl text-red-500" />,
        },
    ];

    return (
        <div className={`py-10 ${theme === 'light' ? 'bg-white' : 'bg-black'} transition-colors duration-300`} id='portfolio'>
            <style>
                {`
                    .portfolio-card {
                        width: 200px; /* Card width */
                        height: 250px; /* Card height */
                        transition: transform 0.3s, box-shadow 0.3s;
                        perspective: 1000px; /* Enable 3D perspective */
                        margin: 15px; /* Space between cards */
                        border-radius: 15px; /* Rounded corners */
                    }
                    .portfolio-card-inner {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        transition: transform 0.3s;
                        transform-style: preserve-3d; /* Preserve 3D */
                        border-radius: 15px; /* Match inner card with outer */
                    }
                    .portfolio-card:hover .portfolio-card-inner {
                        transform: rotateY(180deg); /* Flip on hover */
                    }
                    .portfolio-card-front, .portfolio-card-back {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        backface-visibility: hidden; /* Hide back when facing front */
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        padding: 15px; /* Increased padding */
                        border-radius: 15px; /* Match corners */
                    }
                    .portfolio-card-back {
                        transform: rotateY(180deg); /* Rotate back side */
                        background-color: ${theme === 'light' ? '#f9f9f9' : '#333'}; /* Back side color */
                        color: ${theme === 'light' ? '#333' : '#fff'}; /* Text color */
                    }
                `}
            </style>

            <h2 className={`mb-8 text-4xl ${theme === 'light' ? 'text-gray-900' : 'text-white'} text-center font-bold`}>
                My <span className="text-red-500">Skills</span>
            </h2>
            <div className="flex justify-center flex-wrap">
                {experiences.map((experience, index) => (
                    <ExperienceCard key={index} experience={experience} theme={theme} />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;