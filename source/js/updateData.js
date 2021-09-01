var dataButtons = document.getElementsByTagName('button');

function update(value){
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status === 200){
            responseObject = JSON.parse(xhr.responseText);
            var newContent = '';
            newContent += '<h1>' + responseObject.data[value].title + '</h1>';
            newContent += '<p>' + responseObject.data[value].description + '</p>';
            document.getElementById('updateDataBox').innerHTML= newContent;
            }
        };
        xhr.open('GET', 'source/js/data.json', true);
    xhr.send(null);
};

dataButtons[0].addEventListener('click', function(){
    update(0);
}, false);
dataButtons[1].addEventListener('click', function(){
    update(1);
}, false);
dataButtons[2].addEventListener('click', function(){
    update(2);
}, false);
dataButtons[3].addEventListener('click', function(){
    update(3);
}, false);