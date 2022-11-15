alert("welcome");

const hamburger = document.querySelector(".hamburger").addEventListener("click",menuList);
const menu = document.getElementById("menu");
const icon = document.querySelector(".hamburger i");

function myFunction() {
    const x = document.getElementById("menu-list");
    if(x.style.display === "block"){
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function menuList(){
    alert("clicked");
    icon.classList.toggle("fa-xmark");
    icon.classList.toggle("big-icon");
    menu.classList.toggle("show");
}



