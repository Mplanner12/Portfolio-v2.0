import React from "react";
import { skills } from "../pages/lib/data";
import { motion } from "framer-motion";

const staggeredAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      repeat: 1,
      delay: "0.12" * index,
    },
  }),
};
export default function Skills() {
  return (
    <section id="skills" className="mt-[6rem] md:mt-[8rem]">
      <p className="text-sm dark:text-white text-center mb-[0.45rem]">
        Check Out My
      </p>
      <h2 className="dark:text-cyan-800 font-bold text-[2.15rem] md:text-[2.5rem] text-center mb-[0.95rem] md:-mb-[0.85rem]">
        SKILLS
      </h2>
      <div className="bg-inherit w-full p-[1.15rem] md:p-[2rem]">
        <ul className="flex flex-wrap gap-2 justify-center text-lg">
          {skills.map((skill, index) => {
            return (
              <motion.li
                variants={staggeredAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                key={index}
                custom={index}
                className="bg-gradient-to-r dark:from-cyan-500 to-gray-800 dark:bg-black bg-white border-black dark:text-white text-black shadow-xl rounded-xl px-5 m-[0.15rem] md:m-[0.45rem] py-3"
              >
                {skill}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
