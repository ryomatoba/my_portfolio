import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { projectsData, type Project } from '../../../data/projects'; // さらに正しい相対パスに修正

// ローカルのProjectインターフェース定義を削除 (インポートしたものを使用)

// ProjectCardPropsから不要なものを削除し、idを追加
interface ProjectCardProps {
  project: Project; // Project型を使用
  index: number;
}

// ProjectCardコンポーネントをLinkでラップし、内容を調整
const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { id, title, description, image, tags } = project;

  return (
    <motion.div
      className="h-full" // 高さを揃えるため
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Linkコンポーネントでカード全体をラップ */}
      <Link to={`/portfolio/${id}`} className="block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
        {/* Image Area */}
        <div className="relative h-40 bg-gray-100 dark:bg-gray-700 flex-shrink-0">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-primary-accent bg-opacity-10 dark:bg-opacity-20">
              <span className="text-sm font-semibold text-primary-accent opacity-50">Image Coming Soon</span>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-md font-bold mb-1">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-xs mb-2 flex-grow">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-3">
            {tags.slice(0, 3).map((tag: string) => ( // tagにstring型を指定
              <span key={tag} className="bg-secondary-purple bg-opacity-20 dark:bg-opacity-30 text-secondary-purple dark:text-purple-300 px-1.5 py-0.5 text-[10px] rounded-full">
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
                <span className="text-gray-400 text-[10px] self-center">...</span>
            )}
          </div>

          {/* 詳細を見るリンク */}
          <div className="mt-auto text-right text-primary-accent text-xs font-medium flex items-center justify-end">
            詳細を見る <FiChevronRight className="ml-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};


export default function PortfolioSection() {
  // ----- projects 配列の定義を削除 -----

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          PORTFOLIO
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-xl mx-auto" // 中央揃え、マージン、最大幅を追加
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }} // h2より少し遅延
        >
          制作物一覧です。インターンシップやハッカソン、個人開発で作成したアプリケーションを紹介します。
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* インポートした projectsData を使用 */}
          {projectsData.map((project: Project, index: number) => ( // projectとindexに型を指定
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
