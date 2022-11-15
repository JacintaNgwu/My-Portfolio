const hamburger = document.querySelector(".fa-bars").addEventListener("click",menuList);
const menu = document.querySelector(".mark").addEventListener("click", toggleMenu);
const openIcon = document.querySelector(".bars");
const closeIcon = document.querySelector(".mark");
const page = document.querySelectorAll(".list").length;

function menuList() {
     openIcon.style.display = "none";
     closeIcon.style.display = "block";
     document.querySelector(".main-content").style.visibility = "hidden";
     document.querySelector(".logo").style.visibility = "hidden";
     document.querySelector("#menu-list").style.display = "block";
}

function toggleMenu() {
    openIcon.style.display = "block";
    closeIcon.style.display = "none";
    document.querySelector(".main-content").style.visibility = "visible";
    document.querySelector(".logo").style.visibility = "visible";
    document.querySelector("#menu-list").style.display = "none";
}


