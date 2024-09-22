import useUserStore from "@_src/store/userStore";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserButton = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const { user, setUser } = useUserStore();

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleLogout = () => {
    setUser("");
    localStorage.removeItem("commerce");
  };

  return (
    <div className="relative">
      <div
        onClick={handleClick}
        className="grid w-32 mb-2 font-bold text-blue-500 border-2 border-blue-500 rounded-full cursor-pointer h-9 place-content-center"
      >
        {user}
      </div>
      <div
        className={`absolute z-10 transition-all duration-300 ease-in-out flex flex-col gap-1 bg-white rounded-xl w-full overflow-hidden ${
          clicked ? "max-h-40 p-1" : "max-h-0"
        }`}
      >
        <Link to="/history">History</Link>
        <button
          onClick={handleLogout}
          className="w-full h-6 text-white bg-red-500 rounded-lg hover:bg-red-400"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserButton;
