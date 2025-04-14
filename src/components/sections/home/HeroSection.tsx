import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-primary-light dark:bg-primary-dark flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-gray opacity-5 dark:opacity-10 z-0 transform -skew-x-12" />
      </div>

      <div className="container mx-auto px-4 z-10 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="w-full md:w-2/3 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="block">Ryo Matoba</span>
              <span className="text-primary-accent block mt-2">学生エンジニア</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              経営学部からエンジニアリングの世界へ。ハッカソンでのチーム開発(AWS/最優秀賞)や、
              就業型インターンでのWebアプリ単独開発(GCP/Docker/CI/CD)などを通して実践力を磨いています。
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#profile"
                className="btn btn-primary"
              >
                プロフィール
              </a>
              <a
                href="#portfolio"
                className="btn btn-outline"
              >
                実績を見る
              </a>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/3 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-primary-accent bg-opacity-20 dark:bg-opacity-10 flex items-center justify-center">
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-primary-accent bg-opacity-50 dark:bg-opacity-20 flex items-center justify-center">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden border-4 border-white dark:border-gray-700">
                    {/* Profile image would go here */}
                    <div className="w-full h-full flex items-center justify-center bg-secondary-purple bg-opacity-20 dark:bg-opacity-40 text-4xl md:text-5xl font-bold">
                      R
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 shadow-lg px-4 py-2 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.8 }}
              >
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-medium text-sm">Available for work</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <a href="#profile" className="flex flex-col items-center text-gray-400 dark:text-gray-500 hover:text-primary-accent dark:hover:text-primary-accent transition-colors">
          <span className="text-sm mb-2">スクロール</span>
          <FiArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  );
}
