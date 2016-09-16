$(document).ready(function() {

	$('#about').click(function() {
		$('#container-left').fadeIn("slow")
	})

	$('#projects').click(function() {
		$('#container-mid').fadeIn("slow")
	})

	$('#connect').click(function() {
		$('#container-right').fadeIn("slow")
	})

	$(window).on('blur', function() {
		document.title = "Come back soon!";
	})

	$(window).on('focus', function() {
		document.title = "Isaias Uriel Baez";
	})
})
