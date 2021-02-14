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
        charsToType,
        isError
    } = useContext(Context);



    return (
        <Card>
            <CardBody>
                <CardText>
                    <span style={{color: "gray"}}>{typedChars}</span>
                    <span style={isError ? {color: "red"} : {color: "blueviolet"}}>{currentChar}</span>
                    <span style={{color: "black"}}>{charsToType}</span>
                </CardText>
            </CardBody>
        </Card>
    );
}

export default SampleTextArea;