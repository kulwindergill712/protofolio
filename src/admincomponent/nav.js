import React from 'react';
import { Navbar } from 'react-bootstrap';
import './nav.css';
class App extends React.Component {
    render() {
        if (window.location.pathname === '/admin') return null;
        return (

            <Navbar className="nav" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>



        )
    }
};
export default App;