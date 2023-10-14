import React, { useState } from "react";
import Image from "next/image";
import { Projects } from "../data";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { FcGlobe } from "react-icons/fc";

const staggeredAnimation = {
  initial: { opacity: 0, x: 22.5 },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: "0.15" * index,
    },
  }),
};
export default function Project() {
  let [visibility, setVisiblity] = useState(3);
  const showMore = () => {
    setVisiblity((prevValue) => prevValue + 3);
  };
  const showLess = () => {
    setVisiblity((prevValue) => prevValue - 3);
  };
  return (
    <section id="project" className="mt-[15rem] md:p-0">
      <p className="text-sm dark:text-white text-center mb-[0.45rem]">
        Browse My recent Projects
      </p>
      <h2 className="dark:text-cyan-900 font-bold text-[2.15rem] md:text-[2.5rem] text-center mb-[2.3rem] md:mb-[3rem]">
        PROJECTS
      </h2>
      <div className="flex flex-col gap-10 py-10 md:flex-row md:flex-wrap">
        {Projects.slice(0, visibility).map((project, index) => {
          return (
            <motion.div
              key={index}
              initial="initial"
              variants={staggeredAnimation}
              whileInView="animate"
              whileHover={{ scale: 0.9 }}
              custom={index}
              className="basis-1/4 flex-1 border-black border-2 dark:bg-white bg-black rounded-[2rem] p-[1.7rem]"
            >
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={project.image}
                alt="Project image"
              ></Image>
              <h1 className="font-bold text-[1.85rem] md:text-[2rem] text-center text-white dark:text-cyan-950 mb-[0.83rem] md:mb-[2rem] my-[2.5rem]">
                {project.name}
              </h1>
              <div className="w-full flex justify-around md:justify-between md:mb-[1.5rem]">
                <a href={project.github}>
                  <button className="flex justify-between w-[8rem] md:w-[8rem] rounded-[1.75rem] text-sm p-[1.5rem] hover:bg-black dark:hover:bg-white font-extrabold dark:hover:text-cyan-950 hover:text-white dark:bg-cyan-950 bg-white text-black dark:text-white">
                    Github
                    <AiFillGithub />
                  </button>
                </a>
                <a href={project.demo}>
                  <button className="flex justify-between w-[8rem] md:w-[8rem] rounded-[1.75rem] text-sm p-[1.5rem] hover:bg-black dark:hover:bg-white font-extrabold dark:hover:text-cyan-950 hover:text-white dark:bg-cyan-950  bg-white text-black dark:text-white">
                    Demo
                    <FcGlobe />
                  </button>
                </a>
              </div>
            </motion.div>
          );
        })}
        <div className="mx-auto">
          {visibility > 8 ? (
            <button
              onClick={showLess}
              className="w-fit p-[1.5rem] bg-black dark:bg-cyan-900 text-white rounded-xl mx-auto"
            >
              Show less
            </button>
          ) : (
            <button
              onClick={showMore}
              className={`${
                visibility >= 9 ? "invisible" : "visible"
              } w-fit p-[1.5rem] bg-black dark:bg-cyan-900 text-white rounded-xl mx-auto`}
            >
              Load More
            </button>
          )}
        </div>
      </div>
      <p className="text-center text-md font-bold text-black dark:text-cyan-900">
        many more are coming..
      </p>
    </section>
  );
}
