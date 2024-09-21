import { Link } from "react-router-dom";

const HomeServiceContent = () => {
  return (
    <div className="mb-10">
      <div className="bg-lightPrimary">
        <p className="px-8 py-4 text-center text-secondary md:w-[70%] xl:w-[60%] mx-auto lg:text-[18px]">
          Bringing the Nail Studio to You! Enjoy the same personalized care and
          creative nail designs in the comfort of your own home. Whether
          it&apos;s a special occasion or a relaxing treat, our home service
          ensures you look and feel fabulous without stepping out the door.
        </p>
        <p className="w-[100px] h-[5px] mx-auto bg-darkPrimary"></p>
      </div>
      <div className="p-8 mt-10 md:flex justify-center gap-10 bg-lightPrimary lg:p-12 xl:px-32">
        <div className="flex gap-4 md:w-[30%] lg:w-[30%] shrink-0 mb-10">
          <p className="w-[15%] font-amatic font-bold text-[40px]">
            <img
              src="https://cdn-icons-png.freepik.com/256/10371/10371939.png?ga=GA1.1.1193873028.1726111514&semt=ais_hybrid"
              alt="group"
            />
          </p>
          <p className="w-[80%]">
            <b className="text-darkPrimary">
              Nail Care in the Comfort of Your Home:
            </b>{" "}
            Our nail technicians bring the salon experience to you, providing
            convenient and personalized nail care services in the comfort of
            your own home.
          </p>
        </div>

        <div className="flex gap-4 md:w-[30%] lg:w-[30%] shrink-0 mb-10">
          <p className="w-[15%] font-amatic font-bold text-[40px]">
            <img
              src="https://cdn-icons-png.freepik.com/256/4413/4413779.png?ga=GA1.1.1193873028.1726111514&semt=ais_hybrid"
              alt="home"
              className="w-full object-cover"
            />
          </p>
          <p className="w-[80%]">
            <b className="text-darkPrimary">Group Treatments Available: </b>{" "}
            Make your home a spa destination! Gather friends or family for a fun
            and memorable nail care experience. Our group treatments are perfect
            for celebrations, bonding time, or simply a day of pampering
            together.
          </p>
        </div>
        <div className="flex gap-4 md:w-[30%] lg:w-[30%] shrink-0 mb-10">
          <p className="w-[15%] font-amatic font-bold text-[40px]">
            <img
              src="https://cdn-icons-png.freepik.com/256/10432/10432183.png?ga=GA1.1.1193873028.1726111514&semt=ais_hybrid"
              alt="timing"
            />
          </p>
          <p className="w-[80%]">
            <b className="text-darkPrimary">Flexible Scheduling: </b> Schedule
            an appointment at a time that suits you, perfect for those with busy
            lives or mobility issues.
          </p>
        </div>
      </div>
      <div className="flex justify-center my-4">
        <Link
          to="/booknow"
          className="text-center py-4 px-6 text-[18px] font-semibold font-poppins bg-primary rounded-md text-tertiary hover:bg-primary"
        >
          BOOK HOME SERVICE
        </Link>
      </div>
    </div>
  );
};

export default HomeServiceContent;
