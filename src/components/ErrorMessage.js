import React, {useContext} from "react";

import {Context} from "../Context";

function ErrorMessage() {
    const imgSrc = process.env.PUBLIC_URL + "img/nelson.png";
    const {isError} = useContext(Context);
    const style = {
        display: isError ? "block" : "none",
        position: "absolute",
        bottom: 0,
        right: "20px",
        zIndex: "999",
        width: "200px"
    }

    return (
        <img src={imgSrc} style={style} alt="Ha-ha!"/>
    );
}

export default ErrorMessage;