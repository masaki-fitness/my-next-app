'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { theme } from '../theme/colors';

export const Header = () => {
  const navItems = [
    { href: '#progress', label: '進捗' },
    { href: '#earnings', label: '収益' },
    { href: '#apps', label: 'アプリ一覧' },
    { href: '#profile', label: '自己紹介' },
    { href: '#blog', label: 'ブログ' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-primary hover:opacity-80">
            100Apps Challenge
          </Link>
          
          <ul className="flex space-x-6">
            {navItems.map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
