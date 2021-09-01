var buttons = document.getElementsByClassName('inspirationsButtons');
var sections = document.getElementsByClassName('inspirationsContainers');
var descriptions = document.getElementsByClassName('inspirationsDescriptions');
var activity = [0, 0, 0, 0];

function show(value){
    activity[value] = 1 - activity[value];
    if(activity[value] == 1){
        descriptions[value].classList.add('visible');
        buttons[value].innerHTML = "&#8679; Zwiń &#8679;";
        sections[value].classList.add('visible');
        for(var i = 0; i < 4; i++){
            if(i != value && activity[i] == 1){
                show(i);
            }
        }
    }
    else{
        descriptions[value].classList.remove('visible');
        buttons[value].innerHTML = "&#8681; Rozwiń &#8681;";
        sections[value].classList.remove('visible');
    }
}

buttons[0].addEventListener('click', function(){
    show(0);
}, false);
buttons[1].addEventListener('click', function(){
    show(1);
}, false);
buttons[2].addEventListener('click', function(){
    show(2);
}, false);
buttons[3].addEventListener('click', function(){
    show(3);
}, false);