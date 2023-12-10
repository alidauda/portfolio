import Link from 'next/link';
import { CSSProperties } from 'react';
import Image from 'next/image';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'Chat with Pdf using OpenAi and LangChain',
    description:
      'developed using Next.js, TypeScript, Prisma, LangChain, OpenAI, UploadThing, and PlanetScale for the database.',
    link: 'https://ask-gpt-green.vercel.app/',
    github: 'https://github.com/alidauda/ask-gpt',
  },
  {
    title: 'My Portfolio',
    description:
      'developed using Next.js, TypeScript, TailwindCSS, and Vercel for deployment.',
    link: '/',
    github: 'https://github.com/alidauda/portfolio',
  },
  {
    title: 'DashBaord for a delivery company',
    description:
      'developed using Next.js, TypeScript, TailwindCSS, and Vercel for deployment.',
    link: 'https://btcexpress.vercel.app/',
    github: '#',
  },
];

export default function Project() {
  return (
    <>
      {projects.map((project) => (
        <div
          key={project.description}
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
          <Link href={project.link}>
            <h3 className='text-xl font-medium text-white underline'>
              {project.title}
            </h3>
          </Link>
          <p className=''>{project.description}</p>

          <Link href={project.github} target='_blank'>
            <Github />
          </Link>
        </div>
      ))}
    </>
  );
}
