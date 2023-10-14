import React from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true });
  const animation1 = useAnimation();
  useEffect(() => {
    if (inView) {
      animation1.start({
        x: 0,
        transition: {
          type: "easeout",
          duration: 1.3,
          bounce: 0.3,
          delay: "0.50",
        },
      });
    }
    if (!inView) {
      animation1.start({
        x: "-50vh",
      });
    }
  });
  return (
    <motion.section
      id="contact"
      animate={animation1}
      ref={ref}
      className="mt-[5rem] md:mt-[8rem]"
    >
      <p className="text-sm dark:text-white text-center mb-[1.25rem]">
        Get in Touch
      </p>
      <h2 className=" dark:text-cyan-600 font-bold text-[2.15rem] md:text-[2.5rem] text-center mb-[2.3rem] md:mb-[4rem]">
        CONTACT ME
      </h2>
      <div className="bg-gray-200 dark:bg-gray-200 border-2 border-gray-500 flex justify-between md:justify-around rounded-2xl p-[1.35rem] w-[23.85rem] md:w-[28rem] h-fit mx-auto">
        <span className="flex justify-between text-gray-900 dark:text-cyan-900">
          <AiTwotoneMail />
          <a
            className="ml-[0.45rem] md:text-lg"
            href="mailto:almussanmplanner12@gmail"
          >
            almussanmplanner12@gmail
          </a>
        </span>
        <span className="flex justify-between text-gray-900 dark:text-cyan-900">
          <IoLogoWhatsapp />{" "}
          <a className="ml-[0.45rem] md:text-lg" href="tel:+2349016247299">
            Whatsapp
          </a>
        </span>
      </div>
      {/* <form
        className="bg-inherit rounded-xl p-[3rem] md:w-[45rem] md:flex md:flex-col md:justify-center md:mx-auto"
        action=""
      >
        <input
          className="w-full h-[3rem] px-[1rem] py-[1.5rem] dark:bg-white to-gray-800 text-cyan-800 shadow-xl rounded-xl mb-[2rem]"
          type="text"
          name="senderEmail"
          placeholder="Your Email"
        />
        <textarea
          className="resize-none w-full h-[14.5rem] active:border-none px-[1rem] py-[1.5rem] bg-white shadow-xl rounded-xl text-black"
          type="text"
          name="message"
          placeholder="Your message"
        ></textarea>
        <button className="w-full bg-black bg-gradient-to-r dark:from-cyan-700 to-gray-800 p-[1rem] mt-[1.5rem] rounded-2xl shadow-xl text-white">
          <a className="" href="mailto:almussanmplanner12@gmail">
            Submit
          </a>
        </button>
      </form> */}
    </motion.section>
  );
}
