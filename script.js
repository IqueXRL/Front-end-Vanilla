/*Menu responsive Dropdown*/
function exibeDropdown () {
    let dropdown = document.querySelector('.menu-navegation')
    dropdown.classList.toggle('exibe-dropdown')
}

/*Seção de Abas*/
let sectionAbas = document.querySelector('.section-abas')
    let abafilmaker = document.querySelector('.section-filmaker')
    let abafotos = document.querySelector('.section-fotos')

function exibeAbaFoto(){

    sectionAbas.classList.add('exibe-abas')
    abafilmaker.classList.remove('exibe-section-filmaker')
    abafotos.classList.add('exibe-section-fotos')
}

function exibeAbaFilmaker (){
    
    sectionAbas.classList.add('exibe-abas')
    abafilmaker.classList.add('exibe-section-filmaker')
    abafotos.classList.remove('exibe-section-fotos')
}

/*Seção Slides*/

/* Slideshow JavaScript */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length};
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].classList.add("active");
}
/* Slideshow JavaScript */