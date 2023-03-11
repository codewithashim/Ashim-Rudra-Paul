import React, { useState } from "react";
import { styles } from "../style";
import { navlink } from "../components";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState();

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary mx-auto`}
    >
      <Link
        to="/"
        className="flex items-center gap-2"
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}
      >
        
      </Link>
    </nav>
  );
};

export default Navbar;
