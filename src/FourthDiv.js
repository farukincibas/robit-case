import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

import platform1 from './images/img_platform_01.png';
import platform2 from './images/img_platform_02.png';
import platform3 from './images/img_platform_03.png';
import { Container, Row, Col, Jumbotron, Card } from 'react-bootstrap'




export default function FourthDiv() {
    return (
        <>
            <Jumbotron className="fourth-div">
                <Container>
                    <Row>
                        <Col sm={7}>
                            <h1 className="second-div-h1-title">
                                <b>Robit Platform standard chunk of lorem ipsum?</b>
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={10}>
                            <p className="fourth-div-p-description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                        </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={4}>
                            <Card className="card-fourth-div">
                                <Card.Img variant="top" src={platform1} />
                                <Card.Body className="bodyCard-fourth-div">
                                    <Card.Title className="bodyCardTitle-fourth-div">Lorem Ipsum</Card.Title>
                                    <Card.Text className="bodyCardDescription-fourth-div">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card className="card-fourth-div">
                                <Card.Img variant="top" src={platform2} />
                                <Card.Body className="bodyCard-fourth-div">
                                    <Card.Title className="bodyCardTitle-fourth-div">Lorem Ipsum</Card.Title>
                                    <Card.Text className="bodyCardDescription-fourth-div">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card className="card-fourth-div">
                                <Card.Img variant="top" src={platform3} />
                                <Card.Body className="bodyCard-fourth-div">
                                    <Card.Title className="bodyCardTitle-fourth-div">Lorem Ipsum</Card.Title>
                                    <Card.Text className="bodyCardDescription-fourth-div">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </Jumbotron>
        </>
    );
}


//<img src={team} className="teamImg" alt="team" />