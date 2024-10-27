import { Link } from "react-router-dom";
import Gallery from "../Gallery";
const Inspo = () => {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <h2 className="text-center text-[45px] font-bold font-amatic border-b-4 border-primary inline-block">
          Get Inspired
        </h2>
      </div>
      <p className="text-center text-[18px] font-medium text-tertiary font-poppins mt-2">
        Explore our collection. Swipe left for more nail inspo 🩷
      </p>
      <Gallery />

      <div className="px-12 flex flex-col md:flex-row justify-center gap-4 mb-20">
        <Link
          to="/booknow"
          className="text-center py-2 px-4 text-[35px] font-bold font-amatic border-4 border-primary text-tertiary hover:bg-primary rounded"
        >
          BOOK AN APPOINTMENT
        </Link>
        <Link
          to="/inspo"
          className="text-center py-2 px-4 text-[35px] font-bold font-amatic bg-primary text-tertiary hover:bg-darkPrimary rounded"
        >
          VIEW GALLERY
        </Link>
      </div>
    </div>
  );
};

export default Inspo;
