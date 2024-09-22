import { ReactNode } from "react";

type LoginFormFields = {
  email: string;
  password: string;
};

type RegisterFormFields = LoginFormFields & {
  confirmPassword: string;
  firstName: string;
  middleName: string;
  lastName: string;
  dob: Date;
  gender: "male" | "female";
  phone: string;
  address: string;
  role: string[];
};

type RouteT = {
  path: string;
  element: ReactNode;
  protected: boolean;
};

export type { LoginFormFields, RegisterFormFields, RouteT };
