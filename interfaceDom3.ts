const links = document.querySelectorAll(".link");

links?.forEach(link =>{
   // console.dir(link.__proto__)
    if(link instanceof HTMLElement) ModificaColorEBorder(link);
})

function ModificaColorEBorder(element:HTMLElement){
    element.style.color = "blue";
    element.style.border= "1px solid red";
}