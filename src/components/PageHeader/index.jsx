import PropTypes from "prop-types";

const PageHeader = ({ title, src, desc }) => {
  return (
    <div
      className={`relative bg-no-repeat bg-cover bg-center py-16 md:py-24 mb-10`}
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div className="relative z-20">
        <h2 className="text-white text-center text-[32px] lg:text-[42px] uppercase font-poppins font-semibold z-50">
          {title}
        </h2>
        <p className="text-center text-white px-8 md:w-[70%] xl:w-[60%] mx-auto lg:text-[18px] z-50">
          {desc}
        </p>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
export default PageHeader;
