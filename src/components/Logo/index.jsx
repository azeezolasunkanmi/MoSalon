import logo from "../../assets/logo/logo.jpg";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full overflow-hidden flex justify-center items-center">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <h3 className="text-[18px] lg:text-[22px] text-secondary">
          Polishme by Mo
        </h3>
        <p className="text-[12px] lg:text-[14px] text-tertiary">
          Nail studio 🩷
        </p>
      </div>
    </div>
  );
};

export default Logo;
