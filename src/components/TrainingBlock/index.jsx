import { FaRegCheckCircle } from "react-icons/fa";
import PropTypes from "prop-types";

const TrainingBlock = ({ title, price, duration, outline }) => {
  return (
    <div className="box-shadow md:w-[340px] lg:w-[380px] border rounded-md border-primary p-8 mb-10">
      <div className="flex flex-col gap-4 my-4">
        <h2 className="text-[22px] font-semibold">{title}</h2>
        <h1 className="text-[32px] font-semibold text-tertiary">
          &#8358; {price}
        </h1>
        <p className="text-darkPrimary">{duration}</p>
        <button className="bg-primary px-6 py-4 rounded-md font-semibold">
          Get Started
        </button>
      </div>
      <div className="border-t border-primary pt-8 text-tertiary">
        {/* <p className="my-6 text-tertiary text-[18px] font-semibold">
          Course Outline
        </p> */}
        <ul>
          {outline.map((out, i) => (
            <li key={i} className="flex items-center gap-4 text-[15px] mb-4">
              <FaRegCheckCircle className="text-green-500" /> {out}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

TrainingBlock.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  outline: PropTypes.array.isRequired,
};

export default TrainingBlock;
