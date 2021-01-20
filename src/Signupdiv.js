import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import { Container, Row, Col, Form, Button, Jumbotron } from 'react-bootstrap'




export default function Signupdiv() {
    return (
        <>
            <Jumbotron className="colorfuldiv">
                <Container>
                    <Row>
                        <Col sm={6}>
                            <h1 className="h1text">Lorem Ipsum is simply dummy text of the printing</h1>
                            <p className="ptext">
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                            </p>
                        </Col>
                        <Col sm={6}>
                            <Jumbotron className="registerFormDiv">
                                <h1 className="register-title">Sign up for a free account</h1>
                                <Form>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridName">
                                            <Form.Control className="registerFormInputs" placeholder="Name" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridSurName">
                                            <Form.Control placeholder="Surname" />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Group controlId="formGridEmail">
                                        <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>

                                    <Form.Group controlId="formGridPassword">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" className="btnColorful">
                                        Register
                                </Button>
                                </Form>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>

        </>
    );
}


