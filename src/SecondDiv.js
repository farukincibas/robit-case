import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'




export default function SecondDiv() {
    return (
        <>
            <Jumbotron className="whitediv">
                <Container>
                    <Row>
                        <Col sm={6}>
                            <h1 className="second-div-h1-title">
                                Lorem Ipsum <b className="robitBold">Robit</b>  is simply dummy text of the printing
                            </h1>
                        </Col>
                    </Row>
                    <Row className="top-buffer">
                        <Col sm={6}>
                            <h3 className="second-div-h3-title">What is Lorem Ipsum?</h3>
                            <p className="second-div-p-description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </Col>
                        <Col sm={6}>
                            <h3 className="second-div-h3-title">What is Lorem Ipsum?</h3>
                            <p className="second-div-p-description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </Col>
                    </Row>
                    <Row className="top-buffer">
                        <Col sm={6}>
                            <h3 className="second-div-h3-title">What is Lorem Ipsum?</h3>
                            <p className="second-div-p-description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </Col>
                        <Col sm={6}>
                            <h3 className="second-div-h3-title">What is Lorem Ipsum?</h3>
                            <p className="second-div-p-description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </>
    );
}


