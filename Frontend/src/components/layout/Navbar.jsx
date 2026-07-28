import {
  FiBell,
  FiMoon,
  FiSearch,
  FiUser
} from "react-icons/fi";

function Navbar() {
  const today = new Date();

  return (
    <header className="navbar">

      <div className="navbar-left">

        <h2>Dashboard</h2>

        <p>
          {today.toDateString()}
        </p>

      </div>

      <div className="navbar-center">

        <div className="search-box">

          <FiSearch />

          <input
            type="text"
            placeholder="Search products..."
          />

        </div>

      </div>

      <div className="navbar-right">

        <button className="icon-btn">
          <FiBell />
        </button>

        <button className="icon-btn">
          <FiMoon />
        </button>

        <div className="profile">

          <FiUser />

          <span>Ameer</span>

        </div>

      </div>

    </header>
  );
}

export default Navbar;