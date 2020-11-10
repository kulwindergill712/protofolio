import React from 'react'

import { Carousel, Col, Row, Button, ProgressBar, Card } from 'react-bootstrap';
import './Home.css';
import download from 'downloadjs'
import axios from 'axios';






class home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hits: [],


        };
    }


    componentDidMount() {
        const apiUrl = window.url + 'api/crousel/get';
        fetch(apiUrl)
            .then((response) => response.json())
            .then(data => this.setState({ hits: data.data }));

    }


    Dome() {
        axios
            .get(window.url + 'api/cv')
            .then(res => {
                const data = res.data.data
                const dat = window.url + data
                console.log(dat)
                window.open(dat)



            })
            .catch((error) => {
                console.log(error)
            })





    }



    render() {
        const { hits } = this.state;
        let img = [];
        hits.map((hit) => {
            // push column
            img.push(


                <Carousel.Item className="item">
                    <img
                        className="d-block w-100 item"
                        src={window.url + hit.image_url}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>{hit.heading}</h3>
                        <p>{hit.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>



            )

        })

        return (
            < >
                <div className="landing">
                    <Row>

                        <Col xs={10} md={6}>

                            <div className='para'>
                                <p>Hey! I'm a</p>
                                <p>Kulwinder Singh</p>
                                <p>UI/UX & BACKEND DEVELOPLER</p>
                            </div>

                        </Col>
                        <Col xs={8} md={6}>
                            <div className='image2'>
                                <img src='image.png'></img>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="upperdiv" >
                    <Row >
                        <Col>
                            <div className='crousel'>
                                <Carousel >
                                    {img}
                                </Carousel>
                            </div>
                        </Col>
                        <Col xs={2} md={4} lg={6} >
                            <div className='quote'>
                                <h3>“The Best Way To Get Started Is To Quit Talking And Begin Doing.”</h3><br></br><br></br>
                                <h3>“Don’t Let Yesterday Take Up Too Much Of Today.”</h3>
                            </div>

                        </Col>
                    </Row>
                </div>
                <div className="centerdiv">
                    <Row>
                        <Col>
                            <div className="firstcol">
                                <h1>ABOUT<span> ME</span> </h1>
                                <p>Every time I come up with a new tool, or a new idea, or a new service, or an improvement on something I’ve seen before, I add it to that portfolio. Granted, that thing is not entirely PHP (although that is what it is written in), it is mostly JavaScript projects. But there is also Android apps and iPhone apps, and plenty of other stuff.</p>
                                <Button variant="primary" size="lg" active onClick={this.Dome}>
                                    Download CV
                               </Button>

                            </div>
                        </Col>
                        <Col>
                            <img style={{ height: "15cm" }}
                                className="d-block w-100 item"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8tE-HHsIXzxibzqxui8M13DjpMgb-Nbl8Wg&usqp=CAU"
                                alt="First slide"

                            />
                        </Col>
                        <Col>
                            <div className="skill">
                                <h1>Professional Skills</h1>
                                <p>professional skills are career competencies that often are not taught (or acquired) as part of the coursework required to earn your masters or PhD</p>
                                <div className="pro">
                                    <p1>HTML/CSS</p1><br></br>
                                    <ProgressBar now={60} />
                                </div>
                                <div className="pro">
                                    <p1>REACT JS</p1><br></br>
                                    <ProgressBar now={55} />
                                </div>
                                <div className="pro">
                                    <p1>PHP</p1><br></br>
                                    <ProgressBar now={80} />
                                </div>
                                <div className="pro">
                                    <p1>LARAVEL</p1><br></br>
                                    <ProgressBar now={85} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="lowerdiv">
                    <h1>MY SERVICES</h1>
                    <p1>Yes, Engineering is a graduation course as the her 12th is known as undergraduate. And then for his graduation he/she joins the graduation course like Engineering, BA, BBA, BCA and many others to become graduate.</p1>

                    <Row>

                        <Col  >

                            <Card style={{ width: '19rem', height: "14cm" }}>
                                <Card.Img style={{ height: '10rem' }} variant="top" src="data:image/png;base64,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" />
                                <Card.Body>
                                    <Card.Title>PHP</Card.Title>
                                    <Card.Text>
                                        The PHP Hypertext Preprocessor (PHP) is a s web developers to create dynamic content that interacts with databases. PHP is basically used for developing web based software applications. This tutorial helps you to build your base with PHP.
                                     </Card.Text>

                                </Card.Body>
                            </Card>

                        </Col>
                        <Col> <Card style={{ width: '19rem', height: "14cm" }}>
                            <Card.Img style={{ height: '10rem' }} variant="top" src="data:image/png;base64,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" />
                            <Card.Body>
                                <Card.Title>Laravel</Card.Title>
                                <Card.Text>
                                    Laravel is a free, open-source of web applications following the model–view–controller (MVC) architectural pattern and based on Symfony. Some of the features of Laravel are a modular packaging system with a dedicated dependency manager.
                                     </Card.Text>

                            </Card.Body>
                        </Card></Col>
                        <Col> <Card style={{ width: '19rem', height: "14cm" }}>
                            <Card.Img style={{ height: '10rem' }} variant="top" src="data:image/png;base64,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" />
                            <Card.Body>
                                <Card.Title>REACT JS</Card.Title>
                                <Card.Text>
                                    React (also known as React.js or ReactJS) is an open-source JavaScript library[3] for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page or mobile applications.
                                     </Card.Text>

                            </Card.Body>
                        </Card></Col>


                    </Row>

                </div>
            </ >



        );
    }
    download() {
        alert("jfkhd");
        console.log("jdhwf");
    }
}
export default home;












