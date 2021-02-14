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
                </CardText>
            </CardBody>
        </Card>
    );
}

export default TypingTextArea;