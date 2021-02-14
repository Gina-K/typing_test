import React, {useEffect, useState} from "react";

const Context = React.createContext();

const boilerplateText = "The API is not responding, so you can only type this example of a text. A wonderful serenity " +
    "has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart." +
    " I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. " +
    "I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my " +
    "talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was " +
    "a greater artist than now."

function ContextProvider({children}) {
    const [textForTyping, setTextForTyping] = useState("");

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

    return (
        <Context.Provider value={{
            textForTyping,
        }}>
            {children}
        </Context.Provider>
    );
}

export {Context, ContextProvider};