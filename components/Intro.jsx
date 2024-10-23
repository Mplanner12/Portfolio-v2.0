import React, { useEffect } from "react";
import MyAvatar from "../public/Avatar2.jpg";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
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
    <section
      id="intro"
      className="flex flex-col justify-start items-center w-full"
    >
      <Toaster />
      <div className="text-center py-10 md:px-[5rem] flex flex-col md:flex-row items-center justify-between w-full h-full">
        <div className="w-full relative md:w-[30rem] px-[1.5rem]">
          <h3 className="h-[8rem] mb-[4.35rem] lg:mb-[4.5rem] text-[2.35rem] py-2 dark:text-cyan-600 md:text-4xl md:leading-[3rem]">
            <span className="md:text-[4.5rem]">
              <Typewriter
                words={[
                  "Hi, Welcome",
                  "I'm MUSTAPHA",
                  "I'm a Fullstack Developer",
                  "AI & Machine Learning Engineer",
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
          <div className="text-5xl flex justify-center gap-16 items-center w-full py-3 px-1 text-gray-600 dark:text-gray-400">
            <a
              className="w-[1rem] md:w-[2.25rem]"
              href="https://www.instagram.com/m_planner_?igsh=MWI5cmY4Y3psZmg2dA=="
            >
              <FaInstagram />
            </a>
            {/* <a
              className="w-[1rem] md:w-[2.25rem]"
              href="https://twitter.com/_mussan_planner"
            >
              <FaXTwitter />
            </a> */}
            <a
              className="w-[1rem] md:w-[2.25rem]"
              href="https://github.com/Mplanner12"
            >
              <FaGithub />
            </a>
            <a
              className="w-[1rem] md:w-[2.25rem]"
              href="https://linkedin.com/in/mustapha-shuaibu-91037a1b7"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div className="flex justify-center w-full mt-[2.25rem] items-center">
            <motion.button
              className="w-[20rem] md:w-[14rem] flex justify-around border-cyan-800 dark:bg-black bg-white dark:bg-gradient-to-r from-cyan-700 shadow-xl to-gray-800 md:text-[1.15rem] dark:text-white px-4 py-4 border-none rounded-[1.25rem] ml-8"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
            >
              <a
                className="w-[10.5rem] md:w-fit"
                href="Resume-1.pdf"
                download="Resume-1.pdf"
              >
                Download Resume
              </a>
              <BsDownload />
            </motion.button>
          </div>
        </div>
        <div className="mx-auto flex justify-center items-center rounded-full w-full lg:w-80 h-80 relative overflow-hidden mt-20 md:mt-0 md:h-96 md:w-96">
          <Image
            className="w-full h-full object-cover rounded-full"
            src={MyAvatar}
            alt="Avatr"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
