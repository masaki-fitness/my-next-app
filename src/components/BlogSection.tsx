'use client';

import { motion } from 'framer-motion';
import { theme } from '../theme/colors';

type BlogPost = {
  title: string;
  date: string;
  content: string;
};

type BlogSectionProps = {
  posts: BlogPost[];
};

export const BlogSection = ({ posts }: BlogSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h2 className="text-2xl font-bold">進捗ブログ</h2>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 bg-white rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <time className="text-sm text-gray-500 mb-4 block">{post.date}</time>
            <div className="prose">{post.content}</div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};
