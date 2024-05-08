import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="home-dashboard">
          <h1>Blog Application </h1>
          <div className="home-content">
            <Link to="/" className="btn-view-blog">
              View Blogs
            </Link>

            <Link to="/blogs" className="btn-add-blog">
              + Add New Blog
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
