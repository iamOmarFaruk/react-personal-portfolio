import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type:'tween', 
     
      staggerChildren: 0.1, // delay children by 0.1 seconds
      delayChildren: 0.5 
    } 
  },
};

const items = ['Item 1', 'Item 2', 'Item 3', 'item 4', 'item 5', 'item 6', 'item 7', 'item 8', 'item 9', 'item 10'];

function Test () {
  return (
    <div className='course'>
      <motion.ul 
        initial='hidden' 
        animate='visible'
        variants={variants}
      >
        {/* map items */}
        {items.map((item) => (
          <motion.li
            key={item}
            variants={variants}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default Test;