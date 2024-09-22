import useShowHeaderStore from "@_src/store/showHeaderStore";
import { RegisterFormFields } from "@_src/types/types";
import { ReactNode, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const UserInfoForm = ({ register, errors }: { register: any; errors: any }) => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center">Personal Information</h1>
      <input
        className="w-full px-5 mb-1 bg-gray-100 border outline-none rounded-xl text-md placeholder-neutral-700 h-9"
        placeholder="Enter your first name"
        {...register("firstName", { required: "First name is required" })}
      />
      {errors.firstName && (
        <p className="text-sm text-red-500">{errors.firstName.message}</p>
      )}
      <input
        className="w-full px-5 mb-1 bg-gray-100 border outline-none rounded-xl text-md placeholder-neutral-700 h-9"
        placeholder="Enter your middle name"
        {...register("middleName", { required: "Middle name is required" })}
      />
      {errors.middleName && (
        <p className="text-sm text-red-500">{errors.middleName.message}</p>
      )}
      <input
        className="w-full px-5 mb-1 bg-gray-100 border outline-none rounded-xl text-md placeholder-neutral-700 h-9"
        placeholder="Enter your last name"
        {...register("lastName", { required: "Last name is required" })}
      />
      {errors.lastName && (
        <p className="text-sm text-red-500">{errors.lastName.message}</p>
      )}
    </>
  );
};

const ContactForm = ({ register, errors }: { register: any; errors: any }) => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center">Contact details</h1>

      <input
        className="w-full px-5 mb-1 bg-gray-100 border outline-none rounded-xl text-md placeholder-neutral-700 h-9"
        placeholder="Enter your phone number"
        {...register("phone", { required: "Phone number is required" })}
      />
      {errors.phone && (
        <p className="text-sm text-red-500">{errors.phone.message}</p>
      )}
      <input
        className="w-full px-5 mb-1 bg-gray-100 border outline-none rounded-xl text-md placeholder-neutral-700 h-9"
        placeholder="Enter your email"
        type="email"
        {...register("email", { required: "Email is required" })}
      />
      {errors.email && (
        <p className="text-sm text-red-500">{errors.email.message}</p>
      )}
    </>
  );
};

const PasswordForm = ({
  register,
  errors,
  watch,
}: {
  register: any;
  errors: any;
  watch: any;
}) => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center">Password</h1>{" "}
      <input
        className="w-full px-5 mb-1 bg-gray-100 border outline-none rounded-xl text-md placeholder-neutral-700 h-9"
        placeholder="Enter your password"
        type="password"
        {...register("password", { required: "Password is required" })}
      />
      {errors.password && (
        <p className="text-sm text-red-500">{errors.password.message}</p>
      )}
      <input
        className="w-full px-5 mb-1 bg-gray-100 border outline-none rounded-xl text-md placeholder-neutral-700 h-9"
        placeholder="Confirm your password"
        type="password"
        {...register("confirmPassword", {
          required: "Confirm password is required",
          validate: (value: string) =>
            value === watch("password") || "Passwords do not match",
        })}
      />
      {errors.confirmPassword && (
        <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
      )}
    </>
  );
};

const DateForm = ({ register, errors }: { register: any; errors: any }) => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center">Date of birth</h1>{" "}
      <input
        className="w-full px-5 mb-1 bg-gray-100 border outline-none rounded-xl text-md placeholder-neutral-700 h-9"
        placeholder="Enter your last name"
        type="date"
        {...register("dob", { required: "Date of birth is required" })}
      />
      {errors.dob && (
        <p className="text-sm text-red-500">{errors.dob.message}</p>
      )}
    </>
  );
};

const Register = () => {
  const { setHidden } = useShowHeaderStore();
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm<RegisterFormFields>();

  const components: ReactNode[] = [
    <UserInfoForm register={register} errors={errors} key="user-info" />,
    <ContactForm register={register} errors={errors} key="contact" />,
    <PasswordForm
      register={register}
      errors={errors}
      watch={watch}
      key="password"
    />,
    <DateForm register={register} errors={errors} key="date" />,
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
            <>
              <button
                type="submit"
                className="h-8 text-white bg-blue-500 hover:bg-blue-400 rounded-xl"
              >
                Register
              </button>
              {Object.keys(errors).length > 0 && (
                <p className="text-center text-red-500">
                  Please fix the highlighted errors before submitting.
                </p>
              )}
            </>
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
