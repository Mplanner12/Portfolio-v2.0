import Head from "next/head";
import { useState } from "react";
import Intro from "../components/Intro";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Project from "../components/Project";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Planner&apos;s Portfolio</title>
        <meta
          name="description"
          content="Mustapaha Shuaibu's portfolio, A skillful hard working Fullstack Developer"
        />
        <link rel="icon" href="/Avatar2.jpg" />
      </Head>
      <main className=" bg-gray-100 px-8 dark:bg-gray-900 md:px-10 lg:px-14 flex flex-col justify-start items-center">
        <Nav setDarkMode={setDarkMode} darkMode={darkMode} />
        <Intro />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
