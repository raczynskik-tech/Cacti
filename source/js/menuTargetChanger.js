var header = document.getElementsByTagName('header');
var hiperlinks = document.getElementsByTagName('a');
var perviousHref = ['index.html', 'katalog.html', 'inspiracje.html', 'aktualnosci.html', 'onas.html'];
var folowingHref = ['#sg', '#k', '#i', '#a', 'onas.html'];
var toogle = 0;

function changeHref(){
    var width = window.innerWidth;
    
    if(width > 1024){
        for(var i = 0; i < 5; i++){
            hiperlinks[i + 1].setAttribute('href', folowingHref[i]);
        }
    }else{
        for(var i = 0; i < 5; i++){
            hiperlinks[i + 1].setAttribute('href', perviousHref[i]);
        }
    }
}

header[0].addEventListener('mouseover', changeHref);