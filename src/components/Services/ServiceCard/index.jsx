import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const ServiceCard = ({ title, img, description }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }}
      className="md:w-1/2 lg:w-1/4 xl:w-[300px] flex gap-2 p-4"
    >
      <div className="w-[50px] flex-shrink-0">
        <img src={img} alt="" className="w-full" />
      </div>
      <div className="p-2 mb-10">
        <h3 className="font-serif text-[22px] text-tertiary font-medium">
          {title}
        </h3>
        <p className="my-2 text-tertiary text-[16px]">{description}</p>
      </div>
    </motion.div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.node.isRequired,
};

export default ServiceCard;
