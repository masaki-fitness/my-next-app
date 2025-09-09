'use client';

import { motion } from 'framer-motion';
import { theme } from '../theme/colors';

export const Profile = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4">自己紹介</h2>
      <div className="prose prose-lg">
        <p>
          エンジニアとして活動しながら、100個のアプリ開発に挑戦しています。
          目標は月収100万円の達成と、その過程で得られる技術力と経験の蓄積です。
        </p>
        <p>
          このサイトでは、私の挑戦の軌跡と開発したアプリケーションを紹介していきます。
          アプリ開発を通じて得られた知見も随時共有していきます。
        </p>
      </div>
    </motion.section>
  );
};
