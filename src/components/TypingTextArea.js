import React, {useState} from "react";
import {
    Card,
    CardBody,
    CardText
} from "reactstrap";

import useKeyPress from "../lib/useKeyPress";

function TypingTextArea() {
    const [userInput, setUserInput] = useState("");

    useKeyPress(key => {
        setUserInput(userInput + key);
    })

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