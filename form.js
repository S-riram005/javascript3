const form = document.querySelector("form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const course = document.querySelector("#course");
const checkbox = document.querySelector("#agree");
const radios = document.querySelectorAll('input[name="gender"]');

form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("Form submitted");
    console.log("User Name: ", username.value);
    console.log("Email: ", email.value);

let selectGender="";
radios.forEach((radio)=>{
    if(radio.checked){
        selectGender=radio.value;
}
});
console.log("Gender: ",selectGender);
});


    

course.addEventListener("change",function(e){
    const selectCourse=e.target.value;
    console.log("Select Course: ",selectCourse);
});

form.addEventListener("reset",function(e){
    console.log("Reset or clear form data");
});

checkbox.addEventListener("change",function(e){
    if(e.target.checked){
        console.log("checkbox is checked");
    }else{
        console.log("checkbox is unchecked");
    }
});

username.addEventListener("input",function(e){
    console.log("username input changed:",e.target.value);
})

username.addEventListener("focus",function(e){
    username.style.borderColor="blue";
    
})

username.addEventListener("blur",function(e){
    username.style.borderColor="black";
    
})