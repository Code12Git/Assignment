import React from "react";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="flex h-12 text-red-500 p-4 items-center justify-center md:h-24">
      <div className="md:hidden ">
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
