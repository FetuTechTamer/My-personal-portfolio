import React from 'react';
import service1 from '../images/photo_2.jpg';
import service2 from '../images/photo_3.jpg';
import service3 from '../images/photo_4.jpg';
import service4 from '../images/photo_5.jpg';

const Service = ({ theme }) => {
    return (
        <div className={`py-6 max-w-[1200px] mx-auto ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
            <div className="mx-auto px-4 md:px-8">
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex flex-col gap-4">
                        <h2 className={`text-2xl lg:text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800' }`}>
                            My <span className="text-yellow-300">Projects</span>
                        </h2>
                        <p className={`text-gray-500 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                            These are my latest projects for different clients.
                        </p>
                    </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 xl:gap-8" id="service">
                    <a href="/" className="group h-48 overflow-hidden rounded-lg shadow-lg md:h-80">
                        <img src={service1} alt="Project 1" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    </a>

                    <a href="/" className="group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80">
                        <img src={service2} alt="Project 2" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    </a>

                    <a href="/" className="group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80">
                        <img src={service3} alt="Project 3" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    </a>

                    <a href="/" className="group h-48 overflow-hidden rounded-lg shadow-lg md:h-80">
                        <img src={service4} alt="Project 4" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Service;