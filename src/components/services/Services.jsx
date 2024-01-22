/* eslint-disable react/no-unescaped-entities */
import "./services.scss";
// import motion
import { motion } from "framer-motion";


function Services () {
  const listContainerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };
  const listItemVariants = {
    hidden: { x: -200, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  };


  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <p>I focus on fast, responsive, and easy to use site.
          <br/>
          <span>React, Next, Express, MongoDB</span>
        </p>
        <motion.hr
          initial={{ width: "50px" }}
          whileInView={{ width: "200px" }}  // This will trigger when in view
          transition={{ duration: 1, delay: 0.7 }} // Set delay of 500ms
        />

      </motion.div>

        <motion.div className="titleContainer">
        
          <h2>Do you have <strong>Unique</strong> ideas?</h2>
          <h3>Let's make them <strong>Real</strong></h3>
          <button>What We Do ?</button>

        </motion.div>
      <motion.div className="listContainer"
        variants={listContainerVariants}
        initial="hidden"
        //animate="show"
        whileInView="show"
      >
        
        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          variants={listItemVariants}
        >
          <h3>Web Development</h3>
          <p>Building websites that are fast, responsive, and easy to use.</p>
          <button>Learn More</button>
        </motion.div>


        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          variants={listItemVariants}
        >
          <h3>Web Design</h3>
          <p>Building websites that are fast, responsive, and easy to use.</p>
          <button>Learn More</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          variants={listItemVariants}
        >
          <h3>Mobile App Development</h3>
          <p>Building websites that are fast, responsive, and easy to use.</p>
          <button>Learn More</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          variants={listItemVariants}
        >
          <h3>Mobile App Development</h3>
          <p>Building websites that are fast, responsive, and easy to use.</p>
          <button>Learn More</button>
      
        </motion.div>



      </motion.div>
    </motion.div>
  )
}

export default Services