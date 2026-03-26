import { useRef } from "react";
import Layout from "./components/layout/Layout.jsx";
import Projects from "./components/sections/Projects.jsx";
import Hero from "./components/sections/Hero.jsx";
import Contacts from "./components/sections/Contacts.jsx";

import { motion } from "framer-motion";
import { sectionMotion, sectionBlur } from "./motion/Motion";

function App() {
  const projectsRef = useRef(null)


  return (
    <Layout projectsRef={projectsRef}>
      <main className="layout__content">
        <motion.div
          variants={sectionBlur}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.05 }}
        >
          <Hero />
        </motion.div>

        <motion.div
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.05 }}
        >
          <Projects ref={projectsRef} />
        </motion.div>

        <motion.div
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.05 }}
        >
          <Contacts />
        </motion.div>
    </main>
    </Layout>
  );
}

export default App;
