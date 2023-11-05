import { Outlet } from "react-router-dom";
import TopBar from "@/Components/TopBar";
import { Toaster } from "@/Components/ui/toaster";
// import Sidebar from "@/Components/Sidebar";
// import { useState } from "react";
const RootLayout = () => {
  //   const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="dark:bg-boxdark-2 dark:text-bodydark">
        <div className="flex h-screen overflow-hidden">
          {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <TopBar />
            <main className="container-wide">
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
