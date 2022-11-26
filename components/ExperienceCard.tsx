import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import { IExperienceItem } from "./WorkExperience";
type Props = {
  item: IExperienceItem;
};

const ExperienceCard = ({ item }: Props) => {
  const { name, position, address, skills, duration, responsibility, imgUrl } =
    item;
  return (
    <article
      className="flex snap-center flex-col rounded-lg items-center space-y-7 px-1 sm:p-3
    opacity-70 flex-shrink-0 w-full relative"
    >
      <div className="bg-gray-800 cursor-pointer transition-opacity duration-200 hover:opacity-100 sm:p-5 p-3 opacity-60 rounded-lg text-gray-300 relative z-10 md:w-2/4">
        <div className="flex flex-wrap items-center">
          <div className="flex relative items-center justify-center w-full p-3">
            <motion.div
              initial={{
                opacity: 0,
                x: 120,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1.5,
              }}
              className="h-20 w-20 relative rounded-full overflow-hidden"
            >
              <Image src={imgUrl} alt="" layout="fill" />
            </motion.div>
          </div>

          <div className="w-full pt-2 flex flex-col justify-between">
            <div className="">
              <h2 className="font-bold md:text-2xl">{position}</h2>
              <h2 className="uppercase md:text-lg">{name}</h2>
              <h2 className="">{address}</h2>

              <div className="flex flex-wrap text-center pt-2">
                {skills?.map((item) => (
                  <div
                    key={item.id}
                    className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900"
                  >
                    {item.name}
                  </div>
                ))}
              </div>

              <p className="text-xs leading-relaxed text-gray-50 uppercase">
                {duration}
              </p>

              <ul className="text-xs mt-2 p-2 list-disc text-gray-50  text-justify leading-3 sm:leading-relaxed">
                {responsibility?.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;
