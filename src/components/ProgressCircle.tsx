'use client';

import { motion } from 'framer-motion';
import { theme } from '../theme/colors';

type ProgressCircleProps = {
  completed: number;
  total: number;
};

export const ProgressCircle = ({ completed, total }: ProgressCircleProps) => {
  const percentage = (completed / total) * 100;
  const circumference = 2 * Math.PI * 60; // radius = 60

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="relative w-48 h-48"
    >
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="96"
          cy="96"
          r="60"
          stroke={theme.colors.accent}
          strokeWidth="12"
          fill="transparent"
        />
        <motion.circle
          cx="96"
          cy="96"
          r="60"
          stroke={theme.colors.primary}
          strokeWidth="12"
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - (percentage / 100) * circumference }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-3xl font-bold text-gray-800"
        >
          {completed}/{total}
        </motion.span>
      </div>
    </motion.div>
  );
};
