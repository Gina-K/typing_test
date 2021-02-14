import React, {useContext} from "react";
import {
    Card,
    CardBody,
    CardText
} from "reactstrap";

import useKeyPress from "../lib/useKeyPress";
import {Context} from "../Context";

function TypingTextArea() {
    const {userInput, setUserInput} = useContext(Context);

    // useKeyPress(key => {
    //     setUserInput(userInput + key);
    // })

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