"use strict";
const links = document.querySelectorAll(".link");
links === null || links === void 0 ? void 0 : links.forEach(link => {
    // console.dir(link.__proto__)
    if (link instanceof HTMLElement)
        ModificaColorEBorder(link);
});
function ModificaColorEBorder(element) {
    element.style.color = "blue";
    element.style.border = "1px solid red";
}
