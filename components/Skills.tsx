import Image from "next/image";
import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import Firebase from "../public/assets/skills/firebase.png";
import NextJS from "../public/assets/skills/nextjs.png";
import { motion } from "framer-motion";
import ExpressJs from "../public/assets/skills/expressjs.png";
import Typescript from "../public/assets/skills/typescript.png";
import MongoDb from "../public/assets/skills/mongo.png";
type Props = {};
const skills = [
  {
    id: 1,
    name: "HTML",
    image: Html,
  },
  {
    id: 2,
    name: "CSS",
    image: Css,
  },
  {
    id: 3,
    name: "Javascript",
    image: Javascript,
  },
  {
    id: 4,
    name: "TypeScript",
    image: Typescript,
  },
  {
    id: 5,
    name: "React",
    image: ReactImg,
  },
  {
    id: 6,
    name: "NextJS",
    image: NextJS,
  },
  {
    id: 7,
    name: "Tailwind",
    image: Tailwind,
  },
  {
    id: 8,
    name: "Express JS",
    image: ExpressJs,
  },
  {
    id: 9,
    name: "MongoDB",
    image: MongoDb,
  },
];
const Skills = (props: Props) => {
  return (
    <div className="h-screen max-w-full px-10 flex flex-col items-center justify-around relative">
      <div
        className="
      w-full absolute top-[30%] bg-[#f7ab0a]/5 z-[0] left-0 h-[500px] skew-y-12"
      />
      <h3 className="uppercase font-semibold tracking-[20px] text-gray-500 text-2xl mt-20">
        Skills
      </h3>
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
        className="grid grid-cols-3 gap-2 sm:gap-3"
      >
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="p-6 cursor-pointer shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
          >
            <div className="flex flex-col items-center justify-center">
              <motion.div
                initial={{
                  opacity: 0,
                  x: 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 1.5,
                }}
                className="m-auto"
              >
                <Image src={skill.image} width="64px" height="64px" alt="/" />
              </motion.div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-xs sm:text-base">{skill.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
