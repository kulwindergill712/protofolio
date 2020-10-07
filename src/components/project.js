import React from 'react'
import { Card } from 'react-bootstrap';
import { Row, Col, CardDeck } from 'react-bootstrap';
import './project.css';
import Projectdes from './projectdesvription'
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
        let columns = [];
        hits.map((hit, key) => {
            // push column
            columns.push(

                <Row>
                    <Col key={key} xs={12} sm={6} md={3} >
                        <CardDeck style={{ display: 'block', marginTop: "2cm" }}>
                            <Card className="row" style={{ margin: "1cm", width: '20rem' }}  >
                                <Card.Img style={{ height: '10rem' }} variant="top" src={window.url + hit.projectimage} />
                                <Card.Body>
                                    <Card.Title>{hit.name}</Card.Title>
                                    <Card.Text>
                                        PROJECTS
                                </Card.Text>
                                    <a href={hit.link} style={{ margin: "2rem" }} class="btn btn-danger">Vise Live Project</a>
                                    <a href={'description/' + hit.id} class="btn btn-primary">Read More</a>

                                </Card.Body>
                            </Card>
                        </CardDeck>

                    </Col>

                </Row>

            )
        })


        return (
            <div>
                <div className="navdiv">

                    <h1>Projects</h1>
                </div>

                <div className="car">

                    <div className="row">
                        {columns}

                    </div>
                </div>


            </div>
        );

    }
}
export default project;
