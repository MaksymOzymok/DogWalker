var slideIndex = 0;

var right = function(){
    slideIndex++;
    showSlide(slideIndex);
};
var left = function(){
    slideIndex--;
    showSlide(slideIndex);
};



document.querySelector('.rightButton').addEventListener('click', right);
document.querySelector('.leftButton').addEventListener('click', left);


var showSlide = function(number){

var elements = document.getElementsByClassName('imgf');
number = Math.abs(number % elements.length);
for(var i = 0;i<elements.length;i++){
    elements[i].style.display = "none";
    elements[i].parentElement.className = "slide";
}
elements[number].style.display = "block";
elements[number].parentElement.className += " showing";
}


