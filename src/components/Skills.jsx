import React from 'react';
import PropTypes from 'prop-types';
import { FaCode, FaReact, FaMobileAlt, FaGitSquare } from 'react-icons/fa';

const SkillCard = ({ skill, proficiency, theme }) => {
    return (
        <div className={`skill-card ${theme === 'light' ? 'bg-gray-200' : 'bg-black'} shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105`} id="skills">
            <div className="skill-card-inner">
                <div className="skill-card-front">
                    <div className="flex items-center justify-center mb-2">
                        {skill.icon}
                    </div>
                    <h3 className={`${theme === 'light' ? 'text-gray-900' : 'text-white'} text-lg text-center font-semibold`}>
                        {skill.company}
                    </h3>
                    <p className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-400'} text-center mt-2`}>
                        {skill.description}
                    </p>
                </div>
                <div className="skill-card-back">
                    <p className={`${theme === 'light' ? 'text-gray-900' : 'text-gray-300'} text-center`}>
                        Skills: <span className="font-bold">{skill.tags.join(', ')}</span>
                    </p>
                    <div className="mt-4">
                        <div className="text-gray-700">{skill.title}</div>
                        <div className="w-full bg-gray-300 rounded-full h-2">
                            <div
                                className={`bg-green-500 h-full rounded-full`}
                                style={{ width: `${proficiency}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

SkillCard.propTypes = {
    skill: PropTypes.shape({
        company: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        icon: PropTypes.element.isRequired,
        title: PropTypes.string.isRequired, 
    }).isRequired,
    proficiency: PropTypes.number.isRequired, 
    theme: PropTypes.oneOf(['light', 'dark']).isRequired,
};

const Skills = ({ theme }) => {
    const skills = [
        {
            company: "Languages",
            description: "Proficient in HTML, CSS, and JavaScript.",
            tags: ["HTML", "CSS", "JavaScript", "C#", "C++", "Java"],
            icon: <FaCode className="text-5xl text-blue-500" />,  // Code icon for languages
            title: "Proficiency Level",
            proficiency: 90, 
            gridSpan: 'md:col-span-1',
        },
        {
            company: "Frameworks",
            description: "Experienced with frameworks like React and Node.js.",
            tags: ["React", "Bootstrap", "Node.js", "Tailwind CSS"],
            icon: <FaReact className="text-5xl text-blue-500" />,  // React icon for frameworks
            title: "Proficiency Level",
            proficiency: 85, 
            gridSpan: 'md:col-span-2',
        },
        {
            company: "Responsive Design",
            description: "Skilled in creating responsive layouts using CSS techniques.",
            tags: ["Flexbox", "Grid", "Media Queries"],
            icon: <FaMobileAlt className="text-5xl text-green-500" />,  // Mobile icon for responsive design
            title: "Proficiency Level",
            proficiency: 90, 
            gridSpan: 'md:col-span-2',
        },
        {
            company: "Version Control",
            description: "Familiar with using Git for version control.",
            tags: ["Git", "GitHub"],
            icon: <FaGitSquare className="text-5xl text-red-500" />,  // Git icon for version control
            title: "Proficiency Level",
            proficiency: 70, 
            gridSpan: 'md:col-span-1',
        },
    ];

    return (
        <div className={`py-10 ${theme === 'light' ? 'bg-white' : 'bg-gray-900'} transition-colors duration-300`} id='skills'>
            <div className="mx-auto px-4 md:px-8 max-w-[1200px]">
                <h2 className={`mb-8 text-4xl ${theme === 'light' ? 'text-gray-800' : 'text-gray-300'} text-center font-bold`}>
                    My <span className="primary-text">Skills</span>
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 xl:gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className={`group ${skill.gridSpan}`}>
                            <SkillCard skill={skill} proficiency={skill.proficiency} theme={theme} />
                        </div>
                    ))}
                </div>
            </div>

            <style>
                {`
                    .skill-card {
                        width: 100%; /* Full width */
                        height: 300px; /* Fixed height */
                        perspective: 1000px; /* Enable 3D perspective */
                        margin: 15px; /* Space between cards */
                        border-radius: 15px; /* Rounded corners */
                        overflow: hidden; /* Hide overflow */
                    }
                    .skill-card-inner {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        transform-style: preserve-3d; /* Preserve 3D */
                        transition: transform 0.3s; /* Smooth transition */
                    }
                    .skill-card:hover .skill-card-inner {
                        transform: rotateY(180deg); /* Flip on hover */
                    }
                    .skill-card-front, .skill-card-back {
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
                    .skill-card-back {
                        transform: rotateY(180deg); /* Rotate back side */
                        background-color: ${theme === 'light' ? '#f9f9f9' : '#444'}; /* Back side color */
                        color: ${theme === 'light' ? '#333' : '#fff'}; /* Text color */
                    }
                `}
            </style>
        </div>
    );
};

Skills.propTypes = {
    theme: PropTypes.oneOf(['light', 'dark']).isRequired,
};

export default Skills;
