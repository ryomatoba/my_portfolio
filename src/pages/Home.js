import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

// コンポーネントが存在しない場合は、シンプルな一時的なコンポーネントを作成
const Hero = ({ title, subtitle, description }) => (
  <div className="hero">
    <div className="hero-content">
      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>
      <p>{description}</p>
    </div>
  </div>
);

const AboutPreview = () => (
  <div className="about-preview">
    <h2>プロフィール</h2>
    <p>
      的場 陵と申します。フロントエンドエンジニアとして、ユーザー体験を大切にした
      モダンでインタラクティブなWebサイト制作が得意です。
    </p>
  </div>
);

const Home = () => {
  return (
    <div className="home-page">
      <Hero 
        title="的場 陵"
        subtitle="フロントエンドエンジニア / Webデザイナー"
        description="ユーザー体験を大切にした、モダンでインタラクティブなWebサイト制作が得意です。"
      />
      
      <section className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AboutPreview />
          <div className="cta-container">
            <Link to="/about" className="btn">
              もっと詳しく
            </Link>
          </div>
        </motion.div>
      </section>
      
      <section className="section section-gray">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">実績</h2>
          {/* FeaturedProjects コンポーネントを一時的にコメントアウト */}
          {/* <FeaturedProjects limit={3} /> */}
          <div className="featured-projects-placeholder">
            <p>近日公開予定の実績です</p>
          </div>
          <div className="cta-container">
            <Link to="/projects" className="btn">
              全ての実績を見る
            </Link>
          </div>
        </motion.div>
      </section>
      
      <section className="section">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">スキル</h2>
          {/* SkillsHighlight コンポーネントを一時的にコメントアウト */}
          {/* <SkillsHighlight /> */}
          <div className="skills-placeholder">
            <p>主要スキル: React, JavaScript, HTML/CSS, Node.js</p>
          </div>
          <div className="cta-container">
            <Link to="/skills" className="btn">
              スキル詳細を見る
            </Link>
          </div>
        </motion.div>
      </section>
      
      <section className="section section-contact">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">お問い合わせ</h2>
          <p className="contact-text">
            お仕事のご依頼やご質問など、お気軽にお問い合わせください。
          </p>
          <div className="cta-container">
            <Link to="/contact" className="btn btn-accent">
              お問い合わせはこちら
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;