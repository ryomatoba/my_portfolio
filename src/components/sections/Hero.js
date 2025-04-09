import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = ({ title, subtitle, description }) => {
  return (
    <section className="hero">
      <div className="hero-content container">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <p className="hero-description">{description}</p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-accent">お問い合わせ</a>
            <a href="#work" className="btn btn-outline">実績を見る</a>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="profile-image-container">
            {/* プロフィール画像またはアバター */}
            <img 
              src="/assets/images/profile.jpg" 
              alt="的場 陵" 
              className="profile-image" 
            />
          </div>
        </motion.div>
      </div>
      
      <div className="hero-scroll-indicator">
        <motion.div
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5 
          }}
        >
          <span className="scroll-text">スクロール</span>
          <i className="scroll-icon"></i>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;