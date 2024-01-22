import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.scss'; // import styles

const Hero = () => {
  const [isInView, setIsInView] = useState(false);
  const scrollRef = useRef();  // Ref for the scroll indicator

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => {
      if (scrollRef.current) {
        observer.unobserve(scrollRef.current);
      }
    };
  }, []);

  const scrollIndicatorVariants = {
    up: { y: -10 },
    down: { y: 10 },
  };

  const slidingTextVariants = {
    animate: {
      x: [0, -window.innerWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 10,
          ease: 'linear'
        }
      }
    }
  };
  
  return (
    <div className={styles.hero}>
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h2>Omar Faruk</h2>
          <h1>
            A Fullstack
            <br />
            Web Developer
          </h1>
          <p className={styles['hero-content']}>
            Lorem ipsum, dolor sit amet consectetur adipisicing <br /> metus sed
            ligula interdum ullamcorper varius
          </p>
          <div className={styles.buttons}>
            <button className={styles.btn}>Contact Me</button>
            <button className={styles['btn-secondary']}>Download CV</button>
          </div>
          <motion.img
            ref={scrollRef}
            className={styles.indicator}
            src="/scroll.png"
            alt="Scroll Indicator"
            variants={scrollIndicatorVariants}
            initial="up"
            animate={isInView ? { y: ["-10px", "10px"] } : {}}
            transition={
              isInView
                ? {
                    repeatType: "mirror",
                    repeat: Infinity,
                    duration: 1,
                    ease: "easeInOut",
                  }
                : {}
            }
          />
        </div>

        {isInView && (
          <motion.div
            className={styles.slidingTextContainer}
            variants={slidingTextVariants}
            initial="animate"
            animate="animate"
          >
            REACT, NODE, MONGODB, MYSQL, SASS, JAVASCRIPT, TYPESCRIPT, GIT,
            GITHUB, HEROKU, NETLIFY
          </motion.div>
        )}

        <div className={styles.imageContainer}>
          <img src="/hero.png" alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;