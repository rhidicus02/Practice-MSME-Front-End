import React, { useState } from "react";
import "./sidebar.css";
import { Icons } from "../../assets/resources/icons";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="column ps-3 pe-4">
        <a
          href=""
          className="text-decoration-none d-flex align-items-center"
          onClick={toggleCollapse}
        >
          <img src={Icons.Navburger} alt="" />
          <span>Menu</span>
        </a>
        <a href="" className="text-decoration-none d-flex align-items-center">
          <img src={Icons.Navhome} alt="" />
          <span>Home</span>
        </a>
        <a href="" className="text-decoration-none d-flex align-items-center">
          <img src={Icons.Lexassist} alt="" />
          <span>Assist</span>
        </a>
        <a href="" className="text-decoration-none d-flex align-items-center">
          <img src={Icons.Lexconsult} alt="" />
          <span>Consult</span>
        </a>
        <a href="" className="text-decoration-none d-flex align-items-center">
          <img src={Icons.Lexdocs} alt="" />
          <span>Docs</span>
        </a>
        <a href="" className="text-decoration-none d-flex align-items-center">
          <img src={Icons.Lexoffice} alt="" />
          <span>Works</span>
        </a>
        <a
          href=""
          className="text-decoration-none d-flex align-items-center border-bottom"
        >
          <img src={Icons.Law} alt="" />
          <span>Everyday Law</span>
        </a>
        <a href="" className="text-decoration-none d-flex align-items-center">
          <img src={Icons.Credit} alt="" />
          <span>Credits</span>
        </a>
        <a href="" className="text-decoration-none d-flex align-items-center">
          <img src={Icons.Lexdocs} alt="" />
          <span>File Manager</span>
        </a>
        <a href="" className="text-decoration-none d-flex align-items-center">
          <img src={Icons.Prizes} alt="" />
          <span>Promos</span>
        </a>
        <a href="" className="text-decoration-none d-flex align-items-center">
          <img src={Icons.lexweb} alt="" />
          <span>Vendor Portal</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
