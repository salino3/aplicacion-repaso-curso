import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <nav className=" navbar navbar-expand-lg ">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="pag2"
              >
                Pagina 2
              </NavLink>
            </li>     <li className="nav-item">
              <NavLink
                className={({isActive}) =>  `nav-link ${isActive ? 'active' : ''}`}
                to="pag3"
              >
                Pagina 3
              </NavLink>
            </li>
          </ul>
        </div>

        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </>
  );
}

export default Nav