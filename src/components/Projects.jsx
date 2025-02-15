import React, { useEffect, useState, useRef } from 'react';
import { FaHeart as EmptyHeart, FaHeart } from 'react-icons/fa';
import oneMinuteQuiz from '../images/1-minute-quiz.jpg';
import calculator from '../images/calculator.jpg';
import exploreAfrica from '../images/explore-wonders-of-africa.jpg';
import imageSlider from '../images/3d-image-slider.jpg';

const ProjectCard = ({ title, description, link, theme, likes, onLike, liked, image }) => {
  return (
    <div className={`relative overflow-hidden border rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 ${theme === 'dark' ? 'bg-gray-900 text-gray-300 border-gray-700' : 'bg-white text-gray-800 border-gray-300'} flex flex-col`}>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex-grow">
        <h2 className="text-2xl font-bold mb-3">{title}</h2>
        <p className="mb-4">{description || "No description available."}</p>
      </div>
      <div className="p-4 border-t border-gray-300">
        <button onClick={onLike} className="flex items-center transition-colors duration-200">
          {liked ? (
            <FaHeart className="text-red-500" />
          ) : (
            <EmptyHeart className="text-gray-400" />
          )}
          <span className="ml-2 font-semibold">{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
        </button>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:text-blue-700 transition-colors duration-200 mt-2 block"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

// Projects Component
const Projects = ({ theme }) => {
  const [repositories, setRepositories] = useState([]);
  const [likes, setLikes] = useState({});
  const [likedStates, setLikedStates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/FetuTechTamer/repos');
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        setRepositories(data);

        const initialLikes = {};
        const initialLikedStates = {};
        data.forEach(repo => {
          initialLikes[repo.id] = 0;
          initialLikedStates[repo.id] = false;
        });
        setLikes(initialLikes);
        setLikedStates(initialLikedStates);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchRepositories();
  }, []);

  const toggleLike = (id) => {
    setLikedStates(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
    
    setLikes(prevLikes => ({
      ...prevLikes,
      [id]: prevLikes[id] + (likedStates[id] ? -1 : 1),
    }));
  };

  const displayedProjects = [
    {
      name: '1-minute-Quiz-',
      description: 'A quick quiz application to test your knowledge.',
      image: oneMinuteQuiz,
    },
    {
      name: 'calculator',
      description: 'A simple calculator that performs basic arithmetic operations.',
      image: calculator, 
    },
    {
      name: 'Explore-Africa',
      description: 'A platform to explore the beauty and diversity of African cultures and landscapes.',
      image: exploreAfrica, 
    },
    {
      name: 'Simple_3D_image_slider',
      description: 'A user-friendly image slider showcasing 3D visuals.',
      image: imageSlider,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0'); 
          observer.unobserve(entry.target);
        }
      });
    });

    cardRefs.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, [repositories]);

  return (
    <div className={`py-10 max-w-[1200px] mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`} id="projects">
      <header className="text-center mb-12">
        <h2 className={`text-4xl font-extrabold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
          My <span className="primary-text">Projects</span>
        </h2>
        <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mt-2`}>
          Explore my recent projects and contributions.
        </p>
      </header>

      {loading && <p className="text-center text-gray-600">Loading projects...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}
      {!loading && !repositories.length && <p className="text-center text-gray-600">No projects available.</p>}

      {/* Projects Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {repositories
          .filter(repo => displayedProjects.some(project => project.name === repo.name)) 
          .map((repo, index) => {
            const project = displayedProjects.find(project => project.name === repo.name);
            return (
              <div 
                key={repo.id} 
                ref={el => (cardRefs.current[index] = el)} // Store reference to the card
                className={`opacity-0 transition-opacity duration-500`} 
              >
                <ProjectCard
                  title={repo.name}
                  description={project.description}
                  link={repo.html_url}
                  theme={theme}
                  likes={likes[repo.id] || 0}
                  onLike={() => toggleLike(repo.id)}
                  liked={likedStates[repo.id] || false}
                  image={project.image} 
                />
                {/* Divider */}
                {index < repositories.length - 1 && <div className="border-t border-gray-300 my-4"></div>}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Projects;