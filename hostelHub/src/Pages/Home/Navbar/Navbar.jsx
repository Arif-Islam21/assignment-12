import toast from "react-hot-toast";
import ThemeBtn from "../../../Components/ThemeBtn";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";
import ThemeLogo from "../../../Components/ThemeLogo";

const Navbar = () => {
  const { user, logout } = useAuth();

  const signOut = async () => {
    try {
      logout();
      toast.success("Logged out Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const links = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/meals"}>Meals</Link>
      </li>
      <li>
        <Link to={"/upcomingMeals"}>Upcoming Meal</Link>
      </li>
    </>
  );

  return (
    <div className="navbar shadow-md bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="hidden md:flex">
          <ThemeLogo />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end z-10 gap-4">
        {user ? (
          <>
            {" "}
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="This is user photo" src={user.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <button className="cursor-not-allowed">
                  <span disabled className="cursor-not-allowed">
                    {user?.displayName}
                  </span>
                </button>
                <li>
                  <Link to={"/dashboard"}>DashBoard</Link>
                </li>
                <li>
                  <button onClick={signOut}>Logout</button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <Link to={"/login"}>
            <ThemeBtn text={"Join Us"}></ThemeBtn>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
