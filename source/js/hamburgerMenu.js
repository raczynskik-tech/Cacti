var button = document.getElementById("hamburgerMenuButton");
var logs = document.getElementsByClassName("line");
var menu = document.getElementsByTagName("nav")[0];
var article = document.getElementsByTagName("article")[0];
var footer = document.getElementsByTagName("footer")[0];

var guardHamburgerMenu = 0;

function toggleMenu(){
    guardHamburgerMenu = 1 - guardHamburgerMenu;
    if (guardHamburgerMenu == 1){
        menu.classList.add("navVisible");
        article.classList.add("focusOut");
        footer.classList.add("focusOut");
        logs[0].classList.add("line-down");
        logs[0].classList.remove("line-upR");
        logs[1].classList.add("line-hide");
        logs[1].classList.remove("line-unhide");
        logs[2].classList.add("line-up");
        logs[2].classList.remove("line-downR");
    }
    else{
        menu.classList.remove("navVisible");
        article.classList.remove("focusOut");
        footer.classList.remove("focusOut");
        logs[0].classList.add("line-upR");
        logs[0].classList.remove("line-down");
        logs[1].classList.add("line-unhide");
        logs[1].classList.remove("line-hide");
        logs[2].classList.add("line-downR");
        logs[2].classList.remove("line-up");
    }
}

function hideMenu(){
    if (guardHamburgerMenu == 1){
        menu.classList.remove("navVisible");
        article.classList.remove("focusOut");
        footer.classList.remove("focusOut");
        logs[0].classList.add('line-upR');
        logs[0].classList.remove('line-down');
        logs[1].classList.add('line-unhide');
        logs[1].classList.remove('line-hide');
        logs[2].classList.add('line-downR');
        logs[2].classList.remove('line-up');
        guardHamburgerMenu = 0;
    }
}

button.addEventListener('click', toggleMenu, false);
article.addEventListener('click', hideMenu, false);
footer.addEventListener('click', hideMenu, false);