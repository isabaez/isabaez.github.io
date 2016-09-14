$(document).ready(function() {
	console.log("Ready!")

	$('#home').click(function() {
		console.log("You clicked on home")
		$('#about-container').toggle(false)
		$('#home-container').toggle(true)
	})

	$('#about').click(function() {
		console.log("You clicked on about")
		$('#home-container').toggle(false)
		$('#about-container').toggle(true)
	})

	$('#resume').click(function() {
		console.log("You clicked on resume")
	})
})
