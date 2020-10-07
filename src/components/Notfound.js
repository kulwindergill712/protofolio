import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap';
import './Notfound.css';
export default props => {
    return (
        <div >

            <Container>
                <Row>
                    <Col lg={2}>
                        <Button className="button" href="/" size="lg" variant="danger">Go To Home</Button>
                    </Col>
                    <Col lg={10}>

                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png" alt="404 Image" />

                    </Col>
                </Row>

            </Container>

        </div >



    );
};
