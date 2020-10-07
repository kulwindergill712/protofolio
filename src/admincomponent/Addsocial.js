import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            image: '',
            link: '',
            user_name: '',
            selectedFile: '',
        };



        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlepicture = this.handlepicture.bind(this);
    }

    handlepicture(event) {
        const data = new FormData()
        data.append('image', event.target.files[0])

        console.log(data);
        axios.post(window.url + 'api/pic', data)
            .then(res => {
                alert(res.data.message);
                this.setState({ image: res.data.data.image_url });

            })
        event.preventDefault();
    }


    handleSubmit(event) {
        const data = {
            image: this.state.image,
            name: this.state.name,
            user_name: this.state.user_name,
            link: this.state.link,
        };
        console.log(data);
        axios.post(window.url + 'api/social/create', data)
            .then(res => {
                alert(res.data.message);
                window.location.replace("/admin/social");
            })

        event.preventDefault();
    }
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add Social link
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ marginLeft: "2cm" }}>
                        <form onSubmit={this.handleSubmit}>
                            <label style={{ marginLeft: "2cm" }}>Image:
                           <input style={{ marginLeft: "1cm" }} type="file" value={this.state.value} onChange={this.handlepicture} />
                            </label><br></br>
                            <label style={{ marginLeft: "2cm" }}>Name:
                           <input style={{ marginLeft: "1cm" }} type="text" value={this.state.value} onChange={event => { this.setState({ name: event.target.value }) }} />
                            </label><br></br>
                            <label style={{ marginLeft: "2cm" }} >Username:
                           <input style={{ marginLeft: "1cm" }} type="text" value={this.state.value} onChange={event => { this.setState({ user_name: event.target.value }) }} />
                            </label><br></br>
                            <label style={{ marginLeft: "2cm" }}>Link:
                           <input style={{ marginLeft: "1cm" }} type="text" value={this.state.value} onChange={event => { this.setState({ link: event.target.value }) }} />
                            </label><br></br>
                            <Button type="submit" value="Submit" variant="success" size="lg">
                                ADD
                      </Button>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>

                    <Button size="lg" onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

}
export default App;  