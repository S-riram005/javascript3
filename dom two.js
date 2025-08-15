/*
style
innerHTML
innerText
cloneNode()
setInterval()
classList.add()
classList.remove()
classList.toggle()
getAttribute()
setAttribute()
*/

const h1=document.querySelector("h1");
h1.style.color="blue";
h1.style.backgroundColor="palegreen";
h1.style.padding="20px";

//h1.innerText="is a <i>national player</i>";
h1.innerHTML=" sriram is a <i>national player</i>";

//clone
const body=document.querySelector("body");
let cloneH1=h1.cloneNode(true);
body.appendChild(cloneH1);
let cloneH2=h1.cloneNode(false);
body.appendChild(cloneH2);

//setinterval
// function sayHello(){
//     let clone=h1.cloneNode(true);
//     body.appendChild(clone);
// }
// setInterval(sayHello,2000)
let clockDiv = document.querySelector(".clock");
clockDiv.style.fontSize = "30px";

function clock() {
    const data = new Date();
    const time = data.getHours() + " : " + data.getMinutes() + " : " + data.getSeconds();
    clockDiv.innerHTML = time; // Corrected line
}

setInterval(clock, 1000);






