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
		$("#title").text("Come back soon!")
	})

	$(window).on('focus', function() {
		$("#title").text("Isaias Uriel Baez")
	})
})
