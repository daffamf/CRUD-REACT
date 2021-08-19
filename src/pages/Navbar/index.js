import React from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap'

const navbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">CRUD</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                   
                </Nav>

            </Navbar.Collapse>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar>
    );
}

export default navbar;
