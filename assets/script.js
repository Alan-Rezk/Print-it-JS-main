const slides = [
	{
	  "image": "slide1.jpg",
	  "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  "image": "slide2.jpg",
	  "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
	  "image": "slide3.jpg",
	  "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
	  "image": "slide4.png",
	  "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
  ];
  
  //mise en place des Constantes

  const arrowLeft = document.querySelector('.arrow_left');
  const arrowRight = document.querySelector('.arrow_right');
  const bulletPoints = document.querySelectorAll('.dot');
  const images = document.querySelectorAll('.banner-img');
  const texte = document.querySelector('#banner p');
  
  let indexDiapositive = 0;
  
//création des flèches

  arrowLeft.addEventListener('click', () => {
	indexDiapositive--;
  
	if (indexDiapositive < 0) {
	  indexDiapositive = slides.length - 1;
	}
  
	updateCarousel();
	console.log('Il y a eu un clic sur la flèche gauche.');
  });
  
  arrowRight.addEventListener('click', () => {
	indexDiapositive++;
  
	if (indexDiapositive === slides.length) {
	  indexDiapositive = 0;
	}
  
	updateCarousel();
	console.log('Il y a eu un clic sur la flèche droite.');
  });
  
  //création de la fonction

  function updateCarousel() {
	bulletPoints.forEach((bulletPoint) => {
		bulletPoint.classList.remove('dot_selected');
	});
  	bulletPoints[indexDiapositive].classList.add('dot_selected');

	images.forEach((image) => {
		image.src = slides[indexDiapositive].image;
		image.style.display = 'block';
		texte.innerHTML = slides[indexDiapositive].tagLine;
		console.log(image.src)
	});
  }
  
  