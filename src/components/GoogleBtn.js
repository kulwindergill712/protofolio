import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import axios from 'axios';

const CLIENT_ID = '830706872528-p0pm7gjktdg608cj3hg295u1ev7olei2.apps.googleusercontent.com';


class GoogleBtn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogined: false,
            accessToken: ''
        };

        this.login = this.login.bind(this);
        this.handleLoginFailure = this.handleLoginFailure.bind(this);
        this.logout = this.logout.bind(this);
        this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
    }

    login(response) {
        if (response.accessToken) {
            this.setState(state => ({
                isLogined: true,
                accessToken: response.accessToken

            }));
            console.log(this.state.accessToken);
        }

        const data = {
            access: this.state.accessToken,
        };
        axios.post(window.url + 'api/login/google', data)
            .then(res => {
                console.log(res);
                if (res.data.status_code === 1) {
                    console.log(res.data.data.id);

                }
            })
    }

    logout(response) {
        this.setState(state => ({
            isLogined: false,
            accessToken: ''
        }));
    }

    handleLoginFailure(response) {
        alert('Failed to log in')
    }

    handleLogoutFailure(response) {
        alert('Failed to log out')
    }

    render() {
        return (
            <div>
                { this.state.isLogined ?
                    <GoogleLogout
                        clientId={CLIENT_ID}
                        buttonText='Logout'
                        onLogoutSuccess={this.logout}
                        onFailure={this.handleLogoutFailure}
                    >
                    </GoogleLogout> : <GoogleLogin
                        clientId={CLIENT_ID}
                        buttonText='Login'
                        onSuccess={this.login}
                        onFailure={this.handleLoginFailure}
                        cookiePolicy={'single_host_origin'}
                        responseType='code,token'
                    />
                }


            </div>
        )
    }
}

export default GoogleBtn;
