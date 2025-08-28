const btn=document.getElementById("btn");
const output=document.getElementById("output");
btn.addEventListener("click",getpost);
function getpost(){
    const url="https://jsonplaceholder.typicode.com/posts";
    fetch(url).then(response=>{
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        return response.json();
    }).then((data)=>{
        output.innerHTML="";
        data.forEach(post => {
        output.innerHTML+=`
        <div class='post'>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        </div>
        `;
        });
    })
    .catch((error)=>{
        console.error(error);
    });
}



async function fetchPost() {
    try {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const response = await fetch(url); // corrected variable name
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        //console.log(data);
        output.innerHTML="";
        data.forEach(post => {
        output.innerHTML+=`
        <div class='post'>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        </div>
        `;
        });
    } catch (error) {
        console.error(error);
    }
}

// Correct event listener
btn.addEventListener("click", fetchPost);
