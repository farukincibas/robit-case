import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

import {Row, Col, Jumbotron, Button } from 'react-bootstrap'




export default function ThirdDiv() {
    return (
        <>
            <Jumbotron className="fifth-div">

                <Row>
                    <Col sm={1} xl={2}></Col>
                    <Col sm={6} xl={5}>
                        <h1 className="fifth-div-h1-title">
                            <b className="robitBold">Robit Register, free account</b>
                        </h1>
                        <p className="third-div-p-description">
                            <b>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.</b>
                        </p>
                    </Col>
                    <Col sm={5} xl={5}>
                        <Button variant="primary" type="submit" className="btnfreeRegisterColorful">
                            Free Register
                            </Button>
                    </Col>
                </Row>


            </Jumbotron>
        </>
    );
}


