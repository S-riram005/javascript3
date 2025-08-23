const btnText=document.querySelector("#btn-text");
const outputText=document.querySelector("#txt-output");

btnText.addEventListener("click",getTextFile);

function getTextFile(){
    fetch("data.txt").then((res)=>res.text()).then((data)=>{
        outputText.innerHTML=data;
    })
    }
    
//-----------------------
const btnJson=document.querySelector("#btn-json");
const outputJson=document.querySelector("#json-output");
/*
btnJson.addEventListener("click",getJsonData);
function getJsonData(){
fetch("user.json")
.then((sri)=>sri.json())
.then((user)=>{
outputJson.innerHTML=user;
});
};
*/
btnJson.addEventListener("click", getJsonData);

function getJsonData(){
    fetch("user.json")
        .then((res) => res.json())
        .then((user) => {
            let data = "<ul>";
            user.forEach((userItem) => {
                data += `<li>${userItem.name}${userItem.age}</li>`;
            });
            data += "</ul>";
            outputJson.innerHTML = data;
        })
        .catch((err) => console.error("Error fetching JSON:", err));
};

const btnApi=document.querySelector("#btn-api");
const outputApi=document.querySelector("#api-output");

btnApi.addEventListener("click",getApiData);

 async function getApiData(){
 const response=await fetch("https://jsonplaceholder.typicode.com/posts");
 const jsonData=await response.json();
 let output="";
 jsonData.forEach((post)=>{
    output+=`<div class=post></div>
    <h4>${post.title}</h4>
    <p>${post.body}</p>`
 })
 outputApi.innerHTML=output;
}



    
