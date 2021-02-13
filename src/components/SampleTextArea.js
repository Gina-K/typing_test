import React, {useContext} from "react";
import {
    Card,
    CardBody,
    CardText
} from "reactstrap";

import {Context} from "../Context";

function SampleTextArea() {
    const {textForTyping} = useContext(Context);

    return (
        <Card>
            <CardBody>
                <CardText>
                    {textForTyping}
                </CardText>
            </CardBody>
        </Card>
    );
}

export default SampleTextArea;