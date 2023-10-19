/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});

//Open Pop
function openPop(event, popupId) {
    event.preventDefault();
	document.getElementById(popupId).style.display = "block";
}

//Close Pop
function closePop(event, popupId) {
	event.preventDefault();
    document.getElementById(popupId).style.display = "none";
}




// document.querySelectorAll('.open-pop').forEach(element => {
// 	element.addEventListener('click', function(event) {
// 		const popupId = event.target.getAttribute('data-popup-id');
// 		openPop(event,popupId);
// 	});
// });

// document.querySelectorAll('.close-pop').forEach(element => {
//     element.addEventListener('click', function(event) {
//         const popupId = event.target.getAttribute('data-popup-id');
//         closePop(event, popupId);
//     });
// });

function openPDF() {
	window.open('/Users/mihee/Desktop/git_upload/portfolio/assets/pdf/Presentation1.pdf', '_blank');
}

document.querySelectorAll('.open-pop').forEach(element => {element.addEventListener('click', openPop);
});
document.querySelectorAll('.close-pop').forEach(element => {element.addEventListener('click', closePop);
});



// //Open Pop
// function openPop() {
//     // event.preventDefault();
// 	document.getElementById().style.display = "block";
// }

// //Close Pop
// function closePop() {
// 	// event.preventDefault();
//     document.getElementById().style.display = "none";
// }