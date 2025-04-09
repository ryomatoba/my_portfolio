import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            プロフィール
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              はじめまして、的場 陵です
            </h3>
            <div className="text-gray-600 dark:text-gray-300 text-lg space-y-4">
              <p>
                私はフロントエンド開発に情熱を持つエンジニアです。
                ユーザー体験を大切にした、モダンでインタラクティブなWebサイト制作に取り組んでいます。
              </p>
              <p>
                デザインの知識とエンジニアリングスキルを組み合わせ、クライアントの要望を超えるプロダクトを作ることを目指しています。
                ReactやTypeScriptなどの最新のテクノロジーを活用し、パフォーマンスとユーザビリティに優れたWebサイト・Webアプリケーションを開発しています。
              </p>
              <p>
                趣味は読書と旅行で、新しい視点や考え方に触れることが好きです。
                常に新しい技術や方法論を学び続け、自分のスキルを向上させることを大切にしています。
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-6">
              <a 
                href="#contact" 
                className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors inline-flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                お問い合わせ
              </a>
              <a 
                href="#projects" 
                className="bg-transparent border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-full font-medium hover:bg-indigo-600 hover:text-white transition-colors inline-flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                実績を見る
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-indigo-600 rounded-xl transform rotate-3"></div>
              <div className="relative z-10 bg-white dark:bg-gray-800 p-1 rounded-xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-72 md:h-96 overflow-hidden rounded-lg bg-gray-200">
                  {/* Profile image would go here */}
                  <div className="w-full h-full flex items-center justify-center bg-indigo-100 dark:bg-indigo-900 text-indigo-900 dark:text-indigo-100 text-4xl font-bold">
                    RYO
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 shadow-lg px-4 py-2 rounded-full border-2 border-indigo-600"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.8 }}
              >
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="font-semibold dark:text-white">Available for work</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;