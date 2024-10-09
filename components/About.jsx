import React from "react";
import Image from "next/image";
import Myphoto from "../ProjectImages/Myphoto.jpg";
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
        <p className="tracking-wider text-xl md:text-[1.95rem] my-[1.25rem] md:-mt-[2.85rem] md:mb-[4.5rem] text-md py-2 leading-8 text-start lg:text-center text-gray-800 dark:text-gray-200">
          My name is Mustapha Shuaibu, also known as Planner, I&apos;m a
          dedicated and adaptable Fullstack Developer with a passion for
          crafting elegant solutions to complex problems.
        </p>
      </div>
      <div className="md:flex gap-10 mt-3 md:-mt-5 md:justify-start md:gap-x-[5rem] md:items-center">
        <div className="mx-auto rounded-xl w-80 h-80 relative overflow-hidden flex items-center justify-center mt-12 md:mt-0 md:h-[22rem] md:ml-[2rem] lg:ml-[3.5rem] md:w-[27rem] md:mx-0">
          <Image
            className="md:w-full"
            src={Myphoto}
            alt="My Photo"
            // layout="fill"
            objectFit="contain"
          />
        </div>
        <p className="tracking-wider p-[1.85rem] text-start md:p-[1.5rem] flex justify-start items-center md:leading-8 mt-[2rem] md:mt-0 text-xl md:text-[1.95rem] dark:text-white w-full">
          {" "}
          With expertise in React, Next.js, Node.js, and PostgreSQL, I excel in
          building robust web applications that deliver exceptional user
          experiences. My strong analytical skills and attention to detail
          enable me to tackle challenges effectively and drive results. I thrive
          in collaborative environments, where my excellent communication and
          teamwork skills allow me to seamlessly integrate with cross-functional
          teams. I am committed to continuous learning and growth, always
          striving to stay updated with the latest technologies and best
          practices. With a focus on innovation and a relentless pursuit of
          excellence, I am driven to make a meaningful impact through my work.
        </p>
      </div>
    </motion.section>
  );
}
