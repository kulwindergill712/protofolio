import React from 'react'


import { Carousel, Navbar, Nav, Form } from 'react-bootstrap';
export default props => {

    return (

        <div >
            <Navbar fixed="top" bg="light">


                <Nav className="mr-auto">
                    <Navbar.Brand href="/">
                        <img
                            src="data:image/png;base64,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"
                            width="60"
                            height="60"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />  <span style={{ fontSize: "1cm", fontFamily: "fantasy", color: "black" }}>Kulwinder Singh</span>

                    </Navbar.Brand>
                </Nav>
                <Form inline >
                    <Nav.Link style={{ fontSize: "0.7cm", fontFamily: "fantasy", color: "black" }} href="/">Home</Nav.Link>
                    <Nav.Link style={{ fontSize: "0.7cm", fontFamily: "fantasy", color: "black" }} href="/project">Project</Nav.Link>
                    <Nav.Link style={{ fontSize: "0.7cm", fontFamily: "fantasy", color: "black" }} href="/about">Resume</Nav.Link>
                    <Nav.Link style={{ fontSize: "0.7cm", fontFamily: "fantasy", color: "black" }} href="/contact">Contact</Nav.Link>
                    <Nav.Link style={{ fontSize: "0.7cm", fontFamily: "fantasy", color: "black" }} href="/sociallinks">Social Links</Nav.Link>
                    <Nav.Link style={{ fontSize: "0.7cm", fontFamily: "fantasy", color: "black" }} href="/blog">Blog</Nav.Link>

                </Form>

            </Navbar>
        </div>

    );
};