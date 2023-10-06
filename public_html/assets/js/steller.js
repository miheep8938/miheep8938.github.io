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

document.querySelector('.open-pop').addEventListener('click', openPop);
document.querySelector('.close-pop').addEventListener('click', closePop);

