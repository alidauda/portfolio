'use client';
import Image from 'next/image';
import { motion, Reorder } from 'framer-motion';
import { useState } from 'react';
const imagesArr = [
  '/firebase-1.svg',
  '/logo-javascript.svg',
  '/next-js.svg',
  '/react-2.svg',
  '/tailwindcss.svg',
  '/typescript.svg',
  '/prisma-3.svg',
  '/nodejs-1.svg',
  '/graphql-logo-2.svg',
  '/Visual-studio-code-1.svg',
  '/vercel.svg',
  '/github-icon.svg',
];
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Tools() {
  const [images, setImages] = useState(imagesArr);
  return (
    <motion.ul
      className='grid  gap-3 grid-cols-3 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2'
      variants={container}
      initial='hidden'
      animate='visible'
    >
      {images.map((image) => (
        <motion.li
          className='p-4  h-28 flex justify-center items-center glass'
          key={image}
          variants={item}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <Image
            src={image}
            width={100}
            height={100}
            alt='this is a logo'
            className=' block'
          />
        </motion.li>
      ))}
    </motion.ul>
  );
}
