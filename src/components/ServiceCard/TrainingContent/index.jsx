import { Link } from "react-router-dom";

const TrainingContent = () => {
  return (
    <div className="mb-10">
      <div className="bg-lightPrimary">
        <p className="px-8 py-4 text-center text-secondary md:w-[70%] xl:w-[60%] mx-auto lg:text-[18px]">
          Master the Art of Nail Design! Our comprehensive nail training
          programs are designed for both beginners and professionals. Learn the
          latest techniques, from intricate designs to advanced nail care, and
          unlock your potential in the exciting world of beauty.
        </p>
        <p className="w-[100px] h-[5px] mx-auto bg-darkPrimary"></p>
      </div>
      <div className="p-8 mt-10 md:flex justify-center gap-10 bg-lightPrimary lg:p-12 xl:px-32">
        <div className="flex gap-4 md:w-[30%] lg:w-[30%] shrink-0 mb-10">
          <p className="w-[15%] font-amatic font-bold text-[40px]">
            <img
              src="https://cdn-icons-png.freepik.com/256/13511/13511047.png?ga=GA1.1.1193873028.1726111514&semt=ais_hybrid"
              alt=""
            />
          </p>
          <p className="w-[80%]">
            <b className="text-darkPrimary">Become a Nail Artist:</b> Unlock
            your creativity and learn the art of nail design with our
            comprehensive training programs, perfect for beginners or
            experienced technicians looking to enhance their skills.
          </p>
        </div>

        <div className="flex gap-4 md:w-[30%] lg:w-[30%] shrink-0 mb-10">
          <p className="w-[15%] font-amatic font-bold text-[40px]">
            <img
              src="https://cdn-icons-png.freepik.com/256/15341/15341206.png?ga=GA1.1.1193873028.1726111514&semt=ais_hybrid"
              alt=""
            />
          </p>
          <p className="w-[80%]">
            <b className="text-darkPrimary">Hands-on Experience:</b> Our expert
            instructors provide personalized guidance and hands-on training to
            ensure you master the latest techniques and trends.
          </p>
        </div>
        <div className="flex gap-4 md:w-[30%] lg:w-[30%] shrink-0 mb-10">
          <p className="w-[15%] font-amatic font-bold text-[40px]">
            <img
              src="https://cdn-icons-png.freepik.com/256/5183/5183845.png?ga=GA1.1.1193873028.1726111514&semt=ais_hybrid"
              alt=""
            />
          </p>
          <p className="w-[80%]">
            <b className="text-darkPrimary">Certification and Support:</b>{" "}
            Receive certification upon completion and ongoing support to help
            you succeed in your nail career.
          </p>
        </div>
      </div>
      <div className="flex justify-center my-4">
        <Link
          to="/booknow"
          className="text-center py-4 px-6 text-[18px] font-semibold font-poppins bg-primary rounded-md text-tertiary hover:bg-primary"
        >
          TAKE TRAINING COURSE
        </Link>
      </div>
    </div>
  );
};

export default TrainingContent;
