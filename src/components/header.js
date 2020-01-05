// Header Compoent
import PropTypes from "prop-types"
import React, { useState } from "react"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false); // setttingan untuk toggle

  const toggle = () => setIsOpen(!isOpen); // handle toogle event

  return (
      <Navbar fixed="top" light expand="sm">
        <div className="container">
          <NavbarBrand href="/"><b>{siteTitle}</b></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/team">Tim</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tags">Tags</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">Tentang</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
