'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { theme } from '../theme/colors';

type AppCardProps = {
  icon: string;
  name: string;
  description: string;
  link: string;
};

export const AppCard = ({ icon, name, description, link }: AppCardProps) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex items-start space-x-4">
        <div className="relative w-16 h-16">
          <Image
            src={icon}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">{name}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
      </div>
    </motion.a>
  );
};
