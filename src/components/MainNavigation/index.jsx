import { navLinks } from "../../constants";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import { useState } from "react";

const MainNavigation = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="font-poppins border-b">
      <div className="flex justify-between items-center py-4 px-4 lg:px-10 xl:px-28">
        <Logo />
        <div className="hidden text-tertiary lg:flex items-center text-[16px] lg:gap-6 ">
          {navLinks.map(link => (
            <NavLink
              key={link.id}
              to={link.to}
              className={`px-2  border-primary text-[18px] ${
                link.id === "booknow"
                  ? "bg-primary rounded p-2 px-4 hover:border-b-0 hover:bg-darkPrimary"
                  : "hover:border-b-4"
              }`}
            >
              {link.title}
            </NavLink>
          ))}
        </div>
        <div className="lg:hidden">
          {toggle ? (
            <MdClose
              size={30}
              className="lg:hidden"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <RxHamburgerMenu
              size={30}
              className="lg:hidden"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
      {toggle && (
        <div>
          <div className="flex flex-col m-4 gap-6 text-[16px] font-semibold text-tertiary h-screen lg:hidden">
            {navLinks.map(link => (
              <span
                key={link.id}
                className={`w-full p-2 text-center ${
                  link.id === "booknow"
                    ? "bg-primary rounded hover:bg-[#ffc2cd]"
                    : ""
                }`}
                onClick={() => setToggle(!toggle)}
              >
                <NavLink className="w-full block" to={link.to}>
                  {link.title}
                </NavLink>
              </span>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default MainNavigation;
