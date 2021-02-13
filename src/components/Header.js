import React from "react";
import {
    Navbar,
    NavbarBrand
} from "reactstrap";

function Header() {
    return (
        <Navbar color="primary" dark className="d-flex justify-content-center" >
            <NavbarBrand>Check your typing speed!</NavbarBrand>
        </Navbar>
    );
}

export default Header;