import React, {
    useContext,
    useEffect,
    useState
} from "react";
import {
    Card,
    CardBody,
    CardText
} from "reactstrap";

import {Context} from "../Context";
import useKeyPress from "../lib/useKeyPress";

function SampleTextArea() {
    const {textForTyping} = useContext(Context);
    const [typedChars, setTypedChars] = useState("");
    const [currentChar, setCurrentChar] = useState("");
    const [charsToType, setCharsToType] = useState("");

    useEffect(() => {
        setCurrentChar(textForTyping.charAt(0));
        setCharsToType(textForTyping.substr(1));
    }, [textForTyping]);

    useKeyPress(key => {
        let updatedTypedChars = typedChars;
        let updatedCharsToType = charsToType;

        if (key === currentChar) {
            updatedTypedChars += currentChar;
            setTypedChars(updatedTypedChars);

            setCurrentChar(charsToType.charAt(0));

            updatedCharsToType = charsToType.substring(1);
            setCharsToType(updatedCharsToType);
        }
    });


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