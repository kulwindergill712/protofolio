import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import './contactus.css';
import React, { Component } from 'react'
import axios from 'axios';

export class contactus extends Component {


    constructor(props) {
        super(props);

        this.state = {
            hits: [],



        };

        axios.get(window.url + 'api/contact/get')
            .then(res => {
                this.setState({ hits: res.data.data });
                console.log(this.state.hits);

            })

    }

    render() {
        const { hits } = this.state;
        console.log(hits);
        let col = [];
        hits.map((hit, key) => {
            // push column
            col.push(
                <tr>
                    <th scope="row">{hit.id}</th>

                    <td>{hit.name}</td>
                    <td><a href="https://mail.google.com/mail/u/1/#inbox?compose=new">{hit.email}</a></td>
                    <td>{hit.message}</td>
                    <td>


                        <button type="button" class="btn btn-danger" onClick={() => this.delete(hit.id)} >Delete</button>
                    </td>
                </tr >

            )


        })
        return (
            <div className="j">

                {/* <AddSocial show={this.state.addModalshow} onHide={() => this.setState({ addModalshow: false })} /> */}

                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Message</th>

                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {col}
                        </tbody>
                    </table>

                </div>
            </div >
        )
    }
}

export default contactus
