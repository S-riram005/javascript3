let brand=document.getElementById("brand");
console.log(brand);
console.log(brand.nodeType);
console.log(brand.nodeName);
brand.style.backgroundColor="purple";
brand.style.color="white";

let stitle=document.getElementsByClassName("sub-title");
console.log(stitle);
stitle[0].style.color="red";
stitle[1].style.color="red";
for(let i=0;i<stitle.length;i++){
    stitle[i].style.color="blue";
};

let para=document.getElementsByTagName("p");
console.log(para);

for(let i=0;i<para.length;i++){
    para[i].style.color="purple"
}

 let heading=document.querySelector("h1");
 console.log(heading);
heading.style.color="orange";

let qpara=document.querySelectorAll("p");
console.log(qpara);
for(let i=0;i<para.length;i++){
    para[i].style.color="green";
}

//html collection

let li=document.getElementsByTagName("li");
console.log(li);
console.log(li.length);
let element=document.createElement("li");
element.innerHTML="javascript";
li[0].parentNode.appendChild(element);
console.log(li);
console.log(li.length);

for(let i=0;i<li.length;i++){
    li[i].style.color="blue";
};


/*

let li=document.querySelectorAll("li");
console.log(li);
console.log(li.length);
let element=document.createElement("li");
element.innerHTML="javascript";
li[0].parentNode.appendChild(element);
console.log(li);
console.log(li.length);
li.forEach((element)=>{
    element.style.color="orange"
});
 li=document.querySelectorAll("li");
console.log(li);
console.log(li.length);
li.forEach((element)=>{
    element.style.color="orange"
});
*/