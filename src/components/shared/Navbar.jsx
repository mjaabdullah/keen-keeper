import { IoTimeOutline } from "react-icons/io5";
import { PiChartLine } from "react-icons/pi";
import { RiHome2Line } from "react-icons/ri";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm sticky top-0 left-0 right-0 z-50">
      <div className="navbar container mx-auto px-3">
        <div className="flex-1">
          <Link className="text-2xl font-extrabold" to="/">
            <span>Keen</span>
            <span className="text-[#244D3F]">Keeper</span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-[#64748B] space-x-1 text-lg font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "bg-[#244D3F] text-white" : ""
                }
              >
                <RiHome2Line />
                <span className="hidden sm:inline">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/timeline"
                className={({ isActive }) =>
                  isActive ? "bg-[#244D3F] text-white" : ""
                }
              >
                <IoTimeOutline />
                <span className="hidden sm:inline">Timeline</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/stats"
                className={({ isActive }) =>
                  isActive ? "bg-[#244D3F] text-white" : ""
                }
              >
                <PiChartLine />
                <span className="hidden sm:inline">Stats</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
