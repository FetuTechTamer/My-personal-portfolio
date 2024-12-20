import React from 'react'
import service1 from '../images/photo_2.jpg'
import service2 from '../images/photo_3.jpg'
import service3 from '../images/photo_4.jpg'
import service4 from '../images/photo_5.jpg'

const Service = () => {
    return (
        <div className="py-6 max-w-[1200px] mx-auto">
            <div className="mx-auto px-4 md:px-8">
                <div className="mb-4 flex items-center justify-between ">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl lg:text-3xl text-white">
                            My <span>Projects</span>
                        </h2>
                        <p className="text-gray-500">
                            These are my latest projects for different clients.
                        </p>
                    </div>
                </div>

                <div className="grid  gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8" id='service'>
                    <a href="/" class="group h-48 overflow-hidden rounded-lg shadow-lg md:h-80">
                        <img src={service1} alt="" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    </a>

                    <a href="/" class="group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80">
                        <img src={service2} alt="" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    </a>

                    <a href="/" class="group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80">
                        <img src={service3} alt="" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    </a>

                    <a href="/" class="group h-48 overflow-hidden rounded-lg shadow-lg md:h-80">
                        <img src={service4} alt="" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Service
