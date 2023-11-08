import { Link, NavLink } from "react-router-dom";

function TopBar() {
  return (
    <header className="flex bg-yellow-300">
      <div className="flex flex-grow items-center justify-between px-4 py-4 container-wide">
        <div className="flex items-center gap-2 sm:gap-4">
          <Link to={"/featured"}>
            <img
              src="/CineWave-logos_transparent.png"
              alt=""
              className="max-w-[200px]"
            />
          </Link>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to={"/search"}
                className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-gray-900 md:p-0"
                aria-current="page"
              >
                Search
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/featured"}
                className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-gray-900 md:p-0"
              >
                Featured
              </NavLink>
            </li>
          </ul>
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
