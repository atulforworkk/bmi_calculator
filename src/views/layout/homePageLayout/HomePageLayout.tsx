import Header from "@/components/header/Header";
import { Outlet } from "react-router-dom";

const HomePageLayout = () => {
  return (
    <div>
      <div className="h-[8vh]">
        <Header />
      </div>
      <div className="h-[88vh]">
        <Outlet />
      </div>
    </div>
  );
};

export default HomePageLayout;
