import React from 'react'
import axios from 'axios';
import './login.css';
import { } from 'react-bootstrap';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            type: 'password',

        }
    }
    handleSubmit = event => {
        event.preventDefault();


        const send = {
            email: this.state.email,
            password: this.state.password,

        };



        axios.post(window.url + 'api/user/login', send)
            .then(res => {
                alert(res.data.message);
                if (res.data.status_code === 1) {
                    const data = {
                        username: this.state.email,
                        password: this.state.password,
                        client_id: "2",
                        client_secret: "WRhONJ1xrurpAfNr6KwfU07p5f0IiGKj9CIlMKAS",
                        grant_type: "password",

                    };

                    axios.post(window.url + 'api/oauth/token', data)
                        .then(res => {
                            alert(res.data.message);
                            localStorage.setItem('accesstoken', res.data.access_token)
                            console.log(localStorage.getItem('accesstoken'));

                            window.location.replace("/admin/home");
                        })
                }

            })


    }

    resetForm() {

        this.setState({ email: '', password: '' })
    }



    handleClick = () => this.setState(({ type }) => ({
        type: type === 'text' ? 'password' : 'text'
    }))

    render() {
        return (
            <div className="body">

                <div className="pos" >

                    <form className="contact" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <div className="imgcontainer">
                            <img src="data:image/jpeg;base64,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" alt="Avatar" class="avatar"></img>
                        </div>

                        <div className="form-group">
                            <label className="label" htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={event => { this.setState({ email: event.target.value }); }} />
                        </div>

                        <div className="form-group">
                            <label >passsword</label>
                            <input type={this.state.type} className="form-control" value={this.state.password} onChange={event => { this.setState({ password: event.target.value }); }} />
                            <span className="password__show" onClick={this.handleClick}>{this.state.type === 'text' ? 'Hide' : 'Show'}</span>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>


                    </form>
                </div>


            </div >



        );
    }





}

export default App;