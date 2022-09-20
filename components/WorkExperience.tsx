import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
type Props = {};

const WorkExperience = (props: Props) => {
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
      className="h-screen max-w-full px-10 flex flex-col items-center justify-evenly"
    >
      <div className="h-[12%]" />
      <h3 className="uppercase font-semibold tracking-widest md:tracking-[20px] text-gray-500 text-2xl ">
        Work Experience
      </h3>

      <div className="w-full flex items-center flex-nowrap overflow-x-auto p-1 snap-x snap-mandatory space-x-5 main">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default WorkExperience;
