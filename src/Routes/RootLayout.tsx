import { Outlet, useLocation, useNavigate } from "react-router-dom";
import TopBar from "@/Components/TopBar";
import { Toaster } from "@/Components/ui/toaster";
import { useEffect } from "react";
const RootLayout = () => {
  let navigate = useNavigate();
  let location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/featured");
    }
  }, []);
  return (
    <>
      <div className="dark:bg-boxdark-2 dark:text-bodydark">
        <div className="flex h-screen overflow-hidden">
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <TopBar />
            <main className="">
              <Outlet />
              <Toaster />
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default RootLayout;
