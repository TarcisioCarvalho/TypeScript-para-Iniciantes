"use strict";
function toNumber(value) {
    switch (typeof (value)) {
        case "number":
            return value;
        case "string":
            return Number(value);
        default:
            throw "Value deve ser um number ou uma string.";
    }
}
