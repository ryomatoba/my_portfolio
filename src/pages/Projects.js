// src/pages/Projects.js
import React from 'react';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../data/projects'; 
const Projects = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">実績</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

// ↓↓↓ これが重要: デフォルトエクスポート ↓↓↓
export default Projects;