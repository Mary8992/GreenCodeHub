/* 
const light = document.getElementById('light-button');
const dark = document.getElementById('dark-button'); */

/* const theme = document.getElementById('theme');
theme.addEventListener('click' ,function(){
    document.documentElement.classList.toggle('dark');
}) */

//Dark / Light Mode
const body = document.body;
const sun = document.getElementById("modeToggle");
const currentTheme = localStorage.getItem("theme");
const bg = document.getElementById("bg-img");
bg.style.backgroundImage = "url('bg.jpg')";

if (currentTheme === "dark") {
    setDarkMode();
}

sun.addEventListener("click", function () {
    setTheme();
});

/*moon.addEventListener('click' , function() {
    setTheme();
}) */

function setTheme() {
    let currentTheme = body.getAttribute("theme");

    if (currentTheme === "dark") {
        setLightMode();
    } else {
        setDarkMode();
    }
}

function setDarkMode() {
    body.setAttribute("theme", "dark");
    bg.style.backgroundImage = "url('bg.jpg')";
    localStorage.setItem("theme", "dark");
}

function setLightMode() {
    //default it doesn't need the second parameter
    body.removeAttribute("theme");
    bg.style.backgroundImage =
        "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(bg.jpg)";
    localStorage.setItem("theme", "light");
}
