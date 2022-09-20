import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
type Props = {
  title: string;
  backgroundImg: any;
  tech: string[];
  projectUrl: string;
};

const ProjectItem = ({ title, backgroundImg, tech, projectUrl }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="relative snap-center flex items-center justify-center h-full w-full flex-shrink-0"
    >
      <div className="shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-500 to-[#55575a] w-[90%] h-[80%] sm:w-[70%] sm:h-[80%] md:h-[80%] md:w-[60%] relative overflow-hidden">
        <div className="w-full h-full rounded-xl group-hover:opacity-10 overflow-hidden">
          <Image layout="fill" src={backgroundImg} alt="/" />
        </div>
        <div className="hidden rounded-xl group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-white tracking-wider text-center">
            {title}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">
            {tech.map((item) => (
              <span>{item}</span>
            ))}
          </p>
          <Link href={projectUrl}>
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
