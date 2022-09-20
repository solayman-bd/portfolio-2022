import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import aboutImage from "../public/assets/images/icons/inte.png";
type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article
      className="flex snap-center flex-col rounded-lg items-center space-y-7 p-1 sm:p-3
    opacity-70 flex-shrink-0 w-full"
    >
      <div className="bg-gray-800 cursor-pointer transition-opacity duration-200 hover:opacity-100 sm:p-4 p-2 opacity-60 rounded-lg text-gray-300 relative z-10 md:w-2/4">
        <div className="flex flex-wrap items-center">
          <div className="flex relative items-center justify-center w-full">
            <motion.div
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              className="h-20 w-20 relative rounded-full overflow-hidden"
            >
              <Image src={aboutImage} layout="fill" />
            </motion.div>
          </div>

          <div className="w-full pt-2 flex flex-col justify-between">
            <div className="">
              <h2 className="font-bold md:text-2xl ">Frontend Developer</h2>
              <h2 className="uppercase md:text-lg">
                Intelsense Ai . Part-Time
              </h2>
              <h2 className="">Dhaka, Bangladesh</h2>

              <div className="flex flex-wrap text-center pt-2">
                <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">
                  Next.js
                </div>
                <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">
                  React
                </div>
                <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">
                  Tailwind CSS
                </div>
              </div>

              <p className="text-xs leading-relaxed text-gray-50 uppercase">
                Dec 2021 - May 2022
              </p>

              <ul className="text-xs mt-2 p-2 list-disc text-gray-50  text-justify leading-3 sm:leading-relaxed">
                <li>Built landing page</li>
                <li>
                  Implemented a system that can record the user's voice and
                  downsample the audio
                </li>
                <li>
                  Created a text editor that allows users to update the
                  transcripted text version, identify changes to words, and
                  determine words' prior and current positions in strings.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;
