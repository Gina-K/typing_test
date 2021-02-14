import React from "react";
import {
    Navbar,
    NavbarBrand
} from "reactstrap";

function Header() {
    return (
        <Navbar color="secondary" dark className="d-flex justify-content-center p-3" >
            <NavbarBrand><h3>Check your typing speed!</h3></NavbarBrand>
        </Navbar>
    );
}

export default Header;