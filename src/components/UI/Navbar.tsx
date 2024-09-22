import { useEffect } from "react";
import { Link } from "react-router-dom";
import UserButton from "./UserButton";
import useUserStore from "@_src/store/userStore";

const Navbar = () => {
  const { user, setUser } = useUserStore();

  useEffect(() => {
    if (localStorage.getItem("commerce")) setUser("test");
  }, []);

  return (
    <div className="absolute top-0 flex items-center justify-between w-full h-2 p-10">
      <div className="flex w-full gap-7">
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
        <h1 className="font-serif text-2xl font-bold text-blue-600">
          App name
        </h1>
      </div>
      <div className="flex justify-end w-full">
        {user === "" ? (
          <Link to="/login">
            <button className="w-32 px-5 py-2 text-sm font-bold text-white bg-blue-600 rounded-2xl hover:bg-blue-500">
              Login
            </button>
          </Link>
        ) : (
          <UserButton />
        )}
      </div>
    </div>
  );
};

export default Navbar;
