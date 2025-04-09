import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { id, title, shortDescription, thumbnail, category, tags } = project;
  
  return (
    <motion.div 
      className="project-card"
      whileHover={{ 
        y: -10,
        transition: { duration: 0.2 }
      }}
    >
      <Link to={`/projects/${id}`} className="project-card-link">
        <div className="project-card-image">
          <img src={thumbnail} alt={title} />
          <div className="project-card-category">{category}</div>
        </div>
        
        <div className="project-card-content">
          <h3 className="project-card-title">{title}</h3>
          <p className="project-card-description">{shortDescription}</p>
          
          <div className="project-card-tags">
            {tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
            {tags.length > 3 && (
              <span className="tag-more">+{tags.length - 3}</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;