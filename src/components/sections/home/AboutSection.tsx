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
                  経営学部で学びながら、技術による課題解決に魅了されたエンジニア (27卒) です。実体験で感じた「不便」を解消したいという思いを原動力に、就業型インターンでの開発や、ハッカソンでのチーム開発を通じて、実践的な開発スキルを磨いてきました。特にバックエンド、インフラ、クラウド技術に強い関心を持っています。
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
                    <li>Webアプリ開発インターン</li>
                    <li>RAGアプリ開発インターン</li>
                    <li>チーム開発ハッカソン</li>
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
                    実践の中で貪欲に学び続ける主体性が強みです。文系という背景だからこそ、常にハングリー精神を持って挑戦し続けています。
                  </p>
                </div>
              </div>

              {/* Future Goals */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <FiTrendingUp className="text-primary-accent w-5 h-5" />
                </div>
                <div>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong>【短中期目標】</strong>
                  まずは、フロントエンド・バックエンド両面の専門性を高め、ユーザーに最高の体験を届けるための技術的基盤を固めます。
                  <br /><br />
                  <strong>【長期目標】</strong>
                  将来的には、その技術的基盤を土台に、よりユーザーに近い立場でプロダクト全体の価値を最大化できるエンジニアを目指します。ユーザーの課題を誰よりも深く理解し、技術とビジネスの両視点から本質的な解決策を提案・実装することで、事業の成長に貢献していきたいです。
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
