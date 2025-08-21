const btnToggle=document.getElementById("theme-toggle");

function toogletheme(){
    const banner=document.getElementById("banner");
    banner.classList.toggle("dark");

    const isDarkTheme=banner.classList.contains("dark");
    localStorage.setItem("themepreference",isDarkTheme?"dark":"light");
}

btnToggle.addEventListener("click",toogletheme);

window.addEventListener("DOMContentLoaded",function(){
    const themepreference=localStorage.getItem("themepreference");
    if(themepreference==="dark");
     const banner=document.getElementById("banner");
    banner.classList.toggle("dark");
 });