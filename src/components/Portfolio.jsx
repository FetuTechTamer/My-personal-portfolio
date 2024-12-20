import React from 'react'

const Portfolio = () => {
    return (
        <div className="py-10 bg-[#0000] " id='portfolio'>
            <h2 className="mb-8 text-3xl text-white text-center">
                My <span>Experience</span>
            </h2>

            <div className="mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto">
                <p>FirstCompany</p>
                <p className="text-gray-400">(2020 - Present)</p>
                <p className="text-gray-500">
                    Description of your experience in this company.
                </p>
            </div>

            <div className="h-[50px] w-[2px] bg-slate-400 my-1 mx-auto"></div>

            <div className="mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto">
                <p>SecondCompany</p>
                <p className="text-gray-400">(2020 - Present)</p>
                <p className="text-gray-500">
                    Description of your experience in this company.
                </p>
            </div>

            <div className="h-[50px] w-[2px] bg-slate-400 my-1 mx-auto"></div>


            <div className="mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto">
                <p>ThirdCompany</p>
                <p className="text-gray-400">(2020 - Present)</p>
                <p className="text-gray-500">
                    Description of your experience in this company.
                </p>
            </div>

            <div className="h-[50px] w-[2px] bg-slate-400 my-1 mx-auto"></div>


            <div className="mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto">
                <p>FourthCompany</p>
                <p className="text-gray-400">(2020 - Present)</p>
                <p className="text-gray-500">
                    Description of your experience in this company.
                </p>
            </div>



        </div>
    );
};

export default Portfolio
