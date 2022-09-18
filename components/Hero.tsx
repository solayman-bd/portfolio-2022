import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
type Props = {};

const Hero: React.FC = (props: Props) => {
  const [text] = useTypewriter({
    words: [
      "Hi, Myself Solayman",
      "A Programming Enthusiast ",
      "A MERN stack developer",
    ],
    loop: true,
    delaySpeed: 200,
  });
  return (
    <div>
      <span>{text}</span>
      <Cursor cursorColor="#F7AB0A" />
    </div>
  );
};

export default Hero;
