//подключение карусeли
$(document).ready(function () {
	
	//находим обертку(разметку) для карусели
	let reviewsCarousel = $("#reviews-carousel");

	//создаем карусель в элементе
	reviewsCarousel.owlCarousel ({
		items: 1,
		margin: 10,
		loop: true,
		nav: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})

	//находим обертку(разметку) для каусели
	let galeryCarousel = $("#galery-carousel")

	//создаем карусель в элементе
	galeryCarousel.owlCarousel({
		margin:10,
		loop:true,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			575:{
				items:1,
				stagePadding: 110,
			},

			767:{
				items:2,
				stagePadding: 50,
			},
			991:{
				items:2,
				stagePadding: 150,
			},
			
			1199:{
				items:3,
				stagePadding: 100,
			}
		}    
	})
});



	
//подключение модального окна
const modalIcon = document.querySelector('.modal-icon');
const modal = document.querySelector('.modal');

modalIcon.addEventListener('click', function () {
	this.classList.toggle('modal-icon--active');
	modal.classList.toggle('modal--active');
});

// Находим ссылки внутри мобильной навигации
const modalLinks = document.querySelectorAll('.modal a');

// Обходим ссылки методом forEach
modalLinks.forEach(function (item) {
	// Для каждой ссылки добавляем прослушку по событию "Клик"
	item.addEventListener('click', function () {
		modalIcon.classList.remove('modal-icon--active'); // Убираем активный класс у иконки моб. навигации
		modal.classList.remove('modal--active'); // Убираем активный класс у блока моб. навигации
	});
})  	





  