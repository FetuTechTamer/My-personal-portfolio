import React, { useEffect, useState } from 'react';
import test1 from '../images/test1.jpg';
import test2 from '../images/test2.jpg';
import test3 from '../images/test3.jpg';
import test4 from '../images/test4.jpg';
// TestimonialCard Component
const TestimonialCard = ({ name, photo, quote, theme }) => (
  <div className={`flex flex-col items-center p-6 border rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
    <img src={photo} alt={`${name}'s photo`} className="w-24 h-24 rounded-full mb-4 object-cover" />
    <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>{name}</h3>
    <p className={`text-center italic ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>{quote}</p>
  </div>
);

// Testimonials Component
const Testimonials = ({ theme }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
        name: 'Hanan Abdurehim',
        photo: test1,
        quote: 'This service was exceptional! Highly recommend.',
      },
      {
        name: 'Zelalem Yohannes',
        photo: test2, 
        quote: 'An amazing experience from start to finish.',
      },
      {
        name: 'Ribka Tefera',
        photo: test3,
        quote: 'Professional and efficient. Will use again!',
      },
      {
        name: 'Ahmed Ali',
        photo: test4, 
        quote: 'A wonderful service! Exceeded my expectations.',
      },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className={`py-10 max-w-[800px] mx-auto ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'}`}id="testimonials">
      <h2 className={`text-4xl font-semibold text-center mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
        Client <span className="primary-text">Testimonials</span>
      </h2>
     
      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-full flex-shrink-0">
              <TestimonialCard {...testimonial} theme={theme} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${currentIndex === index ? 'bg-yellow-400' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;