import React from 'react'
import { Card } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import './project.css';

class project extends React.Component {
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


        return (
            <div>
                <div id="intro" class="view">
                    <div class="mask rgba-black-strong">
                        <div class="container-fluid d-flex align-items-center justify-content-center h-100">
                            <div class="row d-flex justify-content-center text-center">
                                <div class="col-md-10">
                                    <h2 class="display-4 font-weight-bold white-text pt-5 mb-2">Projects</h2>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div >
                    {hits.map((hit, key) =>

                        <Row>
                            <Col key={key} xs={12} sm={6} md={3} >
                                <Card style={{ width: '23rem' }} key={key} >
                                    <Card.Img style={{ height: '10rem' }} variant="top" src={hit.projectimage} />
                                    <Card.Body>
                                        <Card.Title>{hit.name}</Card.Title>
                                        <Card.Text>
                                            PROJECTS
                                            </Card.Text>
                                        <a href={hit.link} style={{ margin: "2rem" }} class="btn btn-danger">Vise Live Project</a>
                                        <a href={hit.id} class="btn btn-primary">Read More</a>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>

                    )}
                </div>

            </div>
        );

    }
}
export default project;
