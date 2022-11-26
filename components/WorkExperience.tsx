import React from "react";
import aboutImage from "../public/assets/images/icons/inte.png";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
type Props = {};
export interface IExperienceItem {
  id: number;
  name: string;
  position: string;
  address: string;
  skills: { id: number; name: string }[];
  duration: string;
  responsibility: { id: number; name: string }[];
  imgUrl: any;
}

const experienceItems: IExperienceItem[] = [
  {
    id: 1,
    name: "Intelsense Ai . Part-Time",
    position: "Frontend Developer",
    address: "Dhaka, Bangladesh",
    skills: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "React" },
      { id: 3, name: "Tailwind CSS" },
    ],
    duration: "Dec 2021 - May 2022",
    responsibility: [
      { id: 1, name: "Built landing page" },
      {
        id: 2,
        name: "Implemented a system that can record the user&rsquo;s voice and downsample the audio",
      },
      {
        id: 3,
        name: "Created a text editor that allows users to update the transcripted text version, identify changes to words, and determine words&rsquo; prior and current positions in strings.",
      },
    ],
    imgUrl: aboutImage,
  },
];

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
      <div className="h-[4%]" />
      <h3 className="uppercase font-semibold tracking-widest md:tracking-[20px] text-gray-500 text-2xl ">
        Work Experience
      </h3>

      <div className="w-full flex items-center flex-nowrap overflow-x-auto px-1 py-5 snap-x snap-mandatory space-x-5 main">
        {experienceItems?.map((item) => (
          <ExperienceCard item={item} key={item.id} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
