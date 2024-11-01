import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import PropTypes from "prop-types";

const Hero = ({ title1, title2, description, image }) => {
  return (
    <div className="h-[85vh] relative">
      <img
        src={image}
        className={`h-full w-full absolute inset-0 object-cover -z-10"
        alt="background image`}
      />
      <div className="h-full relative flex items-center justify-start z-50 px-4 lg:px-10 xl:px-28">
        <motion.section
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 60,
            ease: "easeIn",
            duration: 1,
          }}
        >
          <div className="text-[50px] leading-[60px] lg:text-[72px] lg:leading-[80px] text-secondary">
            <h2>{title1}</h2>
            <h2>{title2}</h2>
          </div>
          <div>
            <p className="mt-2 text-tertiary">{description}</p>
            <Link
              to="/booknow"
              className="bg-white text-tertiary inline-block px-6 py-3 mt-4 rounded-md z-50 hover:bg-darkPrimary"
            >
              BOOK NOW
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

Hero.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
};

export default Hero;
