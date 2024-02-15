import React from "react";
import "./header.css";
import { Icons } from "../../assets/resources/icons";

function header() {
  return (
    <>
      <nav className="navbar bg-body-tertiary d-flex p-2 align-items-center ">
        {/* Left Navbar Item */}
        <div className="leftnav">
          <a className="navbar-brand ms-2" href="#">
            <img src={Icons.Main} alt="" />
          </a>
        </div>

        {/* Right Navbar Items */}
        <div className="rightnav d-flex align-items-center">
          <a className="navbar-icons p-2" href="#">
            <img src={Icons.Notif} alt="" />
          </a>
          <a className="navbar-icons p-2" href="#">
            <img src={Icons.Client} alt="" />
          </a>

          {/* Account Name Dropdown */}
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Atty. Maria Clara
            </button>

            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default header;
