import useShowHeaderStore from "@_src/store/showHeaderStore";
import { RegisterFormFields } from "@_src/types/types";
import { ReactNode, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const UserInfoForm = ({ register }: { register: any }) => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center">Personal Information</h1>
      <input
        className="w-full px-5 mb-1 bg-gray-100 border outline-none rounded-xl text-md placeholder-neutral-700 h-9"
        placeholder="Enter your first name"
        {...register("firstName", { required: true })}
      />
      <input
        className="w-full px-5 mb-1 bg-gray-100 border outline-none rounded-xl text-md placeholder-neutral-700 h-9"
        placeholder="Enter your middle name"
        {...register("middleName", { required: true })}
      />
      <input
        className="w-full px-5 mb-1 bg-gray-100 border outline-none rounded-xl text-md placeholder-neutral-700 h-9"
        placeholder="Enter your last name"
        {...register("lastName", { required: true })}
      />
    </>
  );
};

const ContactForm = ({ register }: { register: any }) => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center">Contact details</h1>

      <input
        className="w-full px-5 mb-1 bg-gray-100 border outline-none rounded-xl text-md placeholder-neutral-700 h-9"
        placeholder="Enter your phone number"
        {...register("phone", { required: true })}
      />
      <input
        className="w-full px-5 mb-1 bg-gray-100 border outline-none rounded-xl text-md placeholder-neutral-700 h-9"
        placeholder="Enter your email"
        type="email"
        {...register("email", { required: true })}
      />
    </>
  );
};

const PasswordForm = ({ register }: { register: any }) => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center">Password</h1>{" "}
      <input
        className="w-full px-5 mb-1 bg-gray-100 border outline-none rounded-xl text-md placeholder-neutral-700 h-9"
        placeholder="Enter your password"
        {...register("password", { required: true })}
      />
      <input
        className="w-full px-5 mb-1 bg-gray-100 border outline-none rounded-xl text-md placeholder-neutral-700 h-9"
        placeholder="Confirm your password"
      />
    </>
  );
};

const DateForm = ({ register }: { register: any }) => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center">Date of birth</h1>{" "}
      <input
        className="w-full px-5 mb-1 bg-gray-100 border outline-none rounded-xl text-md placeholder-neutral-700 h-9"
        placeholder="Enter your last name"
        type="date"
        {...register("dob", { required: true })}
      />
    </>
  );
};

const Register = () => {
  const { setHidden } = useShowHeaderStore();
  const { handleSubmit, register } = useForm<RegisterFormFields>();

  const components: ReactNode[] = [
    <UserInfoForm register={register} key="user-info" />,
    <ContactForm register={register} key="contact" />,
    <PasswordForm register={register} key="password" />,
    <DateForm register={register} key="date" />,
  ];

  const [selectedPage, setSelectedPage] = useState<ReactNode>(components[0]);
  const [pageNo, setPageNo] = useState<number>(0);

  const handleRegister = (data: RegisterFormFields) => {
    console.log(data);
  };

  useEffect(() => {
    setSelectedPage(components[pageNo]);
  }, [pageNo]);

  const nextPage = () => {
    if (pageNo < components.length - 1) {
      setPageNo((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (pageNo > 0) {
      setPageNo((prev) => prev - 1);
    }
  };

  useEffect(() => {
    setHidden(true);
    return () => setHidden(false);
  }, [setHidden]);

  return (
    <div className="grid min-h-screen place-content-center">
      <div className="flex flex-col p-4 bg-white sm:w-96 sm:h-96 rounded-2xl">
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="flex flex-col justify-center h-full gap-7"
        >
          {selectedPage}
          {pageNo === 3 && (
            <button
              type="submit"
              className="h-8 text-white bg-blue-500 hover:bg-blue-400 rounded-xl"
            >
              Register
            </button>
          )}
        </form>
        <div className="flex justify-between mt-4">
          <button onClick={prevPage} disabled={pageNo === 0}>
            Previous
          </button>
          <button onClick={nextPage} disabled={pageNo >= components.length - 1}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
