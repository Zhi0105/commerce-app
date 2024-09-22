import useShowHeaderStore from "@_src/store/showHeaderStore";
import { ReactNode, useEffect, useState } from "react";

const UserInfoForm = () => {
  return <>user info</>;
};

const ContactForm = () => {
  return <>user contact</>;
};

const PasswordForm = () => {
  return <>password</>;
};

const DateForm = () => {
  return <>date</>;
};

const Register = () => {
  const { setHidden } = useShowHeaderStore();
  const components: ReactNode[] = [
    <UserInfoForm key="user-info" />,
    <ContactForm key="contact" />,
    <PasswordForm key="password" />,
    <DateForm key="date" />,
  ];

  const [selectedPage, setSelectedPage] = useState<ReactNode>(components[0]);
  const [pageNo, setPageNo] = useState<number>(0);

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
      <div className="p-4 bg-white sm:w-96 sm:h-96">
        <form>{selectedPage}</form>
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
