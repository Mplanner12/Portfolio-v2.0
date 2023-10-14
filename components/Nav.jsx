import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { motion } from "framer-motion";
import { Paths } from "../data";
import { useState } from "react";
import Link from "next/link";

export default function Nav({ setDarkMode, darkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="min-h-screen w-full">
      <nav className="w-full py-10 mb-12 flex justify-between dark:text-white">
        <h1 className="font-burtons text-xl">Planner</h1>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl z-20 w-fit md:hidden absolute right-[3rem] top-[3.5rem]"
        >
          {isOpen ? <GiCancel /> : <AiOutlineMenu />}
        </div>
        <ul
          className={`z-10 flex flex-col md:flex-row self-center items-center rounded-lg h-[36.5rem] w-full md:w-fit md:h-fit bg-white dark:bg-gradient-to-tr from-cyan-700 to-gray-800 dark:md:bg-none md:bg-inherit ${
            isOpen ? "visible" : "invisible"
          } md:visible`}
        >
          <li
            className="md:-my-[2.5rem] mt-[1rem] mb-[0.8rem] md:mb-0"
            onClick={() => setDarkMode(!darkMode)}
          >
            {!darkMode ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
          </li>
          {Paths.map((link, index) => {
            return (
              <motion.li
                className="md:bg-none mb-[3rem] md:mb-none w-full md:w-fit rounded-xl shadow-xl md:rounded-none md:shadow-none py-5 md:py-2"
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
              >
                <div className="pl-[5rem] md:pl-4 md:py-3 md:rounded-xl md:shadow-xl font-extrabold md:font-normal md:dark:text-cyan-600 text-gray-900 dark:text-white text-lg px-4 border-none ml-8">
                  <Link href={link.link}>{link.name}</Link>
                </div>
              </motion.li>
            );
          })}
          {/* <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}>
            <a
              className="dark:text-cyan-600 text-lg shadow-xl px-4 py-2 border-none rounded-md ml-8"
              href="#"
            >
              About me
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}>
            <a
              className="dark:text-cyan-600 text-lg shadow-xl px-4 py-2 border-none rounded-md ml-8"
              href="#"
            >
              Skills
            </a>
          </motion.li> */}
        </ul>
      </nav>
    </section>
  );
}
