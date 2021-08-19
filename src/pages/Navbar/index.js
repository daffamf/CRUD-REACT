import React from 'react';
import { Navbar } from 'react-bootstrap'

const navbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <div className="container ">
                <Navbar.Brand href="#">CRUD</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                </Navbar.Collapse>
            </div>

        </Navbar>
    );
}

export default navbar;
