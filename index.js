"use strict";
console.log("Aki" + toNumber(1));
var input = document.querySelector("input");
if (input)
    input.addEventListener("keyup", TotalMudou);
var value = localStorage.getItem("Total");
if (input && value)
    input.value = value;
calculaGanho(Number(value));
function calculaGanho(value) {
    var p = document.querySelector("p");
    if (p)
        p.innerText = "O Valor Total: " + (value + 100 - value * 0.2);
}
function TotalMudou() {
    if (input) {
        var value_1 = Number(input.value);
        localStorage.setItem("Total", String(value_1));
        calculaGanho(value_1);
    }
}
function toNumber(value) {
    if (typeof value === "number")
        return value;
    if (typeof value === "string")
        return Number(value);
    throw "A função deve receber um número ou uma string";
}
