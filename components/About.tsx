import React from "react";
import Image from "next/image";
import aboutImage from "../public/assets/images/about.jpg";
import { motion } from "framer-motion";
type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-screen">
      <div className="h-[12%]" />
      {/* Main content starts here */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="h-[88%] flex flex-col items-center"
      >
        <h3 className="uppercase tracking-[20px] font-semibold text-gray-600 text-2xl h-[8%]">
          About
        </h3>
        {/* Detail */}
        <div className="h-[92%] w-full flex flex-col md:flex-row">
          {/* Image */}
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
              duration: 1.5,
            }}
            className="flex-[2] md:flex-1 flex items-center justify-center p-1 sm:p-2"
          >
            <div className="w-[30%] md:w-[80%] h-[100%] lg:w-[70%] relative rounded-full md:rounded-xl overflow-hidden">
              <Image layout="fill" src={aboutImage} alt="" />
            </div>
          </motion.div>

          {/* More Detail */}
          <div className="flex-[3] md:flex-1 p-2 text-center flex  justify-center items-center">
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
              className=""
            >
              <h4 className="font-semibold sm:text-lg">
                A{" "}
                <span className="underline decoration-[#ca8a04]/50">
                  little
                </span>
                &nbsp;more about me
              </h4>
              <br />
              <p className="text-sm leading-tight">
                Even though I am a student of materials science and engineering,
                I started learning programming in my third year of university
                since I have a fascination for it. I began studying the basics
                using C and C++, after which I learnt javascript and narrowed my
                concentration to web development. For the past 1.5 years, I have
                been employed in this field. I worked as a frontend developer in
                a company and completed two internships. I&#39;ve used MERN
                stack to create nearly ten websites, ranging from simple to
                complex. Problem solving is my current area of concentration.
                Additionally, I have published two articles in the field of
                material science on the issue of materials characterization,
                which is a simulation-based study employing density functional
                theory.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
