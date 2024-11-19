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
        <div className="md:w-[300px] flex flex-col gap-4 mt-6">
          <h2 className="text-darkPrimary uppercase font-medium">CONTACT US</h2>
          <p>4 Adebola Ojomu street aguda, Surulere, Lagos.</p>
          <p>
            <a href="tel:+2348029259259" className="">
              Call Us: +2348029269259
            </a>
          </p>
          <p>
            <a href="mailto:olawusirayo@gmail.com" className="">
              Email: olawusirayo@gmail.com
            </a>
          </p>
        </div>
        <div className="md:w-[300px] flex flex-col gap-4 mt-6">
          <h2 className="text-darkPrimary uppercase font-medium">
            OPENING HOURS
          </h2>
          <p>Tuesday - Saturday: 9am - 9pm</p>
          <p>Sunday: 1pm - 8pm</p>
        </div>
        <div className="md:w-[250px] flex flex-col gap-4 mt-6">
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
