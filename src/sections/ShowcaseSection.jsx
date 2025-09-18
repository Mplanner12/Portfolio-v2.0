import { useState } from "react";
import { Projects } from "../constants";
import TitleHeader from "../components/TitleHeader";
import ProjectCard from "../components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

const ShowcaseSection = () => {
  const [showMore, setShowMore] = useState(false);

  const initialProjects = Projects.slice(0, 6);
  const remainingProjects = Projects.slice(6);

  return (
    <div id="projects" className="section-padding">
      <div className="w-full">
        <TitleHeader title="My Projects" sub="🚀 A Glimpse of My Work" />
        <div className="grid-3-cols mt-16">
          {initialProjects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
          <AnimatePresence>
            {showMore &&
              remainingProjects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} index={index + 6} />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
        {Projects.length > 6 && (
          <div className="flex-center mt-10">
            <button
              onClick={() => setShowMore(!showMore)}
              className="cta-wrapper"
            >
              <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text">{showMore ? "Show Less" : "Show More"}</p>
                <div className="arrow-wrapper">
                  <img
                    src={`/images/arrow-${showMore ? "up" : "down"}.svg`}
                    alt="arrow"
                    className={`transition-transform duration-300 ${
                      showMore ? "transform rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowcaseSection;
