import React from "react";
import Image from "next/image";
import Avatar3 from "../public/Avatar3.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        transition: {
          type: "easeout",
          duration: 2.5,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        y: "30vh",
      });
    }
  });
  return (
    <motion.section
      id="about"
      ref={ref}
      animate={animation}
      className="mt-[5rem] md:mt-[6.75rem]"
    >
      <div>
        <p className="text-sm dark:text-white text-center -mb-[3rem] md:-mb-[6rem]">
          Get To Know More
        </p>
        <h3 className="text-[2.15rem] md:text-[2.5rem] py-1 dark:text-cyan-800 font-bold text-center mt-[3rem] md:mt-[6rem] md:mb-[7.25rem]">
          ABOUT ME
        </h3>
        <p className="tracking-wider text-xl md:text-[1.95rem] my-[1.25rem] md:-mt-[2.85rem] md:mb-[4.5rem] text-md py-2 leading-8 text-center text-gray-800 dark:text-gray-200">
          My name is Mustapha Shuaibu, also known as Planner, I'm a creative
          living Soul with a wide range of experience.
        </p>
      </div>
      <div className="md:flex gap-10 mt-3 md:-mt-5 md:justify-between">
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-xl w-80 h-80 relative overflow-hidden mt-10 md:mt-0 md:h-[25rem] md:w-[47rem] md:mx-0">
          <Image
            className="md:w-full"
            src={Avatar3}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p className="tracking-wider p-[1.85rem] text-center md:p-[1.5rem] md:leading-8 mt-[2rem] md:mt-0 text-xl md:text-[1.95rem] dark:text-white md:w-[65rem]">
          I am a hard working, honest individual, I'm a good timekeeper, always
          willing to learn new skills. I am friendly, helpful and polite, have a
          good sense of humour, I am able to work independently in busy
          environments and also within a team setting. I am outgoing and
          tactful, and able to listen effectively when solving problems.
        </p>
      </div>
    </motion.section>
  );
}
