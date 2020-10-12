import React from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import './About.css';

class about extends React.Component {

    render() {
        return (

            <div>
                <div className="navdiv">

                    <h1>Resume</h1>
                </div>


                <Row>
                    <Col xs={9} md={3}>
                        <Image style={{ height: '15rem', marginTop: "1cm" }} src="https://data.whicdn.com/images/322027365/original.jpg?t=1541703413" rounded />
                    </Col>


                    <Col xs={12} md={8}>
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

                    <Col xs={9} md={3}>
                        <div className="skills">
                            <div className='d'>
                                <p style={{ fontSize: "1.5cm" }}>Skills</p>
                                <p>1.HTML</p>
                                <p>2.CSS</p>
                                <p>3.JAVA-SCRIPT</p>
                                <p>4.REACT JS </p>
                                <p>5.CORE PHP </p>
                                <p>6.LARAVEL FRAMEWORk </p>
                            </div>
                            <div className='exper'>
                                <p style={{ fontSize: "1.5cm" }}>Experience</p>
                                <p>1.Java Training(2 months)</p>
                                <p>2.PHP Training(6 months)</p>
                                <p>3.Working As Backend Developler</p>
                                <p> (Aug 2020-till)(Goteso)</p>

                            </div>
                        </div>
                    </Col>

                    <Col xs={12} md={8}>

                        <div className="detail">
                            <div className='education'>
                                <p style={{ fontSize: "1.5cm" }}>Education Qualification</p>
                                <h1>Secondary Education<p1>(2014)</p1></h1>
                                <p2>School:  Akal Academy Mander</p2><br></br>
                                <p2>CGPA:  8.2</p2>

                            </div>
                            <div className='education'>

                                <h1>Higher Secondary Education<p1>(2014-2016)</p1></h1>
                                <p2>School:  Apollo Public Senior Secondary School</p2><br></br>
                                <p2>CGPA:  8.2</p2>

                            </div>
                            <div className='education'>

                                <h1>Bachelor Education<p1>(2016-2020)</p1></h1>
                                <p2>B-Tech(CSE)</p2>
                                <p2>University:  Punjabi University Patiala</p2><br></br>
                                <p2>CGPA:  8.2</p2>

                            </div>
                        </div>

                    </Col>
                </Row >



            </div >
        )
    }
}

export default about;










