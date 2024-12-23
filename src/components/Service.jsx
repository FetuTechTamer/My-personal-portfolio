import React from 'react';

const Service = ({ theme }) => {
    return (
        <div className={`py-6 max-w-[1200px] mx-auto ${theme === 'dark' ? 'bg-black' : 'bg-gray-100'}` }id="skills">
            <div className="mx-auto px-4 md:px-8">
                <header className="mb-8 text-center">
                    <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-yellow-300' : 'text-gray-800'}`}>
                        My <span className="text-yellow-400">Skills</span>
                    </h2>
                    <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mt-2`}>
                        Explore my areas of expertise.
                    </p>
                </header>

                {/* Skills Section */}
                <div className="flex flex-wrap justify-center gap-8">
                    {[
                        {
                            category: 'Technical Skills',
                            items: [
                                'HTML, CSS, JavaScript, React',
                            ],
                        },
                        {
                            category: 'Creative Skills',
                            items: [
                                'Branding, Logo Design, Image Editing',
                            ],
                        },
                        {
                            category: 'Soft Skills',
                            items: [
                                'Communication, Collaboration, Problem-Solving',
                            ],
                        },
                    ].map((skillSet, index) => (
                        <div
                            key={index}
                            className={`relative flex items-center justify-center w-48 h-48 bg-white border-2 border-yellow-400 rounded-full shadow-lg transition-all duration-300 hover:bg-yellow-300`}
                        >
                            <span className="absolute text-center text-gray-800 font-semibold transition-opacity duration-300 hover:opacity-30">
                                {skillSet.category}
                            </span>
                            <span className="absolute text-center text-gray-600 opacity-0 transition-opacity duration-300 hover:opacity-100">
                                {skillSet.items.join(', ')}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;