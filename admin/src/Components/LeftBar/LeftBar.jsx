import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./LeftBar.css";
import { useLocation } from "react-router-dom";
import { sidebarLinks } from "../../constants";

const LeftBar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  const handleNavLinkClick = (linkRoute) => {
    setActiveLink(linkRoute);
  };
  return (
    <section className="custom-scrollbar sticky bg-gradient-to-b from-purple-600  to-blue-400 left-0 top-0 z-20 flex h-screen w-fit flex-col justify-between overflow-auto border-r border-r-dark-4 bg-dark-2 pb-5 pt-10 max-md:hidden">
      <div className="flex w-full flex-1 flex-col gap-6 px-10">
        <div className="flex gap-2 flex-wrap ">
          <img
            src="/assets/question-mark.png"
            alt="schoolpen"
            className="w-10 text-green-500"
          />
          <h1 className="text-3xl">
            <span className="font-bold text-white ">School</span>{" "}
            <span className="text-white">Pen</span>
          </h1>
        </div>
        {sidebarLinks.map((link) => (
          <NavLink
            to={link.route}
            key={link.label}
            exact
            className={`relative flex justify-start gap-4 rounded-lg p-4 ${
              location.pathname === link.route || activeLink === link.route
                ? " bg-gradient-to-r from-emerald-400 via-amber-300 to-cyan-500"
                : ""
            } link-hover-bg`}
            onClick={() => handleNavLinkClick(link.route)}
          >
            <img className="w-6" src={link.imgURL} alt={link.label} />
            <p className="text-light-1 max-lg:hidden text-white font-bold">
              {link.label}
            </p>
          </NavLink>
        ))}

        <img
          src="/assets/working.webp"
          alt="working"
          className="h-24 w-24 m-auto bg-white rounded-full"
        />
      </div>
      <div className="bg-purple-200 m-auto p-4 mt-4 mb-6 w-64 rounded-md shadow-md">
        <p className="text-purple-700 text-sm md:text-base">
          Unlock more features with our{" "}
          <span className="font-semibold">Premium Plan</span>
        </p>
      </div>
    </section>
  );
};

export default LeftBar;
