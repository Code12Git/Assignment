import React, { useState } from "react";
import { sidebarLinks } from "../constants";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {!open ? (
        <img
          src="/assets/menu.png"
          className="cursor-pointer"
          height={25}
          width={25}
          alt="drawer"
          onClick={() => setOpen(true)}
        />
      ) : (
        <img
          src="/assets/close.png"
          height={15}
          width={15}
          className="cursor-pointer"
          alt="close"
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="bg-gradient-to-b from-purple-600  to-blue-400 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] flex flex-col gap-8 w-full items-center justify-center text-3xl z-10">
          {sidebarLinks.map((link, index) => (
            <NavLink to={link.route} key={index} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
