
import { Navbar } from 'react-bootstrap';
import './project.css';
import { Button } from 'react-bootstrap';
import React, { Component } from 'react'

export class project extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hits: [],

        };

    }
    componentDidMount() {
        const apiUrl = window.url + 'api/project/get';
        fetch(apiUrl)
            .then((response) => response.json())
            .then(data => this.setState({ hits: data.data }));

    }

    render() {

        const { hits } = this.state;
        console.log(hits);
        let col = [];
        hits.map((hit, key) => {

            col.push(
                <tr>
                    <th scope="row">{hit.id}</th>
                    <td><img src={window.url + hit.projectimage} roundedCircle alt="hit" style={{ width: '10rem', height: "5rem", borderRadius: "60%" }} /></td>
                    <td><a>{hit.name}</a></td>
                    <td>{hit.link}</td>
                    <td>


                        <button type="button" class="btn btn-danger" onClick={() => this.delete(hit.id)} >Delete</button>
                    </td>
                </tr >

            )


        })
        return (
            <div className='j'>
                <Button className="button" variant="success" size="lg" >
                    Add New Project
                </Button>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Link</th>

                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {col}
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}

export default project


