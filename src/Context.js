import React, {
    useEffect,
    useState
} from "react";

import useKeyPress from "./lib/useKeyPress";

const Context = React.createContext();

const boilerplateText = "The API is not responding, so you can only type this example of a text. A wonderful serenity " +
    "has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart." +
    " I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. " +
    "I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my " +
    "talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was " +
    "a greater artist than now."

function ContextProvider({children}) {
    const [textForTyping, setTextForTyping] = useState("");
    const [startTime, setStartTime] = useState(0);
    const [charCount, setCharCount] = useState(0);
    const [cpm, setCpm] = useState("0");
    const [typedChars, setTypedChars] = useState("");
    const [currentChar, setCurrentChar] = useState("");
    const [charsToType, setCharsToType] = useState("");
    const [userInput, setUserInput] = useState("");
    const [accuracy, setAccuracy] = useState("0");
    const [isAllTyped, setIsAllTyped] = useState(false);
    const [isError, setIsError] = useState(false);

    const currentTime = () => new Date().getTime();

    useEffect(downloadData, []);

    function downloadData() {
        fetch("https://baconipsum.com/api/?type=all-meat&sentences=8")
            .then(res => res.json())
            .then(data => {
                let tempStr = JSON.stringify(data[0]);
                setTextForTyping(tempStr.substring(1, tempStr.length - 1))
            })
            .catch(error => {
                console.error("Error:", error);
                setTextForTyping(boilerplateText);
            });
    }

    useEffect(() => {
        setCurrentChar(textForTyping.charAt(0));
        setCharsToType(textForTyping.substr(1));
    }, [textForTyping]);

    useKeyPress(key => {
        if (!isAllTyped) {
            setIsAllTyped(charsToType.length === 0);
            let updatedTypedChars = typedChars;
            let updatedCharsToType = charsToType;
            const updatedUserInput = userInput + key;
            setUserInput(updatedUserInput);

            if (!startTime) {
                setStartTime(currentTime());
            }

            if (key === currentChar) {
                setIsError(false);
                let durationInMin = (currentTime() - startTime) / 60000;

                setCharCount(charCount + 1);
                setCpm(((charCount + 1) / durationInMin).toFixed(0));

                updatedTypedChars += currentChar;
                setTypedChars(updatedTypedChars);

                setCurrentChar(charsToType.charAt(0));

                updatedCharsToType = charsToType.substring(1);
                setCharsToType(updatedCharsToType);
            } else {
                setIsError(true);
            }

            setAccuracy(
                ((updatedTypedChars.length * 100) / updatedUserInput.length).toFixed(0)
            );
        }
    });

    return (
        <Context.Provider value={{
            cpm,
            typedChars,
            currentChar,
            charsToType,
            userInput,
            setUserInput,
            accuracy,
            isError,
            isAllTyped
        }}>
            {children}
        </Context.Provider>
    );
}

export {Context, ContextProvider};