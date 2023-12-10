import Image from 'next/image';
const images = [
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
export default function Tools() {
  return (
    <div className='flex gap-3 flex-wrap'>
      {images.map((image) => (
        <div className='relative group cursor-pointer' key={image}>
          <div className='absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200'></div>
          <div className='relative px-7 py-6  ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start xl:space-x-6 space-x-10 '>
            <div className='space-y-2'>
              <div
                key={image}
                className='p-4 w-28 h-28 flex justify-center items-center glass'
              >
                <Image
                  src={image}
                  width={100}
                  height={100}
                  alt='this is a logo'
                  className=' block'
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
