import { motion } from 'framer-motion';
import {
  FaPython, FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaJava,
  FaAws, FaGoogle, FaDocker, FaDatabase, FaGitAlt
} from 'react-icons/fa';
import { SiFlask, SiTypescript, SiMysql, SiAmazondynamodb } from 'react-icons/si';

type SkillCardProps = {
  icon: React.ReactNode;
  title: string;
  // level?: number; // <--- 削除
  detail: string;
  index: number;
};

// SkillCardコンポーネントからレベル表示を削除
const SkillCard = ({ icon, title, detail, index }: SkillCardProps) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center space-y-3 h-full" // h-full追加
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="text-4xl text-primary-accent mb-2">
        {icon}
      </div>
      <h3 className="text-lg font-bold">{title}</h3>

      {/* ----- 習熟度バーとパーセンテージ表示を削除 ----- */}
      {/*
      {level && (
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-2">
          <motion.div
            className="bg-primary-accent h-2.5 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
          />
        </div>
      )}
      <p className="text-xs text-primary-accent">{level}%</p>
      */}
      {/* ----- 削除ここまで ----- */}

      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 flex-grow">
        {detail}
      </p>
    </motion.div>
  );
};

export default function SkillsSection() {
  // スキルデータから level を削除
  const backendSkills = [
    { icon: <FaPython />, title: 'Python', detail: 'FlaskでのWeb API開発、AWS Lambda関数開発に使用' },
    { icon: <SiFlask />, title: 'Flask', detail: 'インターンでのWebアプリケーションバックエンド開発' },
    { icon: <FaJava />, title: 'Java', detail: '授業や基本情報技術者試験での学習経験' },
    { icon: <FaDatabase />, title: 'Database', detail: 'SQL (MySQL/Cloud SQL), NoSQL (DynamoDB)' },
  ];

  const frontendSkills = [
    { icon: <FaReact />, title: 'React', detail: 'インターン/ハッカソンでのフロントエンド開発、フックAPI中心' },
    { icon: <FaJsSquare />, title: 'JavaScript', detail: 'ES6+構文、非同期処理、DOM操作' },
    { icon: <SiTypescript />, title: 'TypeScript', detail: '基本的な型定義、Reactとの組み合わせ学習中' },
    { icon: <FaHtml5 />, title: 'HTML5', detail: 'セマンティックマークアップ、アクセシビリティ考慮' },
    { icon: <FaCss3Alt />, title: 'CSS3', detail: 'Tailwind CSS, Flexbox/Gridレイアウト, レスポンシブデザイン' },
  ];

  const infraCloudSkills = [
    { icon: <FaGoogle />, title: 'GCP', level: 75, detail: 'Cloud Run, Cloud SQL, Storage, Firebase Auth を用いたアプリ開発・デプロイ経験' },
    { icon: <FaAws />, title: 'AWS', level: 65, detail: 'Lambda, DynamoDB, API Gateway を用いたハッカソン開発経験, ECR利用経験' },
    { icon: <FaDocker />, title: 'Docker', level: 70, detail: 'コンテナ環境構築、Dockerfile作成、インターンでの開発/デプロイに活用' },
    { icon: <FaGitAlt />, title: 'CI/CD', level: 65, detail: 'GitHub Actions を用いたビルド・テスト・デプロイ自動化パイプライン構築経験' },
  ];

   const otherSkills = [
      { icon: <FaGitAlt />, title: 'Git/GitHub', detail: 'バージョン管理、ブランチ戦略、チーム開発での利用経験' },
      // { icon: <FiAward />, title: '基本情報技術者', detail: '2回生秋に取得。基礎知識の証明' },
  ]

  // ... (残りの SkillsSection コードは変更なし)
  return (
    <section id="skill" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          SKILL
        </motion.h2>

        <div className="space-y-12">
          {/* Backend */}
          <div>
            <motion.h3 className="text-2xl font-bold mb-6 pl-4 border-l-4 border-primary-accent" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }}>
              BACK-END
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {backendSkills.map((skill, index) => (
                <SkillCard key={skill.title} {...skill} index={index} />
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div>
            <motion.h3 className="text-2xl font-bold mb-6 pl-4 border-l-4 border-primary-accent" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }}>
              FRONT-END
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6"> {/* md:grid-cols-5に変更 */}
              {frontendSkills.map((skill, index) => (
                <SkillCard key={skill.title} {...skill} index={index + backendSkills.length} />
              ))}
            </div>
          </div>

          {/* Infra/Cloud */}
          <div>
            <motion.h3 className="text-2xl font-bold mb-6 pl-4 border-l-4 border-primary-accent" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }}>
              INFRA / CLOUD / DevOps
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {infraCloudSkills.map((skill, index) => (
                <SkillCard key={skill.title} {...skill} index={index + backendSkills.length + frontendSkills.length} />
              ))}
            </div>
          </div>

           {/* Others */}
           <div>
             <motion.h3 className="text-2xl font-bold mb-6 pl-4 border-l-4 border-primary-accent" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }}>
               OTHER TOOLS
             </motion.h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"> {/* md:grid-cols-4に変更 */}
               {otherSkills.map((skill, index) => (
                 <SkillCard key={skill.title} {...skill} index={index + backendSkills.length + frontendSkills.length + infraCloudSkills.length} />
               ))}
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}