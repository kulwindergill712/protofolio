import React from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import './About.css';
export default props => {
    return (
        // header
        <div>
            <div id="intro" class="view">
                <div class="mask rgba-black-strong">
                    <div class="container-fluid d-flex align-items-center justify-content-center h-100">
                        <div class="row d-flex justify-content-center text-center">
                            <div class="col-md-10">
                                <h2 class="display-4 font-weight-bold white-text pt-5 mb-2">RESUME</h2>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            {/* ------------------------------- */}

            <Row>
                <Col xs={0} md={3}>
                    <Image style={{ height: '15rem', marginTop: "1cm" }} src="https://data.whicdn.com/images/322027365/original.jpg?t=1541703413" rounded />
                </Col>

                <Col xs={12} md={9}>
                    <div className="name" >
                        <div className='d'>
                            <p style={{ fontSize: "1.5cm" }}>Kulwinder Singh</p>
                            <p>Web Backend Developler</p>
                            <p>kulwindergill712@gmail.com</p>
                            <p>#ward 3 Ganota ,Sangrur 148033 </p>

                        </div>
                    </div>
                </Col>

            </Row>
            <Row>

                <Col>
                    <h1>jgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</h1>
                </Col>
            </Row >


        </div >


    );
};