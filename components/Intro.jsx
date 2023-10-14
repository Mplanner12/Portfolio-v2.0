import React from "react";
import MyAvatar from "../public/MyAvatar.jpg";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import { BsDownload } from "react-icons/bs";

export default function Intro() {
  return (
    <section id="intro" className="-mt-[35rem] md:-mt-[35rem]">
      <div className="text-center p-10 py-10 md:px-3 md:flex md:justify-end">
        <div className="relative md:top-20 md:w-[30rem]">
          <h3 className="h-[8rem] mb-[1.25rem] text-5xl py-2 dark:text-cyan-600 md:text-3xl md:leading-[3rem]">
            <span className="lg:text-[4.5rem]">
              <Typewriter
                words={[
                  "Hi I'm MUSTAPHA",
                  "I'm a Fullstack Developer",
                  "A Cloud Engineer",
                  "And a Graphic Designer",
                ]}
                loop={9999}
                typeSpeed={100}
                deleteSpeed={20}
                delaySpeed={1000}
                cursor
                cursorStyle={"|"}
              />
            </span>
          </h3>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="https://instagram.com/m_planner">
              <AiFillInstagram />
            </a>
            <a href="https://twitter.com/_mussan_planner">
              <AiFillTwitterCircle />
            </a>
            <a href="https://github.com/Mplanner12">
              <AiFillGithub />
            </a>
            <a href="https://linkedin.com/in/mustapha-shuaibu-91037a1b7">
              <AiFillLinkedin />
            </a>
          </div>
          <div className="flex justify-center w-full mt-[2.25rem] md:mt-[2.5rem] md:self-center">
            <motion.button
              className="w-[14rem] md:w-[14rem] flex justify-around border-cyan-800 dark:bg-black bg-white dark:bg-gradient-to-r from-cyan-700 shadow-xl to-gray-800 md:text-[1.15rem] dark:text-white px-4 py-4 border-none rounded-[1.25rem] ml-8"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
            >
              <a
                className=""
                href="../public/Resume.pdf"
                download
                target="_blank"
              >
                Download Resume
              </a>
              <BsDownload />
            </motion.button>
          </div>
        </div>
        <div className="mx-auto rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
          <Image src={MyAvatar} alt="Avatr" layout="fill" objectFit="cover" />
        </div>
      </div>
    </section>
  );
}
