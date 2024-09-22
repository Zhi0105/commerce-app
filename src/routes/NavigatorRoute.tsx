import { BrowserRouter as Router } from "react-router-dom";
import { RouteList } from "./RouteList";
import Navbar from "@_src/components/UI/Navbar";
import useShowHeaderStore from "@_src/store/showHeaderStore";
export const NavigatorRoute = () => {
  const { hidden } = useShowHeaderStore();

  return (
    <Router>
      {!hidden && <Navbar />}
      <RouteList />
    </Router>
  );
};
