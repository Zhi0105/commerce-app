import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserButton from "./UserButton";
import useUserStore from "@_src/store/userStore";
import { HiLogin, HiMenu, HiX } from "react-icons/hi";
const Navbar = () => {
  const { user, setUser } = useUserStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("commerce")) setUser("test");
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="absolute top-0 flex items-center justify-between w-full h-2 p-10">
      <div className="flex items-center justify-start w-full sm:hidden">
        <button
          onClick={toggleDropdown}
          className="text-blue-600 focus:outline-none"
        >
          {isDropdownOpen ? (
            <HiX className="w-8 h-8" /> // Close icon
          ) : (
            <HiMenu className="w-8 h-8" /> // Hamburger icon
          )}
        </button>
      </div>

      {/* Mobile view */}
      {isDropdownOpen && (
        <div className="absolute left-0 w-32 bg-white rounded shadow-lg ms-2 top-16 sm:hidden">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link
              to="/services"
              className="text-blue-600 hover:text-blue-500"
              onClick={() => setIsDropdownOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/salons"
              className="text-blue-600 hover:text-blue-500"
              onClick={() => setIsDropdownOpen(false)}
            >
              Salons
            </Link>
            <Link
              to="/barbershops"
              className="text-blue-600 hover:text-blue-500"
              onClick={() => setIsDropdownOpen(false)}
            >
              Barbershops
            </Link>
          </div>
        </div>
      )}

      <div className="hidden w-full sm:flex gap-7">
        <Link to="/services">
          <p className="text-blue-600 hover:text-blue-500">Services</p>
        </Link>
        <Link to="/salons">
          <p className="text-blue-600 hover:text-blue-500">Salons</p>
        </Link>
        <Link to="/barbershops">
          <p className="text-blue-600 hover:text-blue-500">Barbershops</p>
        </Link>
      </div>

      <div className="grid w-full place-content-center">
        <h1 className="font-serif text-lg font-bold text-blue-600 sm:text-2xl">
          App name
        </h1>
      </div>

      <div className="justify-end hidden w-full sm:flex">
        {user === "" ? (
          <Link to="/login">
            <button className="px-5 py-2 text-sm font-bold text-white bg-blue-600 md:w-32 rounded-2xl hover:bg-blue-500">
              Login
            </button>
          </Link>
        ) : (
          <UserButton />
        )}
      </div>

      <div className="flex justify-end w-full sm:hidden">
        <Link to="/login">
          <HiLogin className="w-8 h-8 text-blue-500" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
