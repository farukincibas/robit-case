import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import team from './images/img_team.png';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'




export default function ThirdDiv() {
    return (
        <>
            <Jumbotron className="third-div">
                <Container>
                    <Row>
                        <Col sm={6}>
                            <h1 className="second-div-h1-title">
                                Lorem Ipsum is simply dummy text of the <b className="robitBold">Team</b>  printing
                            </h1>
                            <p className="third-div-p-description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </Col>
                        <Col sm={6}>
                        <img src={team} className="teamImg" alt="team" />
                        </Col>
                    </Row>

                </Container>
            </Jumbotron>
        </>
    );
}


