import React from "react";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import profileImage from "../public/assets/images/profile.jpg";
import Link from "next/link";
type Props = {};

const Hero: React.FC = (props: Props) => {
  const [text] = useTypewriter({
    words: [
      "Hi, Myself Solayman",
      "A Programming Enthusiast ",
      "A MERN stack developer....",
    ],
    loop: true,
    delaySpeed: 200,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <Image
        src={profileImage}
        className="rounded-full h-32 w-32 object-cover"
        alt=""
      />

      <div className="z-10">
        <h2 className="text-sm uppercase text-gray-600 tracking-[0.8rem]">
          an Engineer
        </h2>
        <h1 className="text-lg sm:text-xl md:text-3xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="hero-button">About</button>
          </Link>
          <Link href="#experience">
            <button className="hero-button">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="hero-button">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="hero-button">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
