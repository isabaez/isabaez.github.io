$(document).ready(function() {

	$('#home').click(function() {
		$('#about-container').toggle(false)
		$('#connect-container').toggle(false)
		$('#home-container').fadeIn()
	})

	$('#about').click(function() {
		$('#home-container').toggle(false)
		$('#connect-container').toggle(false)
		$('#about-container').fadeIn()
	})

	$('#connect').click(function() {
		$('#home-container').toggle(false)
		$('#about-container').toggle(false)
		$('#connect-container').fadeIn()
	})

	$(window).on('blur', function() {
		$("#title").text("Miss you :(")
	})

	$(window).on('focus', function() {
		$("#title").text("Isaias Uriel Baez")
	})
})
