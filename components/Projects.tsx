import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import propertyImg from "../public/assets/projects/property.jpg";
import ProjectItem from "./ProjectItem";
type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="h-screen max-w-full px-10 flex flex-col items-center relative">
      <div className="h-[10%]"></div>
      <h3 className="uppercase font-semibold tracking-widest md:tracking-[20px] text-gray-500 text-2xl h-[10%]">
        Projects
      </h3>
      <div
        className="
      w-full absolute top-[30%] bg-[#f7ab0a]/5 z-[0] left-0 h-[500px] -skew-y-12"
      />

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
        className="w-full flex h-[80%] items-center flex-nowrap overflow-x-auto p-1 snap-x snap-mandatory space-x-5 main my-3 z-10"
      >
        <ProjectItem
          title="Property Finder"
          backgroundImg={propertyImg}
          projectUrl="#"
          tech={["React Js", "Next Js"]}
        />
        <ProjectItem
          title="Property Finder"
          backgroundImg={propertyImg}
          projectUrl="#"
          tech={["React Js,", "Next Js"]}
        />
        <ProjectItem
          title="Property Finder"
          backgroundImg={propertyImg}
          projectUrl="#"
          tech={["React Js,", "Next Js"]}
        />
      </motion.div>
    </div>
  );
};
export default Projects;