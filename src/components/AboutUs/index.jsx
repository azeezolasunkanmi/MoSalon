import pic from "../../assets/aboutUs/working.png";
import ServiceCard from "../Services/ServiceCard";
import { Link } from "react-router-dom";
import { servicesContent } from "../../constants";
import { FaWhatsapp, FaTiktok, FaInstagram, FaFacebookF } from "react-icons/fa";

const AboutUS = () => {
  return (
    <>
      <div className="md:flex  bg-primary">
        <div className="md:w-1/2">
          <img
            src={pic}
            alt="nail tech working"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 py-24 px-8 lg:px-14 xl:px-20">
          <div className="flex flex-col gap-6">
            <h3 className="text-[30px] text-[#ce7f86] font-amatic font-bold lg:text-[40px]">
              About us
            </h3>
            <h2 className="text-[34px] uppercase font-serif text-secondary">
              Welcome to Polishme by Mo
            </h2>
            <p className="text-[17px] font-poppins">
              Here, we abide by a strict set of standards different from other
              salons in order to ensure the safest, smoothest, and most
              comfortable experience for our clients. We call these standards
              the Pure in Heart Promise.
            </p>
            <p className="text-tertiary">We always promise to:</p>
            <ul className="text-tertiary">
              <li>&gt; Deliver consistent and best customer service</li>
              <li>&gt; Use products of the highest quality</li>
              <li>
                &gt; Maintain the highest standards for safety and cleanliness
              </li>
              <li>&gt; Resolve and unsatisfactory experience immediately</li>
            </ul>
            <p className="py-2 border-b-4 border-lightPrimary w-[150px] uppercase text-[#ce7f86]">
              Connect with us
            </p>
            <div className="flex gap-6">
              <Link>
                <FaWhatsapp
                  size={24}
                  className="hover:text-[#ce7f86] hover:scale-150"
                />
              </Link>
              <Link>
                <FaInstagram
                  size={24}
                  className="hover:text-[#ce7f86] hover:scale-150"
                />
              </Link>
              <Link>
                <FaFacebookF
                  size={24}
                  className="hover:text-[#ce7f86] hover:scale-150"
                />
              </Link>
              <Link>
                <FaTiktok
                  size={24}
                  className="hover:text-[#ce7f86] hover:scale-150"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:flex justify-center flex-wrap pt-14  bg-lightPrimary slide-in-bottom">
        {servicesContent.map(content => (
          <ServiceCard
            key={content.title}
            title={content.title}
            img={content.image}
            description={content.description}
          />
        ))}
      </div>
    </>
  );
};

export default AboutUS;
