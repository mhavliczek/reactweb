import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="card-custom mb-8 animate-fadeIn">
      <div>
        <h5 className="text-2xl font-bold text-[#e67e22] mb-1">{project.group}</h5>
        <h5 className="text-2xl font-bold text-[#e67e22] mb-1">
          {project.link ? (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline hover:text-[#d35400] transition-colors"
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h5>
        <h5 className="text-2xl font-bold text-[#e67e22] mb-3">{project.company}</h5>
        <p className="text-gray-600 italic mb-6">{project.description}</p>
        
        <table className="w-full mt-4 border-collapse">
          <thead className="bg-[#e67e22] text-white">
            <tr>
              <th className="px-4 py-3 text-left">Nombre</th>
              <th className="px-4 py-3 text-left">RUT</th>
            </tr>
          </thead>
          <tbody>
            {project.members.map((member, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-4 py-3 border-b border-gray-200">{member.name}</td>
                <td className="px-4 py-3 border-b border-gray-200">{member.rut}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectCard;