import React from 'react'
import { Card } from 'react-bootstrap';
import { Row, Col, Button, CardDeck } from 'react-bootstrap';
import './sociallink.css';







class social extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hits: [],


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
        let columns = [];
        hits.map((hit) => {
            // push column
            columns.push(

                <Row>
                    <Col xs={6} md={4}  >
                        <CardDeck style={{ display: 'block', marginTop: "2cm" }}>
                            <Card className="row" style={{ margin: "1cm", width: '20rem' }}  >
                                <Card.Img style={{ height: '8rem' }} variant="top" img src={window.url + hit.image} />

                                <Card.Body>
                                    <Card.Title>{hit.name}</Card.Title>
                                    <Card.Text>
                                        {hit.user_name}
                                    </Card.Text>

                                    <Button variant="primary" href={hit.link}>Visit</Button>
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

                    <h1>Social-Links</h1>
                </div>

                <div className="car">

                    <div className="row">
                        {columns}

                    </div>



                </div>
            </div >
        );

    }
}
export default social;
