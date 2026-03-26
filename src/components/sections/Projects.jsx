import { forwardRef } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../../motion/Motion";

const Projects = forwardRef(function Projects(_, ref){
  return (
    <section
      ref={ref}
      className="section projects section--compact section--projects"
      id="projects"
    >
      <div className="container section-title">
        <h2 className="projects__title">Projects</h2>

        <div className="projects__group">
          <h3 className="projects__subtitle">Main Projects</h3>

          <motion.div
            className="projects__list"  
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.main.map((project) => (
              <motion.article
                key={project.id}
                variants={staggerItem}
                className="projects__list-item"
              >
                <ProjectCard project={project} variant="main" />
              </motion.article>
            ))}
          </motion.div>
        </div>

        <div className="projects__group">
          <h3 className="projects__subtitle">Experiments</h3>

          <motion.div
            className="projects__list"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.experiments.map((project) => (
              <motion.article
                key={project.id}
                variants={staggerItem}
                className="projects__list-item"
              >
                <ProjectCard project={project} variant="experiment" />
              </motion.article>
            ))}
          </motion.div>
        </div>

        <div className="projects__group">
          <h3 className="projects__subtitle">Planned</h3>

          <motion.div
            className="projects__list"  
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.planned.map((project) => (
              <motion.article
                key={project.id}
                variants={staggerItem}
                className="projects__list-item"
              >
                <ProjectCard project={project} variant="planned" />
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default Projects;
