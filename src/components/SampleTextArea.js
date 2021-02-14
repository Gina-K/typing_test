import React, {useContext} from "react";
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
        isError,
        isAllTyped
    } = useContext(Context);

    let charBackground = () => {
        if (!isAllTyped) {
            return isError ? "#dc3545" : "#28a745"
        } else {
            return "transparent";
        }
    };

    return (
        <Card style={{fontSize: 18, backgroundColor: "gainsboro"}}>
            <CardBody>
                <CardText>
                    <span style={{color: "gray"}}>{typedChars}</span>
                    <span className="p-1" style={{
                        color: "white",
                        fontWeight: "bold",
                        backgroundColor: charBackground()
                    }}>{currentChar}</span>
                    <span style={{color: "black"}}>{charsToType}</span>
                </CardText>
            </CardBody>
        </Card>
    );
}

export default SampleTextArea;