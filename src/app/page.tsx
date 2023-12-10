import Image from 'next/image';
import NavBar from './ui/NavBar/nav';
import Heading from './ui/Heading/Heading';
import { CSSProperties } from 'react';
import Link from 'next/link';
import { Youtube, Twitter, Linkedin, Github } from 'lucide-react';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar />
      <Heading />
      <div className='  py-4  space-y-3'>
        <h1>Projects</h1>
        <div
          style={
            {
              '--background': '30 41 59',
              '--highlight': '255 255 255',

              '--bg-color':
                'linear-gradient(rgb(var(--background)), rgb(var(--background)))',
              '--border-color': `linear-gradient(145deg,
            rgb(var(--highlight)) 0%,
            rgb(var(--highlight) / 0.3) 33.33%,
            rgb(var(--highlight) / 0.14) 66.67%,
            rgb(var(--highlight) / 0.1) 100%)
          `,
            } as CSSProperties
          }
          className='flex     flex-col  rounded-xl border border-transparent  p-2

      hover:[background:padding-box_var(--bg-color),border-box_var(--border-color)]'
        >
          <Link href='https://ask-gpt-green.vercel.app/'>
            <h3 className='text-xl font-medium text-white underline'>
              Chat with Pdf using OpenAi and LangChain
            </h3>
          </Link>
          <p className=''>
            developed using Next.js, TypeScript, Prisma, LangChain, OpenAI,
            UploadThing, and PlanetScale for the database.
          </p>

          <Link href='https://github.com/alidauda/ask-gpt' target='_blank'>
            <Image
              src={'/github.jpg'}
              width={20}
              height={20}
              alt='github logo'
            />
          </Link>
        </div>
      </div>
      <div className='mt-auto py-5 flex justify-between'>
        <p>Copyright © 2023 | All rights reserved.</p>
        <div className='flex gap-3'>
          <Youtube />
          <Twitter />
          <Linkedin />
          <Github />
        </div>
      </div>
    </div>
  );
}
