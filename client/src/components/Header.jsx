
import { useState } from "react";
import Icon from "./Icon.jsx";
import Logo from "./Logo.jsx";

export default function Header({ go }) {
  const [open, setOpen] = useState(false);

  const navigate = (page) => {
    go(page);
    setOpen(false);
  };

  return (
    <header className="header">
      <div className="container nav-wrap">
        {/* Official TekLight logo */}
        <Logo onClick={() => navigate("home")} />

        <nav
          className={open ? "nav open" : "nav"}
          aria-label="Main navigation"
        >
          <button
            type="button"
            onClick={() => navigate("home")}
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => navigate("topics")}
          >
            Explore Topics
          </button>

          <button
            type="button"
            onClick={() => navigate("materials")}
          >
            Research Materials
          </button>

          <button
            type="button"
            onClick={() => navigate("services")}
          >
            Data Analysis
          </button>

          <button
            type="button"
            onClick={() => navigate("about")}
          >
            About
          </button>

          {/* Authentication buttons */}
          <span className="nav-actions">
            <button
              className="text-button"
              type="button"
              onClick={() => navigate("signin")}
            >
              Sign in
            </button>

            <button
              className="button small"
              type="button"
              onClick={() => navigate("register")}
            >
              Register
              <Icon name="arrow" size={16} />
            </button>
          </span>
        </nav>

        {/* Mobile navigation toggle */}
        <button
          className="menu-button"
          aria-label={
            open ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={open}
          onClick={() => setOpen((previous) => !previous)}
          type="button"
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
    </header>
  );
}
