import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation(); // 👈 THIS IS IMPORTANT
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, [location]); // 👈 runs on route change

 const handleLogout = () => {
  localStorage.removeItem("token");
  setIsLoggedIn(false);

  navigate("/login"); // ✅ redirect after logout
};

  const linkClass =
    "px-3 py-2 rounded-md text-sm font-medium transition";

  const activeClass = "bg-white text-blue-600";
  const inactiveClass = "text-white hover:bg-blue-500";

  return (
    <nav className="h-16 sticky top-0 bg-blue-600 flex items-center px-6 justify-between">

      {/* Logo */}
      <div className="text-white font-bold text-lg">MyApp</div>

      {/* Links */}
      <div className="flex gap-4">
        <NavLink to="/" className={({ isActive }) =>
          `${linkClass} ${isActive ? activeClass : inactiveClass}`
        }>
          Home
        </NavLink>

        <NavLink to="/about" className={({ isActive }) =>
          `${linkClass} ${isActive ? activeClass : inactiveClass}`
        }>
          About
        </NavLink>

        {isLoggedIn && (
          <>
            <NavLink to="/dashboard" className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : inactiveClass}`
            }>
              Dashboard
            </NavLink>

            <NavLink to="/profile" className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : inactiveClass}`
            }>
              Profile
            </NavLink>
          </>
        )}
      </div>

      {/* Auth */}
      <div>
        {!isLoggedIn ? (
          <NavLink
            to="/login"
            className="bg-white text-blue-600 px-4 py-2 rounded-md"
          >
            Login
          </NavLink>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Logout
          </button>
        )}
      </div>

    </nav>
  );
};

export default Navbar;