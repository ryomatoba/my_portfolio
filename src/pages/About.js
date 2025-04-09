// src/pages/About.js
import React from 'react';
// 必要であれば他のコンポーネントをインポート
// import AboutSection from '../components/sections/AboutSection';

const About = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">プロフィール</h1>
      {/* ここにAboutページのコンテンツを追加 */}
      <p>ここに自己紹介文などを記述します。</p>
      {/* 例: <AboutSection /> */}
    </div>
  );
};

export default About; // ← デフォルトエクスポート