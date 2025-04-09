import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';

const FeaturedProjects = ({ limit = 3 }) => {
  // 表示するプロジェクト数を制限
  const featuredProjects = projects.slice(0, limit);
  
  return (
    <div className="featured-projects">
      <div className="projects-grid">
        {featuredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;