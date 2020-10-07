import React from 'react'
import axios from 'axios';
import './contact.css';
import { Row, Col, Container } from 'react-bootstrap';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }
    handleSubmit = event => {
        event.preventDefault();

        const send = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message

        };

        axios.post(window.url + 'api/contact', send)
            .then(res => {
                alert(res.data.message);
                console.log(res.data);
            })
    }

    resetForm() {

        this.setState({ name: '', email: '', message: '' })
    }

    render() {
        return (
            <div>
                <div className="navdiv">

                    <h1>Contact Us</h1>
                </div>
                {/* contact form */}

                <Row>
                    <Col sm={4}>
                        <form className="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <h1>CONTACT US</h1><br></br>
                            <p>Any query?Just Send As a message,I will contact u</p>
                            <div className="form-grou">

                                <input type="text" className="form-control" placeholder="Name" value={this.state.name} onChange={this.handleChangename} />
                            </div>
                            <div className="form-grou">

                                <input type="email" className="form-control" placeholder="E-Mail" aria-describedby="emailHelp" value={this.state.email} onChange={this.handleChangemessage} />
                            </div>
                            <div className="form-grou">

                                <textarea className="form-control" rows="5" placeholder="Message" value={this.state.message} onChange={this.handleChange} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>


                        </form>
                    </Col>

                    <Col lg={8}>
                        <div className="image">

                        </div>

                    </Col>
                </Row>




            </div>

        );
    }

    handleChangename = event => {
        this.setState({ name: event.target.value });

    }
    handleChangemessage = event => {

        this.setState({ email: event.target.value });

    }
    handleChange = event => {


        this.setState({ message: event.target.value });
    }


}

export default App;