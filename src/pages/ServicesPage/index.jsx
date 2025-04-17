import { useState } from "react";
// import ServiceCard from "../../components/ServiceCard";
import StudioContent from "../../components/ServiceCard/StudioContent";
import HomeServiceContent from "../../components/ServiceCard/HomeServiceContent";
import TrainingContent from "../../components/ServiceCard/TrainingContent";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import Policy from "../../components/Policy";
import bgHeader from "../../assets/background/bghero1.jpg";

const ServicesPage = () => {
  const [screen, setScreen] = useState("studio");

  return (
    <div className="bg-lightPrimary">
      <PageHeader
        title="Services"
        src={bgHeader}
        desc="Indulge in a pampering experience where creativity and care meet to
          bring out the best in your nails 🩷."
      />

      {/* <div className="hidden p-8 md:flex justify-center gap-10 bg-lightPrimary  px-4 lg:px-10 xl:px-28">
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
      </div> */}
      <div className="flex justify-center items-center gap-4 md:gap-8 border-b border-darkPrimary max-w-[1024px] mx-auto mb-2 font-medium md:text-[18px]">
        <h2
          className={`${
            screen === "studio" ? "border-b-4 border-darkPrimary" : ""
          } p-2 cursor-pointer shrink-0`}
          onClick={() => setScreen("studio")}
        >
          Studio Session
        </h2>
        <h2
          className={`${
            screen === "home" ? "border-b-4 border-darkPrimary" : ""
          } p-2 cursor-pointer shrink-0`}
          onClick={() => setScreen("home")}
        >
          Home Service
        </h2>
        <h2
          className={`${
            screen === "training" ? "border-b-4 border-darkPrimary" : ""
          } p-2 cursor-pointer shrink-0`}
          onClick={() => setScreen("training")}
        >
          Training
        </h2>
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
