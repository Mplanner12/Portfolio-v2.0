import React, { useEffect } from "react";
import MyAvatar from "../public/MyAvatar.jpg";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import { BsDownload } from "react-icons/bs";

export default function Intro() {
  useEffect(() => {
    toast("You can switch theme via the navbar ☀ 🌜", {
      icon: "👋",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  }, []);
  return (
    <section id="intro" className="-mt-[35rem] md:-mt-[35rem] lg:-mt-[39rem]">
      <Toaster />
      <div className="text-center p-10 py-10 md:px-3 md:flex md:justify-end lg:w-full">
        <div className="w-full relative md:top-20 md:w-[30rem] px-[1.5rem]">
          <h3 className="h-[8rem] mb-[3.25rem] lg:mb-[4.5rem] text-[2.35rem] py-2 dark:text-cyan-600 md:text-4xl md:leading-[3rem]">
            <span className="md:text-[4.5rem]">
              <Typewriter
                words={[
                  "Hi, Welcome",
                  "I'm MUSTAPHA",
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
          <div className="text-5xl flex justify-center gap-16 w-[9rem] md:w-full py-3 px-1 text-gray-600 dark:text-gray-400">
            <a
              className="w-[1rem] md:w-[2.25rem]"
              href="https://instagram.com/m_planner"
            >
              <AiFillInstagram />
            </a>
            <a
              className="w-[1rem] md:w-[2.25rem]"
              href="https://twitter.com/_mussan_planner"
            >
              <AiFillTwitterCircle />
            </a>
            <a
              className="w-[1rem] md:w-[2.25rem]"
              href="https://github.com/Mplanner12"
            >
              <AiFillGithub />
            </a>
            <a
              className="w-[1rem] md:w-[2.25rem]"
              href="https://linkedin.com/in/mustapha-shuaibu-91037a1b7"
            >
              <AiFillLinkedin />
            </a>
          </div>
          <div className="flex justify-center w-full mt-[2.25rem] md:mt-[2.5rem] md:self-center">
            <motion.button
              className="w-[20rem] md:w-[14rem] flex justify-around border-cyan-800 dark:bg-black bg-white dark:bg-gradient-to-r from-cyan-700 shadow-xl to-gray-800 md:text-[1.15rem] dark:text-white px-4 py-4 border-none rounded-[1.25rem] ml-8"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
            >
              <a
                className="w-[10.5rem] md:w-fit"
                href="Resume.pdf"
                download="resume.pdf"
              >
                Download Resume
              </a>
              <BsDownload />
            </motion.button>
          </div>
        </div>
        <div className="mx-auto lg:ml-[15rem] -left-[3rem] rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
          <Image
            className=""
            src={MyAvatar}
            alt="Avatr"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
}
