import React, {
    useContext
} from "react";
import {
    Card,
    CardBody,
    CardText
} from "reactstrap";

import {Context} from "../Context";

function SampleTextArea() {
    const {
        typedChars,
        currentChar,
        charsToType
    } = useContext(Context);

    return (
        <Card>
            <CardBody>
                <CardText>
                    <span style={{color: "gray"}}>{typedChars}</span>
                    <span style={{color: "red"}}>{currentChar}</span>
                    <span style={{color: "black"}}>{charsToType}</span>
                </CardText>
            </CardBody>
        </Card>
    );
}

export default SampleTextArea;