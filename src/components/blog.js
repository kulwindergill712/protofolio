import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './blog.css';



const blog = () =>
    <div>
        <div className="navdiv">

            <h1>BLOGs</h1>
        </div>

        <div className="blogl">

            <div className='list'>
                <Row>
                    <Col>
                        <div className="blogpicture">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkDq6hcRRipzC24YtsPlAXZ9tHdNDQVxEPTw&usqp=CAU"></img>
                        </div>
                    </Col>
                    <Col xs={9}>
                        <a href="/blogdes/1"> <p>HOW To Make First Laravel Project</p></a>
                        <span>Author:kulwinder singh</span>  <span>created:june 23 2020</span><span>comments :20</span>
                    </Col>

                </Row>
                <div className="content">
                    <Row >
                        <p1> Probably the most effective way to achieve paragraph unity is to express the central idea of the paragraph in a topic sentence.

                    Topic sentences are similar to mini thesis statements. Like a thesis statement, a topic sentence has a specific main point. Whereas the thesis is the main point of the essay, the topic sentence is the main point of the paragraph. Like the thesis statement, a topic sentence has a unifying function. But a thesis statement or topic sentence alone doesn’t guarantee unity. An essay is unified if all the paragraphs relate to the thesis, whereas a paragraph is unified if all the sentences relate to the topic sentence. Note: Not all paragraphs need topic sentences. In particular, opening and closing paragraphs, which serve different functions from body paragraphs, generally don’t have topic sentences.<a href="/blogdes/1">Read More</a>

                        </p1>
                    </Row>
                </div>
            </div>
            <span>----------------------------------------------------------------------------------------------------------------------------------------------------</span>
            <div className='list'>
                <Row>
                    <Col>
                        <div className="blogpicture">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkDq6hcRRipzC24YtsPlAXZ9tHdNDQVxEPTw&usqp=CAU"></img>
                        </div>
                    </Col>
                    <Col xs={9}>
                        <a href="/blogdes/1"> <p>HOW To Make First Laravel Project</p></a>
                        <span>Author:kulwinder singh</span>  <span>created:june 23 2020</span><span>comments :20</span>
                    </Col>

                </Row>
                <div className="content">
                    <Row >
                        <p1> Probably the most effective way to achieve paragraph unity is to express the central idea of the paragraph in a topic sentence.

                    Topic sentences are similar to mini thesis statements. Like a thesis statement, a topic sentence has a specific main point. Whereas the thesis is the main point of the essay, the topic sentence is the main point of the paragraph. Like the thesis statement, a topic sentence has a unifying function. But a thesis statement or topic sentence alone doesn’t guarantee unity. An essay is unified if all the paragraphs relate to the thesis, whereas a paragraph is unified if all the sentences relate to the topic sentence. Note: Not all paragraphs need topic sentences. In particular, opening and closing paragraphs, which serve different functions from body paragraphs, generally don’t have topic sentences.<a href="/blogdes/1">Read More</a>

                        </p1>
                    </Row>
                </div>
            </div>
        </div>
    </div>

export default blog;