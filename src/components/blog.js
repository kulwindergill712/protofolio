
import { Col, Row } from 'react-bootstrap';
import './blog.css';

import React, { Component } from 'react'
import Blogdes from './blogdes';

export class blog extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hits: [],


        };
    }


    componentDidMount() {
        const apiUrl = window.url + 'api/blog/get';
        fetch(apiUrl)
            .then((response) => response.json())
            .then(data => this.setState({ hits: data.data }));

    }

    render() {

        const { hits } = this.state;
        console.log(hits);
        let columns = [];
        hits.map((hit, key) => {
            columns.push(

                <div className='list'>
                    <Row>
                        <Col>
                            <div className="blogpicture">
                                <img src={window.url + hit.picture}></img>
                            </div>
                        </Col>
                        <Col xs={9}>
                            <a href={'blogdes/' + hit.id}> <p>{hit.title}</p></a>
                            <span>Author:{hit.author}</span>  <span>Created At:{hit.created_at}</span><span>Comments:{hit.comment}</span>
                        </Col>

                    </Row>
                    <div className="content">
                        <Row >
                            <p1>{hit.less_des}<a href={'blogdes/' + hit.id} >Read More</a> </p1>




                        </Row>
                    </div><br></br>
                    <hr class="hr-light"></hr>
                </div>


            )
        })
        return (
            <div>

                <div className="navdiv">

                    <h1>Blogs</h1>

                </div>
                <div className="blogl">
                    {columns}
                </div>
            </div>
        )

    }
}

export default blog

