'use client';

import { motion } from 'framer-motion';
import { theme } from '../theme/colors';

interface ProgressCircleProps {
  completed: number;
  total: number;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({ completed, total }) => {
  const percentage = (completed / total) * 100;
  const circumference = 2 * Math.PI * 80; // radius = 80

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="relative w-64 h-64"
    >
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="128"
          cy="128"
          r="80"
          stroke={theme.colors.accent}
          strokeWidth="16"
          fill="transparent"
        />
        <motion.circle
          cx="128"
          cy="128"
          r="80"
          stroke={theme.colors.primary}
          strokeWidth="16"
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - (percentage / 100) * circumference }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-5xl font-bold text-gray-800">
            {completed}
          </span>
          <span className="text-xl text-gray-600">
            / {total} アプリ
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProgressCircle;
