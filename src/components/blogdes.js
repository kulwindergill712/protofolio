import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './blogdes.css';



const blogdes = () =>
    <div>
        <div className="navdiv">

            <h1>BLOGs</h1>
        </div>

        <div className="blog">
            <Row>
                <Col>
                    <div className="blogpicture">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkDq6hcRRipzC24YtsPlAXZ9tHdNDQVxEPTw&usqp=CAU"></img>
                    </div>
                </Col>
                <Col xs={10}>
                    <p>HOW To Make First Laravel Project</p>
                    <span>Author:kulwinder singh</span>  <span>created:june 23 2020</span><span>comments :20</span>
                </Col>

            </Row>
            <div className="content">
                <Row >
                    <p1> Probably the most effective way to achieve paragraph unity is to express the central idea of the paragraph in a topic sentence.

                    Topic sentences are similar to mini thesis statements. Like a thesis statement, a topic sentence has a specific main point. Whereas the thesis is the main point of the essay, the topic sentence is the main point of the paragraph. Like the thesis statement, a topic sentence has a unifying function. But a thesis statement or topic sentence alone doesn’t guarantee unity. An essay is unified if all the paragraphs relate to the thesis, whereas a paragraph is unified if all the sentences relate to the topic sentence. Note: Not all paragraphs need topic sentences. In particular, opening and closing paragraphs, which serve different functions from body paragraphs, generally don’t have topic sentences.

                    In academic writing, the topic sentence nearly always works best at the beginning of a paragraph so that the reader knows what to expect:

                    The embrace of Twitter by politicians and journalists has been one of its most notable features in recent years: for both groups the use of Twitter is becoming close to a requirement.

                    —Paul Bernal, “A Defence of Responsible Tweeting”

                    This topic sentence forecasts the central idea or main point of the paragraph: “politicians” and “journalists” rely on Twitter. The rest of the paragraph will focus on these two Twitter-user groups, thereby fulfilling the promise made by the topic sentence. By avoiding irrelevant information that does not relate to the topic sentence, you can compose a unified paragraph.

                </p1>
                </Row>
            </div>

        </div>
    </div>

export default blogdes;