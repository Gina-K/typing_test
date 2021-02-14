import React, {useContext} from "react";
import {
    Col,
    Container,
    Row
} from "reactstrap";

import SampleTextArea from "./components/SampleTextArea";
import TypingTextArea from "./components/TypingTextArea";
import PerformanceIndicator from "./components/PerformanceIndicator";
import ErrorMessage from "./components/ErrorMessage";
import {Context} from "./Context";

function Main() {
    const {cpm, accuracy} = useContext(Context);

    return (
        <Container className="mb-2">
            <Row className="pt-4 pb-3">
                <Col>
                    <p className="text-muted">
                        Just begin typing the text—and the counter will activate automatically. Good luck!
                    </p>
                </Col>
            </Row>

            <Row className="pt-3 pb-3">
                <Col xs="6" className="d-flex justify-content-center">
                    <PerformanceIndicator type="Speed" value={cpm}/>
                </Col>
                <Col xs="6" className="d-flex justify-content-center">
                    <PerformanceIndicator type="Accuracy" value={accuracy}/>
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
                    <ErrorMessage />
                </Col>
            </Row>
        </Container>
    );
}

export default Main;