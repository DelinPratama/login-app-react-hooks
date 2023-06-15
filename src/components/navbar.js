import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    // <div className="h-10">
    //   <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">
    //     Home
    //   </NavLink>
    //   <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/login">
    //     Login
    //   </NavLink>
    //   <small>(Access without token only)</small>

    //*link to dashboard
    // <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/dashboard">
    //   Dashboard
    // </NavLink>
    //   <small>(Access with token only)</small>
    // </div>

    <div className="border w-full">
      <div className="navbar bg-slate-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a href="/" className="text-2xl font-extralight hover:opacity-50">
            WebBlog
          </a>
        </div>
        <div className="navbar-end">
          <NavLink className={({ isActive }) => (isActive ? "active" : "hover:opacity-50")} to="/login">
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
}
