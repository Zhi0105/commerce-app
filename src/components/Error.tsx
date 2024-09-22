import useShowHeaderStore from "@_src/store/showHeaderStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const { setHidden } = useShowHeaderStore();
  const [count, setCount] = useState<number>(3);
  const redirect = useNavigate();

  useEffect(() => {
    setHidden(true);
    return () => setHidden(false);
  }, []);

  useEffect(() => {
    if (count <= 0) {
      redirect("/");
      return;
    }

    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [count, redirect]);

  return (
    <div className="grid min-h-screen place-content-center">
      <div className="p-20 font-bold text-center text-red-500 bg-white shadow rounded-2xl">
        <h1 className="text-3xl">404</h1>
        <h1 className="text-2xl">Page not found</h1>
        <h1 className="font-medium text-black text-md">
          Redirecting you back in {count}...
        </h1>
      </div>
    </div>
  );
};

export default Error;
