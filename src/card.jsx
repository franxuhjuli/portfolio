import { FaExternalLinkAlt } from "react-icons/fa";



export function Card({ 
    title, 
    description, 
    imageUrl, 
    technologies = [], 
    projectUrl,
    aditionalClassName = "",
    
  }) {
    return (
      <div className="bg-indigo-200 bg-opacity-10 rounded-lg shadow-xl overflow-hidden max-w-sm w-full md:w-1/2">
        <div className="relative h-auto w-full className">
          <img
            onClick={() => window.open(projectUrl, "_blank")}
            src={imageUrl}
            alt={title}
            className="cursor-pointer w-full h-full transition-transform duration-300 ease-in-out hover:scale-105 "
          />
        </div>
        <div className={`${aditionalClassName} p-6`}>
          <h2 className="text-xl text-white font-semibold mb-2">{title}</h2>
          <p className="text-purple-200 text-sm mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {Array.isArray(technologies) && technologies.map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-orange-600 text-indigo-900 text-xs font-bold rounded-sm">
                {tech}
              </span>
            ))}
          </div>
          <button 
            onClick={() => window.open(projectUrl, "_blank")}
            className=" bg-white text-purple-800 px-2 py-2 rounded hover:bg-orange-400 hover:text-purple-950 transition duration-300 hover:scale-115"
          >
            <FaExternalLinkAlt />
          </button>
        </div>
      </div>
    )
  }
  
