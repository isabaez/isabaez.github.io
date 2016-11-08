$(document).ready(function() {

	$(window).on('blur', function() {
		document.title = "Come back soon!";
	})

	$(window).on('focus', function() {
		document.title = "Isaias Uriel Baez";
	})

	$("#projects").click(function() {
		$(".projects").toggle()
		console.log('clicked')
	})

	$(".fa-times").click(function() {
		$(".projects").toggle()
	})
})