import React, {useContext} from "react";
import {
    Card,
    CardBody,
    CardText
} from "reactstrap";

import {Context} from "../Context";

function TypingTextArea() {
    const {userInput} = useContext(Context);

    return (
        <Card outline color="secondary" style={{fontSize: 18, minHeight: "12rem"}}>
            <CardBody>
                <CardText>
                    {userInput}
                    <span style={{color: "#17a2b8"}}>|</span>
                </CardText>
            </CardBody>
        </Card>
    );
}

export default TypingTextArea;