import Footer from "./Footer.jsx" 
import Header from "./Header.jsx" 

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

function Layout({ children, projectsRef }) {
  const prefersReduced = useReducedMotion();
  

  const { scrollYProgress } = useScroll({
    target: projectsRef,
    offset: ["start end", "start center"]
  })

  const blur = useTransform(
    scrollYProgress,
    [0.4, 1],
    [0, 10],
    { clamp: true }
  );

  const brightness = useTransform(
    scrollYProgress,
    [0.3, 1],
    [1, 0.75],
    { clamp: true }
  );

  const opacity = useTransform(
    scrollYProgress,
    [0.3, 1],
    [0.05, 0.12],
    { clamp: true }
  );


  const filter = useMotionTemplate`blur(${blur}px) brightness(${brightness})`;

  return (
    <div className="layout">
      <div className="layout__ambient">
        <motion.video
          className="layout__ambient-video"
          src="/ambient.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={
            prefersReduced
              ? undefined
              : {
                  filter,
                  opacity,
                }
          }
        />
      </div>

      <div className="layout__banner">
        <Header />
      </div>

      {children}

      <footer className="layout__footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
