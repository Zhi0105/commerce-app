import { Routes, Route, useLocation } from "react-router-dom";

// Screen
import { RootScreen } from "@_src/components/Screen/RootScreen";
import { RouteT } from "@_src/types/types";
import { LoginScreen } from "@_src/components/Screen/LoginScreen";
import ErrorScreen from "@_src/components/Screen/ErrorScreen";
import RegisterScreen from "@_src/components/Screen/RegisterScreen";

export const RouteList = () => {
  const location = useLocation();

  const routes: RouteT[] = [
    { path: "/", element: <RootScreen />, protected: false },
    { path: "/*", element: <ErrorScreen />, protected: false },
    { path: "/login", element: <LoginScreen />, protected: false },
    { path: "/register", element: <RegisterScreen />, protected: false },
  ];

  return (
    <Routes location={location} key={location.pathname}>
      {routes.map((route: RouteT, index: number) => (
        <Route element={route.element} path={route.path} key={index} />
      ))}
    </Routes>
  );
};
