import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import logo from './images/footerLogo.png';
import { Row, Col, Jumbotron, Button } from 'react-bootstrap'




export default function Footer() {
    return (
        <>
            <footer className="bg-white text-center text-lg-start">
                <Row>
                    <Col sm={1} xl={1}></Col>
                    <Col sm={1} xl={1}>Menu1</Col>
                    <Col sm={1} xl={1}>Menu2</Col>
                    <Col sm={1} xl={1}>Menu3</Col>
                    <Col sm={4} xl={4}>
                        <img src={logo}  alt="logo" />
                    </Col>
                    <Col sm={1} xl={1}>Menu4</Col>
                    <Col sm={1} xl={1}>Menu5</Col>
                    <Col sm={1} xl={1}>Menu6</Col>
                    <Col sm={1} xl={1}></Col>
                </Row>
                <hr className="hrline"></hr>
                <div className="text-center p-0">


                    <small> © Copyright 2020
                          <a className="text-dark" href="robit.com">Robit Platform</a>
                    </small>



                </div>
            </footer>

        </>
    );
}


