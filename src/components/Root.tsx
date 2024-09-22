import { Link } from "react-router-dom";

export const Root = () => {
  return (
    <div className="min-h-screen md:px-24 md:pt-48 root-main">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full h-full">
          <h1 className="mb-8 font-sans text-5xl font-bold text-neutral-800">
            Appoint your barbers or salon professionals from the registered
            salons and barbershops here.
          </h1>
          <p className="mb-8 text-2xl text-neutral-800">
            Find different services provided by different salons and barbershops
          </p>{" "}
          <Link
            to="/services"
            className="grid text-2xl border-2 h-11 rounded-3xl place-content-center w-52 text-neutral-800 border-neutral-800 hover:text-neutral-600 hover:border-neutral-600"
          >
            Services
          </Link>
        </div>
        <div className="grid place-content-center">picture here</div>
      </div>
    </div>
  );
};
