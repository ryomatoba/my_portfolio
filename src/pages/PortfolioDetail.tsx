import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiGithub, FiExternalLink } from 'react-icons/fi';
import { projectsData, type Project } from '../data/projects';

export default function PortfolioDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  // インポートした projectsData を使用
  const project = projectsData.find(p => p.id === projectId);
  
  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">プロジェクトが見つかりません</h1>
        <Link to="/" className="text-primary-accent hover:underline">
          ホームに戻る
        </Link>
      </div>
    );
  }

  const {
    title,
    longDescription,
    image,
    features,
    problem,
    solution,
    techStackDetails,
    architectureDiagramUrl,
    githubUrl,
    demoUrl
  } = project;

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      {/* Back Button */}
      <Link to="/#portfolio" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-accent mb-6 text-sm">
        <FiArrowLeft className="mr-2" />
        ポートフォリオ一覧に戻る
      </Link>

      {/* Project Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6">{title}</h1>

      {/* Main Image */}
      {image && (
        <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
          <img src={image} alt={title} className="w-full h-auto" />
        </div>
      )}

      {/* External Links */}
      <div className="flex flex-wrap gap-4 mb-8">
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline flex items-center text-sm">
            <FiGithub className="mr-2" /> GitHub Repository
          </a>
        )}
        {demoUrl && (
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline flex items-center text-sm">
            <FiExternalLink className="mr-2" /> Live Demo
          </a>
        )}
      </div>


      {/* Project Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (Main Description) */}
        <div className="lg:col-span-2 space-y-6">
          {longDescription && (
             <section>
               <h2 className="detail-section-title">概要</h2>
               <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{longDescription}</p>
             </section>
          )}
           {problem && (
             <section>
               <h2 className="detail-section-title">課題</h2>
               <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{problem}</p>
             </section>
           )}
            {solution && (
             <section>
               <h2 className="detail-section-title">解決策</h2>
               <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{solution}</p>
             </section>
           )}
        </div>

        {/* Right Column (Side Info) */}
        <aside className="space-y-6">
          {features && features.length > 0 && (
            <section className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h2 className="detail-section-title mb-3">主な機能</h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>
          )}

          {techStackDetails && techStackDetails.length > 0 && (
            <section className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h2 className="detail-section-title mb-3">使用技術詳細</h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
                {techStackDetails.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </section>
          )}

          {architectureDiagramUrl && (
             <section className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
               <h2 className="detail-section-title mb-3">構成図</h2>
               <img src={architectureDiagramUrl} alt={`${title} 構成図`} className="w-full h-auto rounded" />
             </section>
           )}
        </aside>
      </div>
    </div>
  );
}

// 詳細ページのセクションタイトルスタイル (index.cssなどに追加)
// .detail-section-title {
//   @apply text-xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700;
// }