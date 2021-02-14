import React, {useContext} from "react";
import PropTypes from "prop-types";
import {Badge} from "reactstrap";

import {Context} from "../Context";

function PerformanceIndicator({type, value}) {
    const {isAllTyped} = useContext(Context);
    let unit;
    switch (type) {
        case "Speed":
            unit = "cpm";
            break;
        case "Accuracy":
            unit = "%";
            break;
        default:
            unit = null;
    }

    return (
        <h3>
            <Badge color={isAllTyped ? "success" : "light"}>{type}: {value} {unit}</Badge>
        </h3>
    );
}

PerformanceIndicator.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

export default PerformanceIndicator;