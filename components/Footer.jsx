import React from "react";

export default function Footer() {
  return (
    <section className="py-4 pt-10">
      <div>
        <p className="text-[0.8rem] md:text-[0.85rem] leading-8 text-center text-black dark:text-gray-400">
          Copyright &copy; 2023 Planner. All rights reserved.
        </p>
        {/* <p className="text-md py-1 leading-8 text-center text-gray-600 dark:text-gray-400">
          <span className="font-bold dark:text-gray-400">
            About the website:
          </span>{" "}
          built with React & Nextjs(App router), Sever actions, tailwind, framer
          motion, React Email
        </p> */}
      </div>
    </section>
  );
}
