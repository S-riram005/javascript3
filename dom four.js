document.getElementById("btn").onclick=function(){
    alert("welcome to sriram javascript channel");
};
const btn=document.querySelector(".btn");
// btn.addEventListener('click',function(){
//     alert("welcome to sriram javascript channel");
// });

btn.addEventListener("dblclick",function(){
    alert("welcome to sriram javascript channel");
});

btn.addEventListener("mousedown",function(){
    this.style.backgroundColor="Red";
});

btn.addEventListener("mouseout",function(){
    this.style.backgroundColor="yellow";
});

btn.addEventListener("mouseup",function(){
    this.style.backgroundColor="blue";
});

btn.addEventListener("mouseover",function(){
    this.style.backgroundColor="orange";
});