import { useState } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { navs } from "../staticContent/header";

import Logo from "/react.svg";
import { useEffect } from "react";

export const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleLinkClick = () => {
    setIsNavCollapsed(true);
  };

  return (
    <Navbar expand="lg" className="navbar-dark" bg="dark" sticky="top">
      <Container>
        <Link className="navbar-brand" to="/">
          <Image src={Logo} alt="Logo" fluid />
        </Link>
        <Navbar.Toggle
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse in={!isNavCollapsed} id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navs?.map((nav) => (
              <NavLink
                key={nav?.id}
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  isActive ? "text-info nav-link" : "nav-link"
                }
                to={nav?.link}>
                {nav?.name}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
