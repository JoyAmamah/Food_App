import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = React.useState(false);

  const navLinks = [
    { href: "/", name: "Home" },
    { href: "/menu", name: "Menu" },
    { href: "/category", name: "Category" },
    { href: "/location", name: "Location" },
    { href: "/contact", name: "Contact" },
  ];

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(!false);
  };

  return (
    <nav className="w-full h-[8ch] bg-neutral-50 flex items-center md:flex-row md:px-16 fixed top-0 z-50 shadow px-4 sm:px-7 lg:px-28">
      {/* Logo Section */}
      <Link to="/" className="text-2xl text-neutral-800 font-bold mr-16">
        <span className="text-yellow-500">JA</span>-Food
      </Link>

      {/* Toggle Button (for mobile only) */}
      <button
        onClick={handleClick}
        className="flex-1 lg:hidden text-neutral-600 flex items-center justify-end"
        aria-label="Toggle navigation menu"
      >
        {open ? <LiaTimesSolid className="text-xl" /> : <FaBars className="text-xl" />}
      </button>

      {/* Navigation Links */}
      <div
        className={`${
          open
            ? 'flex absolute top-14 left-0 w-full h-auto md:h-auto md:relative' : 'hidden'} flex-1 md:flex flex-col md:flex-row gap-x-5 gap-y-2 md:items-center md:p-0 sm:p-4 justify-between md:bg-transparent bg-neutral-100 md:shadow-none shadow-md rounded-md`}
      >
        <ul className="list-none flex flex-wrap flex-col md:flex-row items-start md:items-center gap-x-7 gap-y-1 text-base text-neutral-600 font-medium">
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                onClick={handleClose}
                className="hover:text-yellow-500 transition-colors duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        
          <div className="flex md:items-center items-start gap-x-5 gap-y-2 flex-wrap md:flex-row flex-col text-base font-medium text-neutral-800">
            <div className="w-[300px] px-3 py-1.5 rounded-full border border-neutral-400/70 bg-transparent flex items-center gap-x-2">
            <FaSearch className="w-3.5 h-3.5"/>
            <input type="text" placeholder="Search Foods..." className="flex-1 bg-transparent outline-none text-base text-neutral-800 font-normal placeholder:text-neutral-400/80" />
            </div>
            <button className="bg-yellow-600 px-6 py-1 rounded-full border border-yellow-600 text-sm text-neutral-50 font-medium hover:bg-yellow-600/5 hover:text-yellow-600 ease-in-out duration-300">
            Order</button>
          </div>

      </div>
    </nav>
  );
};

export default Navbar;
