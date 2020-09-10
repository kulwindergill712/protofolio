import React from 'react'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';


import './sociallink.css';
export default props => {
    return (
        <div>
            <div id="intro" class="view">
                <div class="mask rgba-black-strong">
                    <div class="container-fluid d-flex align-items-center justify-content-center h-100">
                        <div class="row d-flex justify-content-center text-center">
                            <div class="col-md-10">
                                <h2 class="display-1 font-weight-bold white-text pt-5 mb-2">Social_Links</h2>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div style={{ margin: '0rem' }}>
                <container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Card style={{ width: '23rem' }}>
                                <Card.Img style={{ height: '10rem' }} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9Gqwa46uNhJ6fW5xTkNsjUKLbWItuOqLmZg&usqp=CAU" />
                                <Card.Body>
                                    <Card.Title>Facebook</Card.Title>
                                    <Card.Text>
                                        kulwinder
                                </Card.Text>
                                    <Button variant="primary" href="facebok.com">Facebook</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={4}>
                            <Card style={{ width: '23rem' }}>
                                <Card.Img style={{ height: '10rem' }} variant="top" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/135367823/original/6e59986f8cfe1f4a17c61f21752fd588a2134523/find-instagram-influencers-for-your-brand.jpg" />
                                <Card.Body>
                                    <Card.Title>Instagram</Card.Title>
                                    <Card.Text>
                                        kulwinder_kulu
                                </Card.Text>
                                    <Button variant="primary" href="facebok.com">Instagram</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={4}>
                            <Card style={{ width: '23rem' }}>
                                <Card.Img style={{ height: '10rem' }} variant="top" src="https://149351115.v2.pressablecdn.com/wp-content/uploads/2018/05/SO_Teams.png" />
                                <Card.Body >
                                    <Card.Title>Facebook</Card.Title>
                                    <Card.Text>
                                        kulwinder
                                </Card.Text>
                                    <Button variant="primary" href="facebok.com">Stack Overflow</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={6} md={4}>
                            <Card style={{ width: '23rem' }}>
                                <Card.Img style={{ height: '10rem' }} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9Gqwa46uNhJ6fW5xTkNsjUKLbWItuOqLmZg&usqp=CAU" />
                                <Card.Body>
                                    <Card.Title>Facebook</Card.Title>
                                    <Card.Text>
                                        kulwinder
                                </Card.Text>
                                    <Button variant="primary" href="facebok.com">Facebook</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={4}>
                            <Card style={{ width: '23rem' }}>
                                <Card.Img style={{ height: '10rem' }} variant="top" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/135367823/original/6e59986f8cfe1f4a17c61f21752fd588a2134523/find-instagram-influencers-for-your-brand.jpg" />
                                <Card.Body>
                                    <Card.Title>Instagram</Card.Title>
                                    <Card.Text>
                                        kulwinder_kulu
                                </Card.Text>
                                    <Button variant="primary" href="facebok.com">Instagram</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={4}>
                            <Card style={{ width: '23rem' }}>
                                <Card.Img style={{ height: '10rem' }} variant="top" src="https://149351115.v2.pressablecdn.com/wp-content/uploads/2018/05/SO_Teams.png" />
                                <Card.Body >
                                    <Card.Title>Facebook</Card.Title>
                                    <Card.Text>
                                        kulwinder
                                </Card.Text>
                                    <Button variant="primary" href="facebok.com">Stack Overflow</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </container>

            </div>
        </div>



    );
};
