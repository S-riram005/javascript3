// const catagories = document.getElementById("catagories");

// catagories.addEventListener("click", function(e) {
//     // console.log(e.target);
//     if (e.target.className == "product") {
//         window.location.href = "/" + e.target.id;
//     }
// });


const frm=document.getElementById("frm");

frm.addEventListener("keyup",(e)=>{
    if(e.target.dataset.uppercase!==undefined){
        e.target.value=e.target.value.toUpperCase();
    }
});
