import { Link } from "react-router-dom";

export const Root = () => {
  return (
    <div className="min-h-screen px-10 pt-24 sm:px-24 sm:pt-48 root-main">
      <div className="grid grid-cols-1 grid- md:grid-cols-2">
        <div className="w-full h-full">
          <h1 className="mb-6 font-sans text-3xl font-bold sm:mb-8 sm:text-5xl text-neutral-800">
            Appoint your barbers or salon professionals from the registered
            salons and barbershops here.
          </h1>
          <p className="mb-8 text-xl sm:text-2xl text-neutral-800">
            Find different services provided by different salons and barbershops
          </p>{" "}
          <Link
            to="/services"
            className="grid w-full h-10 text-xl border-2 sm:text-2xl sm:h-11 rounded-3xl place-content-center sm:w-52 text-neutral-800 border-neutral-800 hover:text-neutral-600 hover:border-neutral-600"
          >
            Services
          </Link>
        </div>
        <div className="grid mt-20 place-content-center sm:pt-0">
          picture here
        </div>
      </div>
    </div>
  );
};
