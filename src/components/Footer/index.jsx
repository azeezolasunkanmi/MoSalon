import Logo from "../Logo";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaTiktok, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-lightPrimary pt-10 border-t border-darkPrimary">
      <div className="md:flex justify-between flex-wrap px-8 lg:px-10 text-tertiary">
        <div className="md:w-[300px] mt-6">
          <Logo />
          <div className="md:max-w-[300px] mt-8">
            <h2 className="text-darkPrimary uppercase font-medium">
              Connect with us
            </h2>
            <div className="flex gap-6 mt-2 mb-8">
              <Link>
                <FaWhatsapp
                  size={24}
                  className="hover:text-darkPrimary hover:scale-150"
                />
              </Link>
              <Link>
                <FaInstagram
                  size={24}
                  className="hover:text-darkPrimary hover:scale-150"
                />
              </Link>
              <Link>
                <FaFacebookF
                  size={24}
                  className="hover:text-darkPrimary hover:scale-150"
                />
              </Link>
              <Link>
                <FaTiktok
                  size={24}
                  className="hover:text-darkPrimary hover:scale-150"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-[300px] flex flex-col gap-4 mt-6">
          <h2 className="text-darkPrimary uppercase font-medium">CONTACT US</h2>
          <p>4 Adebola Ojomu street aguda, Surulere, Lagos.</p>
          <p>
            <a href="tel:+2348029259259" className="">
              Call Us: +2348029269259
            </a>
          </p>
          <p>Email:</p>
        </div>
        <div className="md:w-[300px] flex flex-col gap-4 mt-6">
          <h2 className="text-darkPrimary uppercase font-medium">
            OPENING HOURS
          </h2>
          <p>Tuesday - Saturday: 10am - 9pm</p>
          <p>Sunday: 2pm - 9pm</p>
        </div>
        <div className="md:w-[300px] flex flex-col gap-4 mt-6">
          <h2 className="text-darkPrimary uppercase font-medium">
            QUICK LINKS
          </h2>
          <Link to="/services" className="hover:text-darkPrimary">
            Services
          </Link>
          <Link to="/training" className="hover:text-darkPrimary">
            Training
          </Link>
          <Link to="/price" className="hover:text-darkPrimary">
            Price List
          </Link>
          <Link to="/inspo" className="hover:text-darkPrimary">
            Gallery
          </Link>
        </div>
      </div>
      <p className="text-center mt-20 border-t border-slate-400 text-[14px] p-1">
        © 2024 Polishme_by_Mo. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
