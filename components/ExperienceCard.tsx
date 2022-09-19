import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import aboutImage from "../public/assets/images/about.jpg";
type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article
      className="flex snap-center flex-col rounded-lg items-center space-y-7 py-3
    bg-[#292929] opacity-70 hover:opacity-100 cursor-pointer flex-shrink-0 border md:w-1/2 w-full"
    >
      {/* <motion.div
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
        className="border overflow-hidden rounded-full"
      >
        <Image src={aboutImage} height={110} width={110} objectFit="cover" />
      </motion.div> */}
      {/* <div className="p-0 md:px-10">
        <h4 className="text-4xl front-light">Front end Engineer</h4>
        <p className="font-bold text-2xl mt-1">Intelsense AI</p>
        <div className="flex space-x-2 my-2">
          <div className="rounded-full h-10 w-10 overflow-hidden ">
            <Image src={aboutImage} height={40} width={40} objectFit="cover" />
          </div>
          <div className="rounded-full h-10 w-10 overflow-hidden ">
            <Image src={aboutImage} height={40} width={40} objectFit="cover" />
          </div>
          <div className="rounded-full h-10 w-10 overflow-hidden ">
            <Image src={aboutImage} height={40} width={40} objectFit="cover" />
          </div>
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work.... - Ended ....
        </p>
        <ul className="list-disc ml-5 text-lg my-1">
          <li>Test with mark style and lorem ipsum</li>
          <li>Test with mark style and lorem ipsum</li>
          <li>Test with mark style and lorem ipsum</li>
          <li>Test with mark style and lorem ipsum</li>
          <li>Test with mark style and lorem ipsum</li>
        </ul>
      </div> */}

      <div className="border bg-cyan-900 bg-opacity-25 rounded-lg text-gray-100 relative z-10">
        <div className="flex flex-wrap items-center">
          <div className="flex relative items-center justify-center w-full">
            <div className="h-20 w-20 relative rounded-full overflow-hidden">
              <img
                src="https://stackdiary.com/140x100.png"
                className="w-full h-full object-cover object-top rounded-lg bg-white"
              />
            </div>
          </div>

          <div className="w-full pt-8 flex flex-col justify-between">
            <div>
              <h2 className="font-bold text-xl">
                Tailmail - Tailwind CSS Email Design Kit
              </h2>

              <div className="flex flex-wrap text-center pt-4 mb-2">
                <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">
                  Tailwind CSS
                </div>

                <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">
                  React
                </div>

                <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">
                  Next.js
                </div>
              </div>

              <p className="text-xs leading-relaxed text-gray-50">
                This revolutionary email design kit is going to transform the
                way in which you send modern emails.
              </p>

              <ul className="text-xs mt-4 list-disc list-inside text-gray-50 leading-relaxed">
                <li>Responsive</li>

                <li> Mobile-friendly</li>

                <li> Media queries</li>

                <li> 20MB of JavaScript</li>
              </ul>
            </div>

            <div className="w-full sm:flex-1 grid gap-4 grid-cols-2 pt-6">
              <a
                href="https://stackdiary.com/"
                className="flex items-center justify-center text-center relative text-white font-bold text-sm bg-gray-200 text-gray-800 px-8 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75"
              >
                Preview
              </a>

              <button className="w-full block text-center relative text-white font-bold text-sm bg-teal-800 px-4 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;
