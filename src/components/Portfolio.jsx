import React from 'react';
import { FaCode, FaImage, FaBullhorn, FaPenNib } from 'react-icons/fa';

const ExperienceCard = ({ experience, theme }) => {
    return (
        <div className={`portfolio-card ${theme === 'light' ? 'bg-gray-200' : 'bg-black'} shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105`}>
            <div className="portfolio-card-inner">
                <div className="portfolio-card-front">
                    <div className="flex items-center justify-center mb-2">
                        {experience.icon}
                    </div>
                    <h3 className={`${theme === 'light' ? 'text-gray-900' : 'text-white'} text-lg text-center font-semibold`}>
                        {experience.company}
                    </h3>
                    <p className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-400'} text-center mt-2`}>
                        {experience.description}
                    </p>
                </div>
                <div className="portfolio-card-back">
                    <p className={`${theme === 'light' ? 'text-gray-900' : 'text-gray-300'} text-center`}>
                        Skills: <span className="font-bold">{experience.tags.join(', ')}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

const Portfolio = ({ theme }) => {
    const experiences = [
        {
            company: "Web Development",
            description: "Proficient in HTML, CSS, JavaScript, and frameworks like React.",
            tags: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Tailwind"],
            icon: <FaCode className="text-5xl text-blue-500" />,
            gridSpan: 'md:col-span-1',
        },
        {
            company: "Graphic Design",
            description: "Skilled in Adobe Creative Suite and UI/UX design tools.",
            tags: ["Photoshop", "Illustrator", "Figma"],
            icon: <FaImage className="text-5xl text-purple-500" />,
            gridSpan: 'md:col-span-2',
        },
        {
            company: "Digital Marketing",
            description: "Experienced in SEO and social media strategies.",
            tags: ["SEO", "Social Media", "Content Strategy"],
            icon: <FaBullhorn className="text-5xl text-green-500" />,
            gridSpan: 'md:col-span-2',
        },
        {
            company: "Content Creation",
            description: "Creating engaging content for blogs and videos.",
            tags: ["Blogging", "Video Production", "Copywriting"],
            icon: <FaPenNib className="text-5xl text-red-500" />,
            gridSpan: 'md:col-span-1',
        },
    ];

    return (
        <div className={`py-10 ${theme === 'light' ? 'bg-white' : 'bg-gray-900'} transition-colors duration-300`} id='portfolio'>
            <div className="mx-auto px-4 md:px-8 max-w-[1200px]">
                <h2 className={`mb-8 text-4xl ${theme === 'light' ? 'text-gray-900' : 'text-white'} text-center font-bold`}>
                    My <span className="text-yellow-300">Works</span>
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 xl:gap-8">
                    {experiences.map((experience, index) => (
                        <div key={index} className={`group ${experience.gridSpan}`}>
                            <ExperienceCard experience={experience} theme={theme} />
                        </div>
                    ))}
                </div>
            </div>

            <style>
                {`
                    .portfolio-card {
                        width: 100%; /* Full width */
                        height: 300px; /* Fixed height */
                        perspective: 1000px; /* Enable 3D perspective */
                        margin: 15px; /* Space between cards */
                        border-radius: 15px; /* Rounded corners */
                        overflow: hidden; /* Hide overflow */
                    }
                    .portfolio-card-inner {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        transform-style: preserve-3d; /* Preserve 3D */
                        transition: transform 0.3s; /* Smooth transition */
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
                        padding: 20px; /* Padding for better layout */
                        border-radius: 15px; /* Match corners */
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
                    }
                    .portfolio-card-back {
                        transform: rotateY(180deg); /* Rotate back side */
                        background-color: ${theme === 'light' ? '#f9f9f9' : '#444'}; /* Back side color */
                        color: ${theme === 'light' ? '#333' : '#fff'}; /* Text color */
                    }
                `}
            </style>
        </div>
    );
};

export default Portfolio;