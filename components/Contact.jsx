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
    <section id="contact" className="mt-[5rem] md:mt-[8rem]">
      <p className="text-sm dark:text-white text-center mb-[1.25rem]">
        Get in Touch
      </p>
      <h2 className=" dark:text-cyan-600 font-bold text-[2.15rem] md:text-[2.5rem] text-center mb-[2.3rem] md:mb-[4rem]">
        CONTACT ME
      </h2>
      <motion.div
        animate={animation1}
        ref={ref}
        className="bg-gray-200 dark:bg-gray-200 border-2 border-gray-500 flex flex-col md:flex-row justify-between md:justify-around rounded-2xl p-[1.35rem] w-[19.85rem] md:w-[28rem] h-fit mx-auto"
      >
        <span className="w-fit mx-auto flex justify-around md:justify-between text-gray-900 dark:text-cyan-900">
          <AiTwotoneMail />
          <a
            className="md:ml-[0.45rem] md:text-lg"
            href="mailto:almussanmplanner12@gmail"
          >
            almussanmplanner12@gmail
          </a>
        </span>
        <span className="flex justify-around md:justify-between mx-auto text-gray-900 w-fit dark:text-cyan-900">
          <IoLogoWhatsapp />{" "}
          <a className="md:ml-[0.45rem] md:text-lg" href="tel:+2349016247299">
            Whatsapp
          </a>
        </span>
      </motion.div>
    </section>
  );
}
