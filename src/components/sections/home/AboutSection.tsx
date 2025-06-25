import { motion } from 'framer-motion';
import { FiUser, FiBriefcase, FiCode, FiAward, FiTrendingUp } from 'react-icons/fi'; // アイコンを変更
import profileImage from '/public/images/Profile.png'; // Import the profile image

export default function AboutSection() {
  return (
    <section id="profile" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          PROFILE
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start"> {/* items-startに変更 */}
          {/* Profile Image Area */}
          <motion.div
            className="md:col-span-2 flex justify-center pt-4 md:pt-0" // 上部パディング調整
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-primary-accent bg-opacity-20 dark:bg-opacity-10 rounded-lg transform rotate-3" />
              <div className="relative rounded-lg overflow-hidden shadow-xl bg-white dark:bg-gray-800 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-square w-64 md:w-80 flex items-center justify-center bg-secondary-purple bg-opacity-20 dark:bg-opacity-40">
                  <img src={profileImage} alt="的場 陵 プロフィール写真" className="w-full h-full object-cover" /> {/* Use the imported variable */}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Profile Details */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="space-y-6">
              {/* Profile Summary */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <FiUser className="text-primary-accent w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">的場 陵 (マトバ リョウ)</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    経営学部 在学中のエンジニア志望 (27卒)。
                    文系バックグラウンドから実践的な開発経験を積み重ね、技術で課題を解決することに情熱を燃やしています。
                    特にバックエンド、インフラ、クラウド技術に関心があります。
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <FiBriefcase className="text-primary-accent w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">主な経験</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Webアプリ開発インターン (要件定義〜デプロイ/単独開発)</li>
                    <li>チーム開発ハッカソン (AWS活用/最優秀賞受賞)</li>
                    <li>プログラミング教室 アルバイト</li>
                  </ul>
                </div>
              </div>

              {/* Strengths */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <FiAward className="text-primary-accent w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">強み</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    未知の領域にも臆せず飛び込む**主体性**と**行動力**。
                    技術コミュニティへの参加やインターンを通じて、積極的に学び実践する**学習意欲**。
                    ハッカソンやインターンでの経験から培った**課題解決能力**と**コミュニケーション能力**。
                  </p>
                </div>
              </div>

              {/* Future Goals */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <FiTrendingUp className="text-primary-accent w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">将来の目標</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Webアプリケーションの安定稼働とスケーラビリティを支えるインフラストラクチャの設計・構築に強い関心があり、SRE（Site Reliability Engineering）やクラウドネイティブ技術（マイクロサービスアーキテクチャ、マルチテナント設計など）における専門性を高めたいと考えています。将来的には、これらの深い技術的知見を基盤とし、ビジネス価値を最大化するシステム全体を俯瞰できる技術者として成長し、チームが効率的かつ創造的に開発に取り組める環境を構築できるリーダー（PMやテックリードなど）になることを目指しています。そして、技術を通じて企業の持続的な成長と価値向上に貢献していきたいです。
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
