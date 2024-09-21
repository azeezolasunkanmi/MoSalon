import { useState } from "react";
import ServiceCard from "../../components/ServiceCard";
import StudioContent from "../../components/ServiceCard/StudioContent";
import HomeServiceContent from "../../components/ServiceCard/HomeServiceContent";
import TrainingContent from "../../components/ServiceCard/TrainingContent";
import Footer from "../../components/Footer";
import Policy from "../../components/Policy";

const ServicesPage = () => {
  const [screen, setScreen] = useState("studio");

  return (
    <div className="bg-lightPrimary">
      <div className="bg-gradient py-8 md:py-16">
        <h2 className="text-center text-[32px] lg:text-[42px] uppercase font-poppins font-semibold text-tertiary">
          Services
        </h2>
        <p className="text-center text-tertiary px-8 md:w-[70%] xl:w-[60%] mx-auto lg:text-[18px]">
          Indulge in a pampering experience where creativity and care meet to
          bring out the best in your nails 🩷.
        </p>
      </div>
      <div className="p-8 md:flex justify-center gap-10 bg-lightPrimary  px-4 lg:px-10 xl:px-28">
        <ServiceCard
          screen={screen}
          setScreen={setScreen}
          targetScreen="studio"
          title="STUDIO SESSION"
          src="https://img.freepik.com/free-photo/hair-salon-hairdresser-background-beauty_1303-1317.jpg?ga=GA1.1.1193873028.1726111514&semt=ais_hybrid"
        />
        <ServiceCard
          screen={screen}
          setScreen={setScreen}
          targetScreen="home"
          title="HOME SERVICE"
          src="https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf-near-bookshelf_105762-2224.jpg?ga=GA1.1.1193873028.1726111514&semt=ais_hybrid"
        />
        <ServiceCard
          screen={screen}
          setScreen={setScreen}
          targetScreen="training"
          title="TRAINING"
          src="https://img.freepik.com/premium-photo/manicure-nail-technician-course-training_1048944-3281197.jpg?ga=GA1.1.1193873028.1726111514&semt=ais_hybrid"
        />
      </div>
      <div className="">
        {screen === "studio" && <StudioContent />}
        {screen === "home" && <HomeServiceContent />}
        {screen === "training" && <TrainingContent />}
      </div>
      <Policy />
      <Footer />
    </div>
  );
};

export default ServicesPage;
