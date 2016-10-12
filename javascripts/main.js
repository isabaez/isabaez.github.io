$(document).ready(function() {

	$(window).on('blur', function() {
		document.title = "Come back soon!";
	})

	$(window).on('focus', function() {
		document.title = "Isaias Uriel Baez";
	})
})

$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $("#about-section").offset().top - 50
    }, 1000);
});

$("#projects").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects-section").offset().top - 50
    }, 1500);
});

$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact-section").offset().top - 50
    }, 1500);
});

$("#brand").click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1500);
});