import useShowHeaderStore from "@_src/store/showHeaderStore";
import { LoginFormFields } from "@_src/types/types";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import MotionP from "./UI/MotionP";

export const staticAccount = {
  email: "test@test.com",
  password: "testtest",
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>();
  const redirect = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const { setHidden } = useShowHeaderStore();

  useEffect(() => {
    if (localStorage.getItem("commerce")) redirect("/");
  }, [redirect]);

  useEffect(() => {
    setHidden(true);
    return () => setHidden(false);
  }, []);

  const onSubmit = (data: LoginFormFields) => {
    if (staticAccount.password !== data.password) {
      setError("Passwords do not match");
      return;
    }

    setError(null);

    localStorage.setItem("commerce", "token");
    redirect("/");
  };

  return (
    <div className="grid min-h-screen place-content-center">
      <form
        className="flex flex-col justify-between p-8 bg-white shadow sm:p-10 rounded-2xl h-80 w-72 sm:h-96 sm:w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <h1 className="font-bold text-center sm:text-3xl">Welcome back</h1>
        </div>
        <div>
          <div className="w-full h-16">
            <input
              className="w-full px-5 mb-1 bg-gray-100 border outline-none rounded-xl text-md placeholder-neutral-700 h-9"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <MotionP className="text-xs text-red-500 ms-5">
                Email is required
              </MotionP>
            )}
          </div>
          <div className="w-full h-16">
            <input
              type="password"
              className="w-full px-5 mb-1 text-sm bg-gray-100 border outline-none rounded-xl lg:text-md placeholder-neutral-700 h-9"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must contain at least 8 characters",
                },
              })}
            />
            {errors.password && (
              <MotionP className="text-xs text-red-500 ms-5">
                Password is required
              </MotionP>
            )}
            {error && (
              <MotionP className="text-xs text-red-500 ms-5">
                Invalid password
              </MotionP>
            )}
          </div>
        </div>

        <div className="w-full">
          <button
            className="w-full h-8 mb-1 font-bold text-white bg-blue-500 rounded-xl sm:h-9 hover:bg-blue-400"
            type="submit"
          >
            Login
          </button>
          <p className="text-sm text-center">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:text-blue-400">
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
