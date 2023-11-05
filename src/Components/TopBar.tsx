import Search from "@/Components/Search";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-yellow-300 drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 container-wide">
        <div className="flex items-center gap-2 sm:gap-4">
          <Link to={"/"}>
            <img
              src="/CineWave-logos_transparent.png"
              alt=""
              className="max-w-[200px]"
            />
          </Link>
        </div>
        <div className="hidden sm:block">
          <Search />
        </div>
        <div className="flex items-center gap-3 2xsm:gap-7">
          <div className="relative">{/* <NotificationsItem /> */}</div>
          <div className="relative">
            <div className="flex items-center space-x-4 ">
              <img className="w-10 h-10 rounded-full" src="/user.jpg" alt="" />
              <div className="font-medium dark:text-white">
                <div>José Jalapeño</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Joined in August 2014
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopBar;
