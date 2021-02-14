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
        <Card>
            <CardBody>
                <CardText>
                    {userInput}
                </CardText>
            </CardBody>
        </Card>
    );
}

export default TypingTextArea;