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
      className="h-screen border max-w-full px-10 flex flex-col items-center"
    >
      <h3 className="uppercase tracking-widest md:tracking-[20px] text-gray-500 text-2xl mt-20">
        Work Experience
      </h3>

      <div className="w-full flex justify-center items-center space-x-5 overflow-x-auto p-10 snap-x snap-mandatory border">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default WorkExperience;
