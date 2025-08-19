// document.addEventListener("keydown",handleKeyEvent);
// document.addEventListener("keypress",handleKeyEvent);
// document.addEventListener("keyup",handleKeyEvent);
// function handleKeyEvent(event){
//     const eventType=event.type;
//     const keyCode=event.code;
//     const keyName=event.key
//     console.log(`Event type: ${eventType}`);
//     console.log(`key code: ${keyCode}`);
//     console.log(`Key name: ${keyName}`);

// }
const input=document.getElementById("input-num");
const msg=document.getElementById("error");
input.addEventListener("keydown",function(event){
    const key=event.key;
    if(isNaN(key)){
        event.preventDefault();
        msg.textContent="please Enter Number only";
}else{
    msg.textContent= "";

}
});