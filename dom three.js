/*
const btnAdd=document.querySelector("#btnAdd");
const btnRemove=document.querySelector("#btnRemove");
const btnToggle=document.querySelector("#btnToggle");
const box=document.querySelector(".box");

btnAdd.addEventListener("click",function(){
    box.classList.add("new-color");
});
btnRemove.addEventListener("click",function(){
    box.classList.remove("new-color");
});
btnToggle.addEventListener("click",function(){
    box.classList.toggles("new-color");
});
*/

//get attribute setattribute
const btnClick = document.querySelector("#btnClick"); // Use # for id
const input = document.querySelector("input"); // . for class

btnClick.addEventListener("click", function() {
    const getAtt = input.getAttribute("type");
    console.log(getAtt);
    if(getAtt=="text"){
        input.setAttribute("type","password");
    }else{
        input.setAttribute("type","text");
    }
});

//has attribute
console.log(input.hasAttribute("className"));
//get attribute
let list=input.getAttributeNames();
console.log(list);


//remove
input.removeAttribute("id");
list=input.getAttributeNames();
console.log(list);
