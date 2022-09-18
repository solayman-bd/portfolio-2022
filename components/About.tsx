import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../public/assets/images/about.jpg";
type Props = {};

const About: React.FC = (props: Props) => {
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
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-600 text-2xl">
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="relative mt-3 border rounded-full -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px] overflow-hidden"
      >
        <Image layout="fill" src={aboutImage} />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          A <span className="underline decoration-[#ca8a04]/50">little</span>{" "}
          more about me
        </h4>
        <p className="text-base">
          An enthusiastic learner , currently focused on Web Development. I have
          developed almost 10+ websites having basic to professional features
          where some of them are frontend based and some of them are full stack.
          For the frontend, I used React Js and other react-related tools, and
          for the backend, I used Node Js, Express Js, and Mongodb etc
        </p>
      </div>
    </motion.div>
  );
};

export default About;
