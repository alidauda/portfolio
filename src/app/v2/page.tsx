"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

const project = [
  "My Potfoli",
  "FmeanAnaltysic",
  "Btc Express",
  "ChatWPdf",
  "Testing",
];

export default function Page() {
  const ref = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const firstScreenY = useTransform(
    scrollYProgress,
    [0, isClient ? window.innerHeight : 1],
    ["0%", "100%"]
  );
  const secondScreenY = useTransform(
    scrollYProgress,
    [0, isClient ? window.innerHeight : 1],
    ["100%", "0%"]
  );
  return (
    <div ref={ref} className="relative">
      <motion.div
        style={{
          y: firstScreenY,
        }}
        className=" h-screen  flex flex-col justify-between fixed z-0  "
      >
        <nav className="flex justify-between  px-10">
          <ul>
            <li>AliBiu</li>
          </ul>
          <ul className="flex gap-3">
            <li>works</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </nav>

        <main className=" py-8 flex justify-start px-10 ">
          <div className="grid grid-cols-2  w-full py-10 gap-4  items-start">
            <div className="flex flex-col  ">
              <h1 className="font-bold text-[160px] tracking-tighter leading-[150px] text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent ">
                I&apos;M ALI <br />
                DAUDA
                <br /> BIU.
              </h1>
              <p className="text-lg font-medium">
                Hey there, Im Ali—an experienced software developer skilled in
                React and TypeScript.
              </p>
            </div>
            <div className=" grid text-xl space-y-8 pl-36 items-center pt-3">
              <p className="text-gray-400">Selected Project</p>
              <ul className="space-y-5 ">
                {project.map((project) => (
                  <li className="border-b-2 p-4 w-full" key={project}>
                    <Link href="#">{project}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
        <div className="bg-secondary p-4">
          <Marquee>
            I can be a React component, multiple React components, or just some
            text.
          </Marquee>
        </div>
      </motion.div>
      <motion.div
        style={{ y: secondScreenY }}
        className="h-screen bg-black z-40   "
      >
        s
      </motion.div>
    </div>
  );
}
