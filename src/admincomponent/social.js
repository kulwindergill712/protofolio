import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './social.css';
import axios from 'axios';



import AddSocial from './Addsocial'
import EditSocial from './Editsocial'


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hits: [],
            id: null,
            name: null,
            image: null,
            user_name: null,
            link: null,
            addModalshow: false,
            updateModalshow: false,


        };

    }


    componentDidMount() {
        const apiUrl = window.url + 'api/social/get';
        fetch(apiUrl)
            .then((response) => response.json())
            .then(data => this.setState({ hits: data.data }));

    }
    render() {


        const { hits } = this.state;
        let col = [];
        hits.map((hit) => {
            // push column
            col.push(
                <tr>
                    <th scope="row">{hit.id}</th>
                    <td >
                        <img src={window.url + hit.image} roundedCircle alt="hit" style={{ width: '10rem', height: "5rem", borderRadius: "60%" }} />
                    </td>
                    <td>{hit.name}</td>
                    <td>{hit.user_name}</td>
                    <td>{hit.link}</td>
                    <td>
                        <button type="button" class="btn btn-info" onClick={() => this.setState({
                            updateModalshow: true,
                            id: hit.id,
                            name: hit.name,
                            link: hit.link,
                            user_name: hit.user_name,
                            image: hit.image,

                        })}> Edit</button >
                        <EditSocial
                            id={this.state.id}
                            name={this.state.name}
                            link={this.state.link}
                            user_name={this.state.user_name}
                            image={this.state.image}

                            show={this.state.updateModalshow}
                            onHide={() => this.setState({ updateModalshow: false })} />
                        <button type="button" class="btn btn-danger" onClick={() => this.delete(hit.id)} >Delete</button>
                    </td>
                </tr >

            )


        })
        return (

            <div className="j">
                <Button className="button" variant="success" size="lg" onClick={() => this.setState({ addModalshow: true })} >
                    ADD Social Link
                </Button>
                <AddSocial show={this.state.addModalshow} onHide={() => this.setState({ addModalshow: false })} />

                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">User_name</th>
                                <th scope="col">Link</th>
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



    delete(id) {
        if (window.confirm('Are you sure you want to delete this thing?')) {
            axios.delete(window.url + 'api/social/delete/' + id)
                .then(res => {
                    alert(res.data.message);
                    const apiUrl = window.url + 'api/social/get';
                    fetch(apiUrl)
                        .then((response) => response.json())
                        .then(data => this.setState({ hits: data.data }));

                })
        } else {
            // Do nothing!
            console.log('Thing was not saved to the database.');
        }
    }


    update(hit) {
        this.setState({
            updateModalshow: true,
            id: hit.id,
            name: hit.name,
            link: hit.link,
            user_name: hit.user_name,
            image: hit.image,

        })

    }






};
export default App;