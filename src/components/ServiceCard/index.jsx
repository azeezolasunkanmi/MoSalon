import PropTypes from "prop-types";

const ServiceCard = ({ title, src, screen, setScreen, targetScreen }) => {
  return (
    <div
      className={`relative bg-no-repeat bg-cover bg-center h-[100px] md:h-[200px] rounded cursor-pointer flex justify-center items-center md:w-[33%] lg:max-w-[350px] mb-10 ${
        screen === targetScreen ? "border-darkPrimary border-8" : ""
      }`}
      style={{
        backgroundImage: `url(${src})`,
      }}
      onClick={() => setScreen(targetScreen)}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-60 rounded"></div>

      <h2 className="text-white text-[22px] font-poppins font-semibold z-20 underline ">
        {title}
      </h2>
    </div>
  );
};

ServiceCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  screen: PropTypes.string.isRequired,
  targetScreen: PropTypes.string.isRequired,
  setScreen: PropTypes.func.isRequired,
};

export default ServiceCard;
