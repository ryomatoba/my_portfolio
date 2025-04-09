import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './SkillBar.css';

const SkillBar = ({ name, level, color }) => {
  const barRef = useRef(null);
  const isInView = useInView(barRef, { once: true, margin: "-100px" });
  
  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}%</span>
      </div>
      
      <div className="skill-bar" ref={barRef}>
        <motion.div 
          className="skill-bar-fill"
          style={{ backgroundColor: color || 'var(--color-primary)' }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default SkillBar;