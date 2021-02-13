import React from "react";
import {
    Col,
    Container,
    Row
} from "reactstrap";

import SampleTextArea from "./components/SampleTextArea";
import TypingTextArea from "./components/TypingTextArea";
import PerformanceIndicator from "./components/PerformanceIndicator";

function Main() {
    return (
        <Container className="mb-2">
            <Row className="pt-3 pb-3">
                <Col>
                    <p>
                        Just begin typing the text—and the counter will activate automatically. Good luck!
                    </p>
                </Col>
            </Row>

            <Row className="pt-3 pb-3">
                <Col xs="6" className="d-flex justify-content-center">
                    <PerformanceIndicator type="Speed" value="58"/>
                </Col>
                <Col xs="6" className="d-flex justify-content-center">
                    <PerformanceIndicator type="Accuracy" value="97"/>
                </Col>
            </Row>

            <Row className="pt-3 pb-3">
                <Col>
                    <SampleTextArea/>
                </Col>
            </Row>

            <Row className="pt-3 pb-3">
                <Col>
                    <TypingTextArea/>
                </Col>
            </Row>
        </Container>
    );
}

export default Main;