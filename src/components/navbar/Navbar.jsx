import "./navbar.scss";
import { motion } from 'framer-motion';
const Navbar = () => {
  return (
    <>
      <div className="navbar">
       
        <div className="wrapper">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            React Folio
          </motion.span>




          <div className="social">
            <a href="#">
              <img src="/facebook.png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/instagram.png" alt="Instagram" />
            </a>
            <a href="#">
              <img src="/youtube.png" alt="Youtube" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
