'use client';

import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { theme } from '../theme/colors';

type EarningsProps = {
  currentEarnings: number;
  earningsHistory: { month: string; amount: number }[];
};

export const EarningsDisplay = ({ currentEarnings, earningsHistory }: EarningsProps) => {
  const targetEarnings = 1000000;
  const percentage = (currentEarnings / targetEarnings) * 100;

  return (
    <div className="space-y-8">
      {/* 収益ゲージ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative h-8 bg-gray-200 rounded-full overflow-hidden"
      >
        <motion.div
          className="h-full bg-primary"
          style={{ backgroundColor: theme.colors.primary }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
          ¥{currentEarnings.toLocaleString()} / ¥{targetEarnings.toLocaleString()}
        </div>
      </motion.div>

      {/* 収益推移グラフ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="h-64"
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={earningsHistory}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="amount"
              stroke={theme.colors.primary}
              strokeWidth={2}
              dot={{ fill: theme.colors.primary }}
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
};
