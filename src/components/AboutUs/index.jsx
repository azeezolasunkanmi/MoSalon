import pic from "../../assets/aboutUs/working.png";
import ServiceCard from "../Services/ServiceCard";
import { servicesContent } from "../../constants";
import { FaWhatsapp, FaTiktok, FaInstagram, FaFacebookF } from "react-icons/fa";

const AboutUS = () => {
  return (
    <>
      <div className="md:flex  bg-primary">
        <div className="md:w-1/2 overflow-hidden">
          <img
            src={pic}
            alt="nail tech working"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
        <div className="md:w-1/2 py-24 px-8 lg:px-14 xl:px-20">
          <div className="flex flex-col gap-6">
            <h3 className="text-[30px] text-darkPrimary font-amatic font-bold lg:text-[40px]">
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
            <p className="text-tertiary font-semibold">We always promise to:</p>
            <ul className="text-tertiary font-semibold">
              <li>&gt; Deliver consistent and best customer service</li>
              <li>&gt; Use products of the highest quality</li>
              <li>
                &gt; Maintain the highest standards for safety and cleanliness
              </li>
              <li>&gt; Resolve any unsatisfactory experience immediately</li>
            </ul>
            <p className="py-2 border-b-4 border-lightPrimary w-[150px] uppercase text-darkPrimary font-semibold">
              Connect with us
            </p>
            <div className="flex gap-6">
              <a
                href="https://wa.me/2348029269259"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp
                  size={24}
                  className="hover:text-darkPrimary hover:scale-150"
                />
              </a>
              <a
                href="https://www.instagram.com/polishme_by_mo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  size={24}
                  className="hover:text-darkPrimary hover:scale-150"
                />
              </a>
              <a
                href="https://www.facebook.com/phateamah?mibextid=LQQJ4d "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF
                  size={24}
                  className="hover:text-darkPrimary hover:scale-150"
                />
              </a>
              <a
                href="https://www.tiktok.com/@polish_me_by_mo?_t=8r1CcwGlTJl&_r=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok
                  size={24}
                  className="hover:text-darkPrimary hover:scale-150"
                />
              </a>
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
