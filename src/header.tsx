import React from "react";
import {Link, NavLink} from "react-router-dom";
import logo from "./logo.svg";
import "./index.css";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={logo} className="header-link" alt="logo"/>
      <h1 className="header-title">React shop</h1>
      <nav>
        <NavLink to="/products" className="header-link"
                 activeClassName="header-link-active">Products</NavLink>
        <NavLink to="/admin" className="header-link"
                 activeClassName="header-link-active">Admin</NavLink>
      </nav>
    </header>
  )
}
