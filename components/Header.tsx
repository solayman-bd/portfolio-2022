import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-30 xl:items-center p-5">
      {/* Social Icons */}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://www.linkedin.com/in/md-solayman/"
          target="_blank"
        />
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://github.com/solayman-bd"
          target="_blank"
        />
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://www.facebook.com/solayman1727041"
          target="_blank"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          fgColor="gray"
          bgColor="transparent"
          network="email"
          target="_blank"
        />
        <Link
          href="mailto:mdsolaymannuhin@gmail.com.com"
          className="uppercase hidden md:inline-flex text-sm text-gray-400"
        >
          Get in touch
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
