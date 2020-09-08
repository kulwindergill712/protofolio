import React from 'react'
import axios from 'axios';
import './contact.css';


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

        axios.post('http://192.168.1.22/laravel/protofolio-laravel/public/api/contact', send)
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
                <div id="intro" class="view">
                    <div class="mask rgba-black-strong">
                        <div class="container-fluid d-flex align-items-center justify-content-center h-100">
                            <div class="row d-flex justify-content-center text-center">
                                <div class="col-md-10">
                                    <h2 class="display-4 font-weight-bold white-text pt-5 mb-2">Contact</h2>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                {/* contact form */}
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.handleChangename} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.handleChangemessage} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5" value={this.state.message} onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                {/* contact form */}
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