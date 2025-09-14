import { useRef } from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="card card-border rounded-xl p-6 h-full flex flex-col justify-between"
      ref={cardRef}
      onMouseMove={handleMouseMove}
    >
      <div>
        <div className="image-wrapper bg-black-200 rounded-lg h-48 mb-6">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-lg md:text-xl font-semibold">{project.name}</h2>
          <p className="hero-badge text-sm">{project.contribution}</p>
        </div>
        <p className="text-white-50 mt-2 text-sm">{project.description}</p>
      </div>
      <a
        href={project.demo}
        target="_blank"
        rel="noreferrer"
        className="cta-wrapper mt-4 block w-fit"
      >
        <div className="cta-button group">
          <div className="bg-circle" />
          <p className="text">Live Demo</p>
          <div className="arrow-wrapper">
            <img src="/images/arrow-right.svg" alt="arrow" />
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectCard;
