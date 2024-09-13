import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { ScrollToTop } from "../ScrollToTop";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollToTop />
    </>
  );
};
