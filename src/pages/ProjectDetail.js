// src/pages/Projects/ProjectDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { projectId } = useParams(); // URLからprojectIdを取得
  const project = projects.find(p => p.id === projectId); // IDに一致するプロジェクトを検索

  // プロジェクトが見つからない場合の表示
  if (!project) {
    return <div className="container mx-auto py-12 px-4 text-center">プロジェクトが見つかりません。</div>;
  }

  // プロジェクト詳細の表示
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      {/* プロジェクトの詳細情報を表示 */}
      <img src={project.thumbnail} alt={project.title} className="mb-6 rounded shadow-lg" />
      <p className="mb-4">{project.description}</p>
      {/* 他の詳細情報 (役割、技術スタックなど) を追加 */}
    </div>
  );
};

export default ProjectDetail; // ← デフォルトエクスポート