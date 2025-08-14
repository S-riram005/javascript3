
const para=document.getElementsByTagName("p");
console.log(para);
const parent=para[0].parentNode;
console.log(parent);
parent.style.backgroundColor="palegreen";
parent.style.padding="10px";


const heading=document.getElementsByTagName("h1");
console.log(heading);
const father=heading[0].parentNode;
console.log(father);
father.style.backgroundColor="palevioletred";
father.style.padding="10px";

//first child:
const firstChild=parent.firstChild;
console.log(firstChild);
//last child:
const lastChild=parent.lastChild;
console.log(lastChild);
//firstelementchild:
const firstElementChild=parent.firstElementChild;
console.log(firstElementChild);
firstElementChild.style.color="blue";

//lastelementchild:
const lastElementChild=parent.lastElementChild;
console.log(lastElementChild);
lastElementChild.style.color="red";


console.log(heading[0].firstChild);
console.log(heading[0].firstElementChild);
console.log(heading[0].lastChild);


//children
/*

const div=document.getElementsByTagName("div")[0];
console.log(div);
console.log(div.children[0]);
console.log(div.children[1]);
*/

//siblings
/*
const p=document.getElementsByTagName("p")[0];
console.log(p);
console.log(p.previousSibling);
console.log(p.previousElementSibling);

const h2=document.getElementsByTagName("h2")[0];
console.log(h2);
console.log(h2.nextSibling);
console.log(p.nextElementSibling);

const section=document.getElementsByTagName("section")[0];
console.log(section);
console.log(section.nextSibling);
console.log(section.nextElementSibling);
console.log(section.previousSibling);
console.log(section.previousElementSibling);
*/

//closet
const h1_tag=document.querySelector("h1");
console.log(h1_tag);
const section=h1_tag.closest("section");
console.log(section);
section.style.backgroundColor="purple";
section.style.color="white";
section.style.padding="10px;"

