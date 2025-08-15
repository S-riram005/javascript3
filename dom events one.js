/*
createElement
appendchild
insertbefore
removechild
remove
clonenode
*/

let para=document.createElement("p");
para.innerHTML="This is <i>sample paragraph</i>";
para.style.color="brown";

const body=document.querySelector("body");
body.appendChild(para);

let h1=document.createElement("h1");
h1.innerHTML="This is Heading";
h1.style.color="red";
body.insertBefore(h1,para);

const removeBtns=document.querySelectorAll(".btnRemove");
removeBtns.forEach((btn)=>{
    btn.addEventListener("click",function() {
        const tr=this.parentNode.parentNode;
        //tr.remove();
        let td=tr.childNodes[5];
        console.log(td);
        tr.removeChild(td);

    });
});


